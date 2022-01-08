<?php
namespace App\Http\Controllers\Api\Module\Organization;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\TraitClass\ToolTrait;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-11-25
 *
 * 机构收益控制器类
 */
class ObtainController extends BaseController
{
  use ToolTrait;

  // 模型名称
  protected $_model = 'App\Models\Api\Module\Organization\Obtain';

  // 客户端搜索字段
  protected $_where = [
    'confirm_status' => 1
  ];

  // 客户端搜索字段
  protected $_params = [
    'create_time',
  ];

  // 关联对象
  protected $_relevance = [
    'list' => [],
    'data' => [
      'organization'
    ]
  ];


  /**
   * @api {get} /api/organization/obtain/center 01. 我的收益中心
   * @apiDescription 获取当前会员的收益列表
   * @apiGroup 22. 机构收益模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiSuccess (字段说明) {String} total 收益笔数
   * @apiSuccess (字段说明) {String} money 收益金额
   *
   * @apiSampleRequest /api/organization/obtain/center
   * @apiVersion 1.0.0
   */
  public function center(Request $request)
  {
    try
    {
      $condition = self::getCurrentWhereData();

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter);

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'list');

      $result = $this->_model::getPluck('money', $condition, false, false, true);

      $response['total'] = count($result);

      $money = 0.00;

      foreach($result as $item)
      {
        $money = bcadd($money, $item, 2);
      }

      $response['money'] = $money;

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
   * @api {get} /api/organization/obtain/list 02. 我的收益列表
   * @apiDescription 获取当前会员的收益列表
   * @apiGroup 22. 机构收益模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} create_time 提现时间
   *
   * @apiParamExample {json} Param-Example:
   * {
   *   "create_time": [
   *     "2021-05-05 17:01:01",
   *     "2021-07-07 17:01:10"
   *   ]
   * }
   *
   * @apiSuccess (字段说明) {String} type 收益自增编号
   * @apiSuccess (字段说明) {String} order_id 收益订单自增编号
   * @apiSuccess (字段说明) {String} type 收益类型 1分红
   * @apiSuccess (字段说明) {String} money 收益金额
   * @apiSuccess (字段说明) {String} create_time 收益时间
   *
   * @apiSuccessExample {json} Success:
   * [
   *   {
   *     time: '时间',
   *     money: '收益',
   *     data: [
   *       {id:4,...},
   *       {id:5,...},
   *     ]
   *   },{
   *     time: '时间',
   *     money: '收益',
   *     data: [
   *       {id:4,...},
   *       {id:5,...},
   *     ]
   *   },
   * ]
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
      $relevance = self::getRelevanceData($this->_relevance, 'data');

      $response = $this->_model::getPaging($condition, $relevance, $this->_order, true);

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
   * @api {get} /api/organization/obtain/data 03. 某个收益列表
   * @apiDescription 获取某个会员的收益列表
   * @apiGroup 22. 机构收益模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} member_id 代理商自增编号
   * @apiParam {int} create_time 提现时间
   *
   * @apiParamExample {json} Param-Example:
   * {
   *   "member_id": 1,
   *   "create_time": [
   *     "2021-05-05 17:01:01",
   *     "2021-07-07 17:01:10"
   *   ]
   * }
   *
   * @apiSuccess (字段说明) {String} type 收益自增编号
   * @apiSuccess (字段说明) {String} order_id 收益订单自增编号
   * @apiSuccess (字段说明) {String} type 收益类型 1分红
   * @apiSuccess (字段说明) {String} money 收益金额
   * @apiSuccess (字段说明) {String} create_time 收益时间
   *
   * @apiSuccessExample {json} Success:
   * [
   *   {
   *     time: '时间',
   *     money: '收益',
   *     data: [
   *       {id:4,...},
   *       {id:5,...},
   *     ]
   *   },{
   *     time: '时间',
   *     money: '收益',
   *     data: [
   *       {id:4,...},
   *       {id:5,...},
   *     ]
   *   },
   * ]
   *
   * @apiSampleRequest /api/organization/obtain/data
   * @apiVersion 1.0.0
   */
  public function data(Request $request)
  {
    try
    {
      $condition = self::getSimpleWhereData($request->member_id, 'member_id');

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter);

      // 获取关联对象
      $relevance = self::getRelevanceData($this->_relevance, 'data');

      $response = $this->_model::getPaging($condition, $relevance, $this->_order, true);

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
