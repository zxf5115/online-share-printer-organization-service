<?php
namespace App\Models\Api\Module;

use Illuminate\Support\Facades\DB;

use App\TraitClass\ToolTrait;
use App\Http\Constant\Parameter;
use App\Enum\Module\Organization\RoleEnum;
use App\Models\Common\Module\Organization\Obtain;
use App\Models\Common\Module\Organization as Common;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-06-09
 *
 * 机构模型类
 */
class Organization extends Common
{
  use ToolTrait;

  // 隐藏的属性
  public $hidden = [
    'organization_id',
    'open_id',
    'password',
    'password_salt',
    'remember_token',
    'last_login_time',
    'last_login_ip',
    'try_number',
    'status',
    'create_time',
    'update_time'
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2022-02-25
   * ------------------------------------------
   * 角色信息封装
   * ------------------------------------------
   *
   * 角色信息封装
   *
   * @param [type] $value [description]
   * @return [type]
   */
  public function getRoleIdAttribute($value)
  {
    return RoleEnum::getRoleInfo($value);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-07-01
   * ------------------------------------------
   * 注册
   * ------------------------------------------
   *
   * 注册
   *
   * @return [type]
   */
  public static function register($request, $open_id)
  {
    DB::beginTransaction();

    try
    {
      $role_id = 3;

      $parent_id = 0;

      $username = '';

      // 如果存在邀请密钥
      if(!empty($request->token))
      {
        // 将邀请密钥数据解密
        $invitation = explode(';', $request->token);

        $username = self::decrypt($invitation['0']);

        $role_id = self::decrypt($invitation['1']);
      }

      if(2 == $role_id)
      {
        $model = self::firstOrNew(['open_id' => $open_id, 'status' => 1]);

        $parent_id = self::getValue('id', ['username' => $username]);

        $model->parent_id = $parent_id;
        $model->level = 0;
      }
      else
      {
        $model = self::firstOrNew(['username' => $username, 'status' => 1]);
      }

      $model->open_id   = $open_id ?? '';
      $model->role_id   = $role_id ?? '';
      $model->avatar    = Parameter::AVATER;
      $model->nickname  = Parameter::NICKNAME . '_' . time();
      $model->save();

      $data = [
        'sex'         => $request->sex ?? '1',
        'age'         => $request->age ?? '1',
        'province_id' => $request->province_id ?? '',
        'city_id'     => $request->city_id ?? '',
        'region_id'   => $request->region_id ?? '',
        'address'     => $request->address ?? '',
      ];

      if(2 == $role_id && !empty($data))
      {
        $model->archive()->delete();
        $model->archive()->create($data);
      }

      $data = [
        'money' => 0.00,
      ];

      if(2 == $role_id && !empty($data))
      {
        $model->asset()->delete();
        $model->asset()->create($data);
      }

      DB::commit();

      return $model;
    }
    catch(\Exception $e)
    {
      DB::rollback();

      record($e);

      return false;
    }
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2022-01-14
   * ------------------------------------------
   * 完善信息
   * ------------------------------------------
   *
   * 完善信息
   *
   * @return [type]
   */
  public static function complete($request, $open_id)
  {
    try
    {
      $role_id = 3;

      $parent_id = 0;

      $username = '';

      // 如果存在邀请密钥
      if(!empty($request->token))
      {
        // 将邀请密钥数据解密
        $invitation = explode(';', $request->token);

        $username = self::decrypt($invitation['0']);

        $role_id = self::decrypt($invitation['1']);
      }

      $model = self::firstOrNew(['open_id' => $open_id, 'status' => 1]);

      if(2 == $role_id)
      {
        $parent_id = self::getValue('id', ['username' => $username]);

        $model->parent_id = $parent_id;
      }
      else
      {
        $model->username = $username;
      }

      $model->open_id  = $open_id ?? '';
      $model->role_id  = $role_id ?? '';
      $model->avatar   = $request->avatar ?? $model->avatar;
      $model->nickname = $request->nickname ?? $model->nickname;
      $model->save();

      return true;
    }
    catch(\Exception $e)
    {
      record($e);

      return false;
    }
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-06-10
   * ------------------------------------------
   * 获取openid
   * ------------------------------------------
   *
   * 获取openid
   *
   * @param string $code [description]
   * @return [type]
   */
  public static function  getUserOpenId($code)
  {
    $param = [];

    $param[] = 'appid=' . config('weixin.weixin_key');
    $param[] = 'secret=' . config('weixin.weixin_secret');
    $param[] = 'js_code=' . $code;
    $param[] = 'grant_type=authorization_code';

    $params = implode('&', $param);    //用&符号连起来

    $url = config('weixin.weixin_openid_url') . '?' . $params;

    //请求接口
    $client = new \GuzzleHttp\Client([
        'timeout' => 60
    ]);

    $res = $client->request('GET', $url);

    //openid和session_key
    return json_decode($res->getBody()->getContents(), true);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2022-01-13
   * ------------------------------------------
   * 获取微信token信息
   * ------------------------------------------
   *
   * 获取微信token信息
   *
   * @return [type]
   */
  public static function  getWeixinToken()
  {
    $param = [];

    $param[] = 'grant_type=client_credential';
    $param[] = 'appid=' . config('weixin.weixin_key');
    $param[] = 'secret=' .  config('weixin.weixin_secret');

    $params = implode('&', $param);    //用&符号连起来

    $url = config('weixin.weixin_token_url') . '?' . $params;

    //请求接口
    $client = new \GuzzleHttp\Client([
        'timeout' => 60
    ]);

    $res = $client->request('GET', $url);

    return json_decode($res->getBody()->getContents(), true);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2022-02-12
   * ------------------------------------------
   * 获取微信手机号码信息
   * ------------------------------------------
   *
   * 获取微信手机号码信息
   *
   * @param string $code [description]
   * @return [type]
   */
  public static function getWeixinMobile($code, $request, $iv)
  {
    $appid = config('weixin.weixin_key');

    $data = self::getUserOpenId($code);

    $secret = $data['session_key'];

    $model = new WXBizDataCrypt($appid, $secret);

    $errCode = $model->decryptData($request, $iv, $response);

    $response = json_decode($response, true);

    $response['openid'] = $data['openid'];

    return $response;
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2022-01-13
   * ------------------------------------------
   * 获取微信小程序二维码
   * ------------------------------------------
   *
   * 获取微信小程序二维码
   *
   * @param string $token 微信token
   * @param string $data 小程序数据
   * @return [type]
   */
  public static function getQrCode($token, $data)
  {
    $param = [];

    $param[] = 'access_token=' . $token;

    $params = implode('&', $param);    //用&符号连起来

    $url = config('weixin.weixin_qrcode_url') . '?' . $params;

    //请求接口
    $client = new \GuzzleHttp\Client([
        'timeout' => 60
    ]);

    $res = $client->request('POST', $url, [
      'json' => [
        'path' => 'pages/login/index?token='.$data
      ]
    ]);

    return $res->getBody()->getContents();
  }


  // 关联函数 ------------------------------------------------------


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-09-17
   * ------------------------------------------
   * 机构与上级机构关联函数
   * ------------------------------------------
   *
   * 机构与上级机构关联函数
   *
   * @return [关联对象]
   */
  public function parent()
  {
    return $this->belongsTo(
      'App\Models\Api\Module\Organization',
      'parent_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-09-24
   * ------------------------------------------
   * 机构与下级机构关联函数
   * ------------------------------------------
   *
   * 机构与下级机构关联函数
   *
   * @return [关联对象]
   */
  public function children()
  {
    return $this->hasMany(
      'App\Models\Api\Module\Organization',
      'id',
      'parent_id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-06-08
   * ------------------------------------------
   * 机构与角色关联函数
   * ------------------------------------------
   *
   * 机构与角色关联函数
   *
   * @return [关联对象]
   */
  public function role()
  {
    return $this->belongsTo(
      'App\Models\Api\Module\Member\Role',
      'role_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-06-08
   * ------------------------------------------
   * 机构与档案关联函数
   * ------------------------------------------
   *
   * 机构与档案关联函数
   *
   * @return [关联对象]
   */
  public function archive()
  {
    return $this->hasOne(
      'App\Models\Api\Module\Organization\Archive',
      'member_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-06-08
   * ------------------------------------------
   * 机构与资产关联表
   * ------------------------------------------
   *
   * 机构与资产关联表
   *
   * @return [关联对象]
   */
  public function asset()
  {
    return $this->hasOne(
      'App\Models\Api\Module\Organization\Asset',
      'member_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-06-08
   * ------------------------------------------
   * 机构与资源关联函数
   * ------------------------------------------
   *
   * 机构与资源关联函数
   *
   * @return [关联对象]
   */
  public function resource()
  {
    return $this->hasOne(
      'App\Models\Api\Module\Organization\Resource',
      'member_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-06-08
   * ------------------------------------------
   * 会员与银行关联函数
   * ------------------------------------------
   *
   * 会员与银行关联函数
   *
   * @return [关联对象]
   */
  public function bank()
  {
    return $this->hasOne(
      'App\Models\Api\Module\Organization\Bank',
      'member_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-12-08
   * ------------------------------------------
   * 机构与收益关联函数
   * ------------------------------------------
   *
   * 机构与收益关联函数
   *
   * @return [关联对象]
   */
  public function obtain()
  {
    return $this->hasMany(
      'App\Models\Api\Module\Organization\Obtain',
      'member_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-09-24
   * ------------------------------------------
   * 一级代理商与机构打印机关联表
   * ------------------------------------------
   *
   * 一级代理商与机构打印机关联表
   *
   * @return [关联对象]
   */
  public function first()
  {
    return $this->hasMany(
      'App\Models\Api\Module\Printer',
      'first_level_agent_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-09-24
   * ------------------------------------------
   * 二级代理商与机构打印机关联表
   * ------------------------------------------
   *
   * 二级代理商与机构打印机关联表
   *
   * @return [关联对象]
   */
  public function second()
  {
    return $this->hasMany(
      'App\Models\Api\Module\Printer',
      'second_level_agent_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-09-24
   * ------------------------------------------
   * 店长与机构打印机关联表
   * ------------------------------------------
   *
   * 店长与机构打印机关联表
   *
   * @return [关联对象]
   */
  public function printer()
  {
    return $this->hasMany(
      'App\Models\Api\Module\Printer',
      'manager_id',
      'id'
    );
  }
}
