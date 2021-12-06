<?php
namespace App\Models\Api\Module;

use App\Models\Common\Module\Repair as Common;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-11-25
 *
 * 报修模型类
 */
class Repair extends Common
{


  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-09-13
   * ------------------------------------------
   * 报修与报修分类关联函数
   * ------------------------------------------
   *
   * 报修与报修分类关联函数
   *
   * @return [关联对象]
   */
  public function category()
  {
    return $this->belongsTo(
      'App\Models\Api\Module\Repair\Category',
      'category_id',
      'id'
    );
  }

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-09-13
   * ------------------------------------------
   * 报修与会员关联表
   * ------------------------------------------
   *
   * 报修与会员关联表
   *
   * @return [关联对象]
   */
  public function member()
  {
    return $this->belongsTo(
      'App\Models\Api\Module\Member',
      'member_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-09-13
   * ------------------------------------------
   * 报修与打印机关联表
   * ------------------------------------------
   *
   * 报修与打印机关联表
   *
   * @return [关联对象]
   */
  public function printer()
  {
    return $this->belongsTo(
      'App\Models\Api\Module\Printer',
      'printer_id',
      'id'
    );
  }
}
