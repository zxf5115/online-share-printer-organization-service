<?php
namespace App\Http\Controllers\Api\Module\Organization;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1356335909@qq.com>]
 * @dateTime 2021-11-26
 *
 * 机构出库控制器类
 */
class OutboundController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Api\Module\Outbound';


  /**
   * @api {get} /api/organization/outbound/list 01. 我的出库列表
   * @apiDescription 获取当前机构的出库列表
   * @apiGroup 35. 机构出库模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiSuccess (字段说明) {String} id 出库自增编号
   * @apiSuccess (字段说明) {String} type 设备类型[1打印机 2墨盒 3纸张]
   * @apiSuccess (字段说明) {String} category 出库类型[1新设备出库 2 返修出库]
   * @apiSuccess (字段说明) {String} member_id 机构编号
   * @apiSuccess (字段说明) {String} total 出库数量
   * @apiSuccess (字段说明) {String} operator 操作人
   * @apiSuccess (字段说明) {String} create_time 出库时间
   *
   * @apiSampleRequest /api/organization/outbound/list
   * @apiVersion 1.0.0
   */
  public function list(Request $request)
  {
    try
    {
      $condition = self::getCurrentWhereData();

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter);

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'list');

      $response = $this->_model::getPaging($condition, $relevance, $this->_order);

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
   * @api {get} /api/organization/outbound/view/{id} 02. 我的出库详情
   * @apiDescription 获取当前机构出库的详情
   * @apiGroup 35. 机构出库模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} id 出库自增编号
   *
   * @apiSuccess (字段说明) {String} id 出库自增编号
   * @apiSuccess (字段说明) {String} type 设备类型[1打印机 2墨盒 3纸张]
   * @apiSuccess (字段说明) {String} category 出库类型[1新设备出库 2 返修出库]
   * @apiSuccess (字段说明) {String} member_id 机构编号
   * @apiSuccess (字段说明) {String} total 出库数量
   * @apiSuccess (字段说明) {String} operator 操作人
   * @apiSuccess (字段说明) {String} create_time 出库时间
   *
   * @apiSampleRequest /api/organization/outbound/view/{id}
   * @apiVersion 1.0.0
   */
  public function view(Request $request, $id)
  {
    try
    {
      $condition = self::getCurrentWhereData();

      $where = ['id' => $id];

      $condition = array_merge($condition, $where);

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'view');

      $response = $this->_model::getRow($condition, $relevance);

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
