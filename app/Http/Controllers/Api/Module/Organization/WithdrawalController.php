<?php
namespace App\Http\Controllers\Api\Module\Organization;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-12-08
 *
 * 机构提现控制器类
 */
class WithdrawalController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Api\Module\Organization\Withdrawal';

  // 客户端搜索字段
  protected $_params = [
    'create_time',
  ];

  // 关联对像
  protected $_relevance = [];


  /**
   * @api {get} /api/organization/withdrawal/list?page={page} 01. 我的提现列表
   * @apiDescription 获取当前机构提现列表(分页)
   * @apiGroup 24. 机构提现模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} page 当前页数
   * @apiParam {array} create_time 提现时间
   *
   * @apiParamExample {json} Param-Example:
   * {
   *   "create_time": [
   *     "2021-05-05 17:01:01",
   *     "2021-07-07 17:01:10"
   *   ]
   * }
   *
   * @apiSuccess (字段说明) {String} money 提现金额
   * @apiSuccess (字段说明) {String} create_time 提现时间
   *
   * @apiSampleRequest /api/organization/withdrawal/list
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
   * @api {get} /api/organization/withdrawal/view/{id} 02. 我的提现详情
   * @apiDescription 获取当前机构提现的详情
   * @apiGroup 24. 机构提现模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} id 提现编号
   *
   * @apiSuccess (字段说明) {String} money 提现金额
   * @apiSuccess (字段说明) {String} create_time 提现时间
   *
   * @apiSampleRequest /api/organization/withdrawal/view/{id}
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



  /**
   * @api {post} /api/organization/withdrawal/handle 03. 提现[TODO]
   * @apiDescription 当前机构标记某个提现完成
   * @apiGroup 24. 机构提现模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {string} money 提现金额
   *
   * @apiSampleRequest /api/organization/withdrawal/handle
   * @apiVersion 1.0.0
   */
  public function handle(Request $request)
  {
    $messages = [
      'money.required' => '请您输入提现编号',
    ];

    $rule = [
      'money' => 'required',
    ];

    // 验证用户数据内容是否正确
    $validation = self::validation($request, $messages, $rule);

    if(!$validation['status'])
    {
      return $validation['message'];
    }
    else
    {
      DB::beginTransaction();

      try
      {
        $field = self::getCurrentUserQueryField();

        $condition = self::getCurrentWhereData($field);

        $where = ['id' => $request->order_id];

        $condition = array_merge($condition, $where);

        $model = $this->_model::getRow($condition);

        $model->order_status = 2;
        $model->save();

        DB::commit();

        return self::success(Code::message(Code::HANDLE_SUCCESS));
      }
      catch(\Exception $e)
      {
        DB::rollback();

        // 记录异常信息
        self::record($e);

        return self::error(Code::HANDLE_FAILURE);
      }
    }
  }
}