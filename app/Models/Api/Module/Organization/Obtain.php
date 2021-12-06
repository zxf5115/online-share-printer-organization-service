<?php
namespace App\Models\Api\Module\Organization;

use App\Models\Common\Module\Organization\Obtain as Common;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-11-23
 *
 * 机构分红模型类
 */
class Obtain extends Common
{
  // 隐藏的属性
  public $hidden = [
    'organization_id',
    'member_id',
    'confirm_status',
    'status',
    'update_time'
  ];

  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-09-25
   * ------------------------------------------
   * 代理商收益与代理商关联表
   * ------------------------------------------
   *
   * 代理商收益与代理商关联表
   *
   * @return [关联对象]
   */
  public function organization()
  {
    return $this->belongsTo(
      'App\Models\Api\Module\Organization',
      'member_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-11-25
   * ------------------------------------------
   * 代理商收益与订单关联表
   * ------------------------------------------
   *
   * 代理商收益与订单关联表
   *
   * @return [关联对象]
   */
  public function order()
  {
    return $this->belongsTo(
      'App\Models\Api\Module\Order',
      'order_id',
      'id'
    );
  }
}
