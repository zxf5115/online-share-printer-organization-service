<?php
namespace App\Http\Controllers\Api\Module\Organization;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\Models\Api\Module\Printer;
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


  /**
   * @api {get} /api/organization/asset/equipment 02. 设备中心
   * @apiDescription 获取当前机构设备中心数据
   * @apiGroup 21. 机构资产模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} page 当前页数
   *
   * @apiSuccess (字段说明|打印机) {String} printer_total 打印机总量
   * @apiSuccess (字段说明|打印机) {String} already_printer_total 已分配总量
   * @apiSuccess (字段说明|打印机) {String} without_printer_total 未分配总量
   *
   * @apiSampleRequest /api/organization/asset/equipment
   * @apiVersion 1.0.0
   */
  public function equipment(Request $request)
  {
    try
    {
      $condition = self::getCurrentWhereData();

      $asset = $this->_model::getRow($condition);

      $printer_total = $asset->should_printer_total ?: 0;

      $field = self::getCurrentUserQueryField();

      $condition = self::getCurrentWhereData($field);

      $already_printer_total = Printer::getCount($condition);

      $response['printer_total']         = $printer_total;
      $response['already_printer_total'] = $already_printer_total;
      $response['without_printer_total'] = bcsub($printer_total, $already_printer_total);

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
