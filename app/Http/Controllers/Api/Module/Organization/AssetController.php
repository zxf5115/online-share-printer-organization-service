<?php
namespace App\Http\Controllers\Api\Module\Organization;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-06-25
 *
 * 机构资产控制器类
 */
class AssetController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Api\Module\Organization\Asset';


  /**
   * @api {get} /api/organization/asset/data 01. 我的资产
   * @apiDescription 获取当前机构的资产
   * @apiGroup 21. 机构资产模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiSuccess (字段说明|资产) {String} money 账户金额
   * @apiSuccess (字段说明|资产) {String} yesterday_money 昨天收益金额
   * @apiSuccess (字段说明|资产) {String} current_month_money 本月收益金额
   * @apiSuccess (字段说明|资产) {String} proportion 分成比例金额
   * @apiSuccess (字段说明|资产) {String} withdrawal_money 已提现金额
   * @apiSuccess (字段说明|资产) {String} should_printer_total 认购打印机数量
   * @apiSuccess (字段说明|资产) {String} already_printer_total 已确认打印机数量
   * @apiSuccess (字段说明|资产) {String} order_total 订单总量
   *
   * @apiSampleRequest /api/organization/asset/data
   * @apiVersion 1.0.0
   */
  public function data(Request $request)
  {
    try
    {
      $condition = self::getCurrentWhereData();

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter);

      $response = $this->_model::getRow($condition);

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
