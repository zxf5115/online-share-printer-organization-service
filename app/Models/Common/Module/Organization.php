<?php
namespace App\Models\Common\Module;

use App\Models\Base;
use App\TraitClass\UserTrait;
use App\Enum\Module\Member\MemberEnum;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-08-01
 *
 * 机构模型类
 */
class Organization extends Base
{
  use UserTrait;

  // 表名
  public $table = "module_organization";

  // 可以批量修改的字段
  public $fillable = [
    'open_id',
    'username',
  ];

  // 隐藏的属性
  public $hidden = [
    'password',
    'remember_token',
    'password_salt',
    'try_number',
    'last_login_ip'
  ];


  /**
   * 转换属性类型
   */
  protected $casts = [
    'status' => 'array',
    'last_login_time' => 'datetime:Y-m-d H:i:s',
    'create_time' => 'datetime:Y-m-d H:i:s',
    'update_time' => 'datetime:Y-m-d H:i:s',
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2022-02-23
   * ------------------------------------------
   * 电话号码封装
   * ------------------------------------------
   *
   * 电话号码封装
   *
   * @param int $value 状态值
   * @return 状态信息
   */
  public function getUsernameAttribute($value)
  {
    $length = strlen($value) - 7;

    if(0 >= $length)
    {
      return $value;
    }

    $data = str_repeat('*', $length);

    return substr_replace($value, $data, 3, $length);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-09-24
   * ------------------------------------------
   * 机构级别封装
   * ------------------------------------------
   *
   * 机构级别封装
   *
   * @param [type] $value [description]
   * @return [type]
   */
  public function getLevelAttribute($value)
  {
    return MemberEnum::getLevelStatus($value);
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2020-12-20
   * ------------------------------------------
   * 机构状态封装
   * ------------------------------------------
   *
   * 机构状态封装
   *
   * @param [type] $value [description]
   * @return [type]
   */
  public function getStatusAttribute($value)
  {
    return MemberEnum::getStatus($value);
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
      'App\Models\Common\Module\Organization',
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
      'App\Models\Common\Module\Organization',
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
      'App\Models\Common\Module\Member\Role',
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
      'App\Models\Common\Module\Organization\Archive',
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
      'App\Models\Common\Module\Organization\Asset',
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
      'App\Models\Common\Module\Organization\Resource',
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
      'App\Models\Common\Module\Organization\Bank',
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
      'App\Models\Common\Module\Organization\Obtain',
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
      'App\Models\Common\Module\Printer',
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
      'App\Models\Common\Module\Printer',
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
      'App\Models\Common\Module\Printer',
      'manager_id',
      'id'
    );
  }
}
