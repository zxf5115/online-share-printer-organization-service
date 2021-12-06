<?php
namespace App\Http\Controllers\Api\Module\Organization\Outbound;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1366336909@qq.com>]
 * @dateTime 2021-11-26
 *
 * 机构出库详情控制器类
 */
class DetailController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Api\Module\Outbound\Detail';

  // 客户端搜索字段
  protected $_params = [
    'outbound_id',
  ];


  /**
   * @api {get} /api/organization/outbound/detail/list 01. 我的出库明细列表
   * @apiDescription 获取当前机构的出库明细列表
   * @apiGroup 36. 机构出库明细模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} outbound_id 出库自增编号
   *
   * @apiSuccess (字段说明) {String} id 出库明细自增编号
   * @apiSuccess (字段说明) {String} model 设备型号
   * @apiSuccess (字段说明) {String} code 设备编号
   *
   * @apiSampleRequest /api/organization/outbound/detail/list
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
   * @api {get} /api/organization/outbound/detail/view/{id} 02. 我的出库明细详情
   * @apiDescription 获取当前机构出库明细的详情
   * @apiGroup 36. 机构出库明细模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} id 出库明细自增编号
   *
   * @apiSuccess (字段说明) {String} id 出库明细自增编号
   * @apiSuccess (字段说明) {String} model 设备型号
   * @apiSuccess (字段说明) {String} code 设备编号
   *
   * @apiSampleRequest /api/organization/outbound/detail/view/{id}
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