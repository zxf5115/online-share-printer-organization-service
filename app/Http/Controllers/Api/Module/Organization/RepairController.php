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
 * 机构报修报修控制器类
 */
class RepairController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Api\Module\Repair';

  // 关联对像
  protected $_relevance = [
    'category',
    'printer'
  ];


  /**
   * @api {get} /api/organization/repair/list?page={page} 01. 我的报修列表
   * @apiDescription 获取当前机构报修列表(分页)
   * @apiGroup 31. 机构报修模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} page 当前页数
   *
   * @apiSuccess (字段说明|报修) {String} id 报修自增编号
   * @apiSuccess (字段说明|报修) {String} category_id 分类编号
   * @apiSuccess (字段说明|报修) {String} member_id 店长编号
   * @apiSuccess (字段说明|报修) {String} printer_id 打印机自增编号
   * @apiSuccess (字段说明|报修) {String} content 报修内容
   * @apiSuccess (字段说明|报修) {String} create_time 提交时间
   * @apiSuccess (字段说明|报修分类) {String} title 报修分类名称
   * @apiSuccess (字段说明|打印机) {String} model 打印机型号
   * @apiSuccess (字段说明|打印机) {String} code 打印机编号
   *
   * @apiSampleRequest /api/organization/repair/list
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
   * @api {get} /api/organization/repair/view/{id} 02. 我的报修详情
   * @apiDescription 获取当前机构课程报修的详情
   * @apiGroup 31. 机构报修模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} id 报修编号
   *
   * @apiSuccess (字段说明|报修) {String} id 报修自增编号
   * @apiSuccess (字段说明|报修) {String} category_id 分类编号
   * @apiSuccess (字段说明|报修) {String} member_id 店长编号
   * @apiSuccess (字段说明|报修) {String} printer_id 打印机自增编号
   * @apiSuccess (字段说明|报修) {String} content 报修内容
   * @apiSuccess (字段说明|报修) {String} create_time 提交时间
   * @apiSuccess (字段说明|报修分类) {String} title 报修分类名称
   * @apiSuccess (字段说明|打印机) {String} model 打印机型号
   * @apiSuccess (字段说明|打印机) {String} code 打印机编号
   *
   * @apiSampleRequest /api/organization/repair/view/{id}
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
   * @api {post} /api/organization/repair/handle 03. 提交报修
   * @apiDescription 当前机构提交报修信息
   * @apiGroup 31. 机构报修模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {String} category_id 报修分类编号
   * @apiParam {String} printer_id 打印机自增编号
   * @apiParam {String} content 报修内容
   *
   * @apiSampleRequest /api/organization/repair/handle
   * @apiVersion 1.0.0
   */
  public function handle(Request $request)
  {
    $messages = [
      'category_id.required' => '请您输入报修分类编号',
      'printer_id.required'  => '请您输入打印机自增编号',
      'content.required'     => '请您输入报修内容',
    ];

    $rule = [
      'category_id' => 'required',
      'printer_id'  => 'required',
      'content'     => 'required',
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
        $model = $this->_model::firstOrNew(['id' => $request->id]);

        $model->category_id = $request->category_id;
        $model->member_id   = self::getCurrentId();
        $model->printer_id  = $request->printer_id;
        $model->content     = $request->content;
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
