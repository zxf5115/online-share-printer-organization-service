<?php
namespace App\TraitClass;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2020-10-22
 *
 * 工具特征
 */
trait ToolTrait
{

  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2022-02-10
   * ------------------------------------------
   * 解密
   * ------------------------------------------
   *
   * 二维码内容解密
   *
   * @param [type] $string 需要解密内容
   * @param [type] $salt 加密盐值
   * @return [type]
   */
  public static function decrypt($string, $salt = 'E1D07F0BFC69E72F03B53E4AE978F938')
  {
    $key = md5($salt);

    $iv = md5($key, true);

    $response = openssl_decrypt(base64_decode($string), 'aes-256-cfb', $key, OPENSSL_RAW_DATA, $iv);

    return $response;
  }


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2022-02-10
   * ------------------------------------------
   * 加密
   * ------------------------------------------
   *
   * 二维码内容加密
   *
   * @param [type] $string 需要加密内容
   * @param string $salt 盐值
   * @return [type]
   */
  public static function encrypt($string, $salt = 'E1D07F0BFC69E72F03B53E4AE978F938')
  {
    $key = md5($salt);

    $iv = md5($key, true);

    $data = openssl_encrypt($string, 'aes-256-cfb', $key, OPENSSL_RAW_DATA, $iv);

    $response = base64_encode($data);

    return $response;
  }
}
