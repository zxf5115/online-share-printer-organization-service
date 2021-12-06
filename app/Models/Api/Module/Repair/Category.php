<?php
namespace App\Models\Api\Module\Repair;

use App\Models\Common\Module\Repair\Category as Common;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-11-25
 *
 * 报修分类模型类
 */
class Category extends Common
{
  // 隐藏的属性
  public $hidden = [
    'organization_id',
    'position_id',
    'sort',
    'status',
    'create_time',
    'update_time'
  ];


  // 关联函数 ------------------------------------------------------

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-11-25
   * ------------------------------------------
   * 报修分类与报修关联函数
   * ------------------------------------------
   *
   * 报修分类与报修关联函数
   *
   * @return [关联对象]
   */
  public function repair()
  {
    return $this->hasMany(
      'App\Models\Api\Module\Repair',
      'category_id',
      'id'
    );
  }
}
