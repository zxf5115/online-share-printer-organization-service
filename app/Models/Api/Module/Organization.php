<?php
namespace App\Models\Api\Module;

use Illuminate\Support\Facades\DB;

use App\TraitClass\ToolTrait;
use App\Http\Constant\Parameter;
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

      if(!empty($data))
      {
        $model->archive()->delete();
        $model->archive()->create($data);
      }

      $data = [
        'money' => 0.00,
      ];

      if(!empty($data))
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
