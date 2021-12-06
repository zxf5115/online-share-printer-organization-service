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
 * 机构打印机控制器类
 */
class PrinterController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Api\Module\Printer';

  // 关联对像
  protected $_relevance = [
    'first',
    'second',
    'manager',
  ];


  /**
   * @api {get} /api/organization/printer/list?page={page} 01. 我的打印机列表
   * @apiDescription 获取当前机构打印机列表(分页)
   * @apiGroup 30. 机构打印机模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} page 当前页数
   *
   * @apiSuccess (字段说明|打印机) {String} id 打印机自增编号
   * @apiSuccess (字段说明|打印机) {String} first_level_agent_id 一级代理商编号
   * @apiSuccess (字段说明|打印机) {String} second_level_agent_id 二级代理商编号
   * @apiSuccess (字段说明|打印机) {String} manager_id 店长编号
   * @apiSuccess (字段说明|打印机) {String} title 打印机名称
   * @apiSuccess (字段说明|打印机) {String} model 打印机型号
   * @apiSuccess (字段说明|打印机) {String} code 打印机编号
   * @apiSuccess (字段说明|打印机) {String} province_id 所在省份
   * @apiSuccess (字段说明|打印机) {String} city_id 所在城市
   * @apiSuccess (字段说明|打印机) {String} region_id 所在区县
   * @apiSuccess (字段说明|打印机) {String} address 详细地址
   * @apiSuccess (字段说明|打印机) {String} remark 备注
   * @apiSuccess (字段说明|打印机) {String} ink_quantity 剩余墨量
   * @apiSuccess (字段说明|打印机) {String} paper_quantity 纸张消耗量
   * @apiSuccess (字段说明|打印机) {String} failure_number 故障次数
   * @apiSuccess (字段说明|打印机) {String} bind_status 绑定状态 1 已绑定 2 未绑定
   * @apiSuccess (字段说明|打印机) {String} bind_time 绑定时间
   * @apiSuccess (字段说明|打印机) {String} activate_time 激活时间
   * @apiSuccess (字段说明|打印机) {String} artivate_status 激活状态 1正常 2离线 3损坏
   * @apiSuccess (字段说明|打印机) {String} create_time 创建时间
   * @apiSuccess (字段说明|一级代理商) {String} nickname 一级代理商姓名
   * @apiSuccess (字段说明|二级代理商) {String} nickname 二级代理商姓名
   * @apiSuccess (字段说明|店长) {String} nickname 店长姓名
   * @apiSuccess (字段说明|店长) {String} username 店长电话
   *
   * @apiSampleRequest /api/organization/printer/list
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
   * @api {get} /api/organization/printer/view/{id} 02. 我的打印机详情
   * @apiDescription 获取当前机构打印机的详情
   * @apiGroup 30. 机构打印机模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} id 打印机编号
   *
   * @apiSuccess (字段说明|打印机) {String} id 打印机自增编号
   * @apiSuccess (字段说明|打印机) {String} first_level_agent_id 一级代理商编号
   * @apiSuccess (字段说明|打印机) {String} second_level_agent_id 二级代理商编号
   * @apiSuccess (字段说明|打印机) {String} manager_id 店长编号
   * @apiSuccess (字段说明|打印机) {String} title 打印机名称
   * @apiSuccess (字段说明|打印机) {String} model 打印机型号
   * @apiSuccess (字段说明|打印机) {String} code 打印机编号
   * @apiSuccess (字段说明|打印机) {String} province_id 所在省份
   * @apiSuccess (字段说明|打印机) {String} city_id 所在城市
   * @apiSuccess (字段说明|打印机) {String} region_id 所在区县
   * @apiSuccess (字段说明|打印机) {String} address 详细地址
   * @apiSuccess (字段说明|打印机) {String} remark 备注
   * @apiSuccess (字段说明|打印机) {String} ink_quantity 剩余墨量
   * @apiSuccess (字段说明|打印机) {String} paper_quantity 纸张消耗量
   * @apiSuccess (字段说明|打印机) {String} failure_number 故障次数
   * @apiSuccess (字段说明|打印机) {String} bind_status 绑定状态 1 已绑定 2 未绑定
   * @apiSuccess (字段说明|打印机) {String} bind_time 绑定时间
   * @apiSuccess (字段说明|打印机) {String} activate_time 激活时间
   * @apiSuccess (字段说明|打印机) {String} artivate_status 激活状态 1正常 2离线 3损坏
   * @apiSuccess (字段说明|打印机) {String} create_time 创建时间
   * @apiSuccess (字段说明|一级代理商) {String} nickname 一级代理商姓名
   * @apiSuccess (字段说明|二级代理商) {String} nickname 二级代理商姓名
   * @apiSuccess (字段说明|店长) {String} nickname 店长姓名
   * @apiSuccess (字段说明|店长) {String} username 店长电话
   *
   * @apiSampleRequest /api/organization/printer/view/{id}
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
   * @api {post} /api/organization/printer/status 03. 打印机状态
   * @apiDescription 当前机构更改打印机状态[如果在线变更为离线，否在反之]
   * @apiGroup 30. 机构打印机模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {String} printer_id 打印机编号
   * @apiParam {String} status 激活状态 1正常 2离线 3损坏
   *
   * @apiSampleRequest /api/organization/printer/status
   * @apiVersion 1.0.0
   */
  public function status(Request $request)
  {
    $messages = [
      'printer_id.required' => '请您输入打印机编号',
    ];

    $rule = [
      'printer_id' => 'required',
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

        $where = ['id' => $request->printer_id];

        $condition = array_merge($condition, $where);

        $model = $this->_model::getRow($condition);

        $model->activate_status = $request->status ?? 1;
        $model->activate_time   = time();
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
   * @api {post} /api/organization/printer/first_step 04. 添加步骤一[TODO]
   * @apiDescription 当前机构添加打印机, 第一步
   * @apiGroup 30. 机构打印机模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {String} printer_id 打印机编号
   * @apiParam {String} status 激活状态 1正常 2离线 3损坏
   *
   * @apiSampleRequest /api/organization/printer/first_step
   * @apiVersion 1.0.0
   */
  public function first_step(Request $request)
  {
    $messages = [
      'printer_id.required' => '请您输入打印机编号',
    ];

    $rule = [
      'printer_id' => 'required',
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

        $where = ['id' => $request->printer_id];

        $condition = array_merge($condition, $where);

        $model = $this->_model::getRow($condition);

        $model->activate_status = $request->status ?? 1;
        $model->activate_time   = time();
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
   * @api {post} /api/organization/printer/second_step 05. 添加步骤二[TODO]
   * @apiDescription 当前机构添加打印机, 第二步
   * @apiGroup 30. 机构打印机模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {String} printer_id 打印机编号
   * @apiParam {String} status 激活状态 1正常 2离线 3损坏
   *
   * @apiSampleRequest /api/organization/printer/second_step
   * @apiVersion 1.0.0
   */
  public function second_step(Request $request)
  {
    $messages = [
      'printer_id.required' => '请您输入打印机编号',
    ];

    $rule = [
      'printer_id' => 'required',
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

        $where = ['id' => $request->printer_id];

        $condition = array_merge($condition, $where);

        $model = $this->_model::getRow($condition);

        $model->activate_status = $request->status ?? 1;
        $model->activate_time   = time();
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
   * @api {post} /api/organization/printer/third_step 06. 添加步骤三[TODO]
   * @apiDescription 当前机构添加打印机, 第三步
   * @apiGroup 30. 机构打印机模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {String} printer_id 打印机编号
   * @apiParam {String} status 激活状态 1正常 2离线 3损坏
   *
   * @apiSampleRequest /api/organization/printer/third_step
   * @apiVersion 1.0.0
   */
  public function third_step(Request $request)
  {
    $messages = [
      'printer_id.required' => '请您输入打印机编号',
    ];

    $rule = [
      'printer_id' => 'required',
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

        $where = ['id' => $request->printer_id];

        $condition = array_merge($condition, $where);

        $model = $this->_model::getRow($condition);

        $model->activate_status = $request->status ?? 1;
        $model->activate_time   = time();
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
