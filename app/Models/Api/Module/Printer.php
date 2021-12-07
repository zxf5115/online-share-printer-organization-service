<?php
namespace App\Models\Api\Module;

use App\Models\Common\Module\Printer as Common;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-09-04
 *
 * 打印机模型类
 */
class Printer extends Common
{
  // 隐藏的属性
  public $hidden = [
    'organization_id',
    'status',
    'create_time',
    'update_time'
  ];


  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-09-04
   * ------------------------------------------
   * 打印机与打印机日志关联函数
   * ------------------------------------------
   *
   * 打印机与打印机日志关联函数
   *
   * @return [关联对象]
   */
  public function log()
  {
    return $this->hasMany(
      'App\Models\Api\Module\Printer\Log',
      'printer_id',
      'id',
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-09-04
   * ------------------------------------------
   * 打印机与一级代理商关联函数
   * ------------------------------------------
   *
   * 打印机与一级代理商关联函数
   *
   * @return [关联对象]
   */
  public function first()
  {
    return $this->belongsTo(
      'App\Models\Api\Module\Organization',
      'first_level_agent_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-09-04
   * ------------------------------------------
   * 打印机与二级代理商关联函数
   * ------------------------------------------
   *
   * 打印机与二级代理商关联函数
   *
   * @return [关联对象]
   */
  public function second()
  {
    return $this->belongsTo(
      'App\Models\Api\Module\Organization',
      'second_level_agent_id',
      'id'
    );
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-09-04
   * ------------------------------------------
   * 打印机与店长关联函数
   * ------------------------------------------
   *
   * 打印机与店长关联函数
   *
   * @return [关联对象]
   */
  public function manager()
  {
    return $this->belongsTo(
      'App\Models\Api\Module\Organization',
      'manager_id',
      'id'
    );
  }
}
