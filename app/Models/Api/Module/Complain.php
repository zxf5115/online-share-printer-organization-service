<?php
namespace App\Models\Api\Module;

use App\Models\Common\Module\Complain as Common;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-10-06
 *
 * 投诉模型类
 */
class Complain extends Common
{
  // 隐藏的属性
  public $hidden = [
    'organization_id',
    'member_id',
    'type',
    'read_status',
    'status',
    'update_time'
  ];


  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-12-07
   * ------------------------------------------
   * 投诉与投诉资源关联表
   * ------------------------------------------
   *
   * 投诉与投诉资源关联表
   *
   * @return [关联对象]
   */
  public function resource()
  {
    return $this->hasMany(
      'App\Models\Api\Module\Complain\Resource',
      'complain_id',
      'id',
    );
  }
}
