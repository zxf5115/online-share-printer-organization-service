<?php
namespace App\Enum\Module\Organization;

use App\Enum\BaseEnum;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-12-30
 *
 * 角色枚举类
 */
class RoleEnum extends BaseEnum
{
  // 支付类型
  const AGENT = 3; // 代理商
  const MANGER = 2; // 店长


  // 支付类型封装
  public static $type = [
    self::AGENT => [
      'value' => self::AGENT,
      'text' => '代理商'
    ],

    self::MANGER => [
      'value' => self::MANGER,
      'text' => '店长'
    ],
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
   * @param int $code 状态代码
   * @return 状态信息
   */
  public static function getRoleInfo($code)
  {
    return self::$type[$code] ?: self::$type[self::AGENT];
  }
}
