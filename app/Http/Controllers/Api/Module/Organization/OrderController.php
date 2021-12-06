<?php
namespace App\Http\Controllers\Api\Module\Organization;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-11-23
 *
 * 机构订单控制器类
 */
class OrderController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Api\Module\Order';

  // 关联对像
  protected $_relevance = [
    'manager',
    'printer',
  ];


  /**
   * @api {get} /api/organization/order/list?page={page} 01. 我的订单列表
   * @apiDescription 获取当前机构订单列表(分页)
   * @apiGroup 23. 机构订单模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} page 当前页数
   *
   * @apiSuccess (字段说明|订单) {String} id 订单编号
   * @apiSuccess (字段说明|订单) {String} order_no 订单号
   * @apiSuccess (字段说明|订单) {String} member_id 机构编号
   * @apiSuccess (字段说明|订单) {String} pay_money 支付金额
   * @apiSuccess (字段说明|订单) {String} pay_type 支付类型
   * @apiSuccess (字段说明|订单) {String} pay_status 支付状态
   * @apiSuccess (字段说明|订单) {String} pay_time 支付时间
   * @apiSuccess (字段说明|订单) {String} order_status 订单状态
   * @apiSuccess (字段说明|订单) {String} create_time 创建时间
   * @apiSuccess (字段说明|) {Number} id 编号
   * @apiSuccess (字段说明|) {String} code 代码
   * @apiSuccess (字段说明|) {String} title 名称
   * @apiSuccess (字段说明|) {String} picture 图片
   * @apiSuccess (字段说明|) {String} content 内容
   * @apiSuccess (字段说明|) {String} money 价格
   * @apiSuccess (字段说明|) {String} point_total 集数
   * @apiSuccess (字段说明|) {String} watch_total 观看总数
   * @apiSuccess (字段说明|) {String} is_shelf 是否上架
   * @apiSuccess (字段说明|) {String} is_trial 是否试看
   * @apiSuccess (字段说明|) {String} is_recommend 是否推荐
   *
   * @apiSampleRequest /api/organization/order/list
   * @apiVersion 1.0.0
   */
  public function list(Request $request)
  {
    try
    {
      $field = self::getCurrentUserQueryField();

      $condition = self::getCurrentWhereData($field);

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
   * @api {get} /api/organization/order/view/{id} 02. 我的订单详情
   * @apiDescription 获取当前机构订单的详情
   * @apiGroup 23. 机构订单模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} id 订单编号
   *
   * @apiSuccess (字段说明|订单) {String} id 订单编号
   * @apiSuccess (字段说明|订单) {String} order_no 订单号
   * @apiSuccess (字段说明|订单) {String} member_id 机构编号
   * @apiSuccess (字段说明|订单) {String} pay_money 支付金额
   * @apiSuccess (字段说明|订单) {String} pay_type 支付类型
   * @apiSuccess (字段说明|订单) {String} pay_status 支付状态
   * @apiSuccess (字段说明|订单) {String} pay_time 支付时间
   * @apiSuccess (字段说明|订单) {String} order_status 订单状态
   * @apiSuccess (字段说明|订单) {String} create_time 创建时间
   * @apiSuccess (字段说明|) {Number} id 编号
   * @apiSuccess (字段说明|) {String} code 代码
   * @apiSuccess (字段说明|) {String} title 名称
   * @apiSuccess (字段说明|) {String} picture 图片
   * @apiSuccess (字段说明|) {String} content 内容
   * @apiSuccess (字段说明|) {String} money 价格
   * @apiSuccess (字段说明|) {String} point_total 集数
   * @apiSuccess (字段说明|) {String} watch_total 观看总数
   * @apiSuccess (字段说明|) {String} is_shelf 是否上架
   * @apiSuccess (字段说明|) {String} is_trial 是否试看
   * @apiSuccess (字段说明|) {String} is_recommend 是否推荐
   *
   * @apiSampleRequest /api/organization/order/view/{id}
   * @apiVersion 1.0.0
   */
  public function view(Request $request, $id)
  {
    try
    {
      $field = self::getCurrentUserQueryField();

      $condition = self::getCurrentWhereData($field);

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
   * @api {post} /api/organization/order/finish 03. 订单完成
   * @apiDescription 当前机构标记某个订单完成
   * @apiGroup 23. 机构订单模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {string} order_id 订单编号
   *
   * @apiSampleRequest /api/organization/order/finish
   * @apiVersion 1.0.0
   */
  public function finish(Request $request)
  {
    $messages = [
      'order_id.required' => '请您输入订单编号',
    ];

    $rule = [
      'order_id' => 'required',
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


  /**
   * @api {post} /api/organization/order/cancel 04. 订单取消
   * @apiDescription 当前机构取消某个订单
   * @apiGroup 23. 机构订单模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {string} order_id 订单编号
   *
   * @apiSampleRequest /api/organization/order/cancel
   * @apiVersion 1.0.0
   */
  public function cancel(Request $request)
  {
    $messages = [
      'order_id.required' => '请您输入订单编号',
    ];

    $rule = [
      'order_id' => 'required',
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

        if(empty($model->id))
        {
          return self::error(Code::CURRENT_ORDER_EMPTY);
        }

        if(0 != $model->order_status['value'])
        {
          return self::error(Code::CURRENT_ORDER_NO_CANCEL);
        }

        $model->order_status = 3;
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


  /**
   * @api {post} /api/organization/order/refund 05. 订单退款[TODO]
   * @apiDescription 当前机构取消某个订单
   * @apiGroup 23. 机构订单模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {string} order_id 订单编号
   * @apiParam {string} total 纸张张数
   * @apiParam {string} money 退款金额
   *
   * @apiSampleRequest /api/organization/order/refund
   * @apiVersion 1.0.0
   */
  public function refund(Request $request)
  {
    $messages = [
      'order_id.required' => '请您输入订单编号',
      'total.required'    => '请您输入纸张张数',
      'money.required'    => '请您输入退款金额',
    ];

    $rule = [
      'order_id' => 'required',
      'total'    => 'required',
      'money'    => 'required',
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

        if(empty($model->id))
        {
          return self::error(Code::CURRENT_ORDER_EMPTY);
        }

        if(0 != $model->order_status['value'])
        {
          return self::error(Code::CURRENT_ORDER_NO_CANCEL);
        }

        $model->order_status = 3;
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
