<?php
namespace App\Http\Controllers\Api\Module\Common;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2022-02-10
 *
 * 提现配置控制器类
 */
class WithdrawalController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Api\System\Config';

  // 默认查询条件
  protected $_where = [
    'category_id' => 3
  ];


  /**
   * @api {post} /api/common/withdrawal/data 10. 提现配置
   * @apiDescription 获取提现配置信息
   * @apiGroup 02. 公共模块
   *
   * @apiSuccess (basic params) {String} withdrawal_rate 提现税率(百分比)
   * @apiSuccess (basic params) {String} minimum_amount 最低提现金额
   *
   * @apiSampleRequest /api/common/withdrawal/data
   * @apiVersion 1.0.0
   */
  public function data(Request $request)
  {
    try
    {
      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($this->_where, $filter);

      $response = $this->_model::getPluck(['value', 'title'], $condition);

      return self::success($response);
    }
    catch(\Exception $e)
    {
      // 记录异常信息
      self::record($e);

      return self::error(Code::ERROR);
    }
  }
}
