<?php
namespace App\Http\Controllers\Api\Module\Organization;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-11-25
 *
 * 机构收益控制器类
 */
class ObtainController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Api\Module\Organization\Obtain';

  // 客户端搜索字段
  protected $_where = [
    'confirm_status' => 1
  ];

  // 关联对象
  protected $_relevance = [
    'order',
  ];


  /**
   * @api {get} /api/organization/obtain/list 01. 我的收益列表
   * @apiDescription 获取当前会员的收益列表
   * @apiGroup 22. 机构收益模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiSuccess (字段说明) {String} type 收益类型 1分红
   * @apiSuccess (字段说明) {String} money 收益金额
   * @apiSuccess (字段说明) {String} create_time 收益时间
   *
   * @apiSampleRequest /api/organization/obtain/list
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
}
