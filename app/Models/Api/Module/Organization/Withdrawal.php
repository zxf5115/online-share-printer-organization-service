<?php
namespace App\Models\Api\Module\Organization;

use App\Models\Common\System\Config;
use App\Models\Common\Module\Organization\Withdrawal as Common;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-11-23
 *
 * 机构提现模型类
 */
class Withdrawal extends Common
{
  // 隐藏的属性
  public $hidden = [
    'organization_id',
    'member_id',
    'pay_type',
    'confirm_status',
    'status',
    'update_time'
  ];


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2022-02-10
   * ------------------------------------------
   * 得到税后金额
   * ------------------------------------------
   *
   * 机构提现计算税点，得到税后金额
   *
   * @param [type] $money 税前金额
   * @return [type]
   */
  public static function getAfterTaxAmount($money)
  {
    $rate = Config::getConfigValue('withdrawal_rate');

    $rate = bcdiv($rate, 100, 2);

    $rate = bcsub(1, $rate, 2);

    return bcmul($money, $rate, 2);
  }
}
