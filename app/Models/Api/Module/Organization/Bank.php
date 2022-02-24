<?php
namespace App\Models\Api\Module\Organization;

use App\Models\Common\Module\Organization\Bank as Common;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-11-23
 *
 * 机构打印机模型类
 */
class Bank extends Common
{
  // 隐藏的属性
  public $hidden = [
    'id',
    'organization_id',
    'member_id',
    'status',
    'create_time',
    'update_time'
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2022-02-09
   * ------------------------------------------
   * 卡号封装
   * ------------------------------------------
   *
   * 卡号封装
   *
   * @param [type] $value [description]
   * @return [type]
   */
  public function getCardNoAttribute($value)
  {
    $length = strlen($value) - 8;

    if($length <= 0)
    {
      return $value;
    }

    $data = str_repeat('*', $length);

    return substr_replace($value, $data, 4, $length);
  }
}
