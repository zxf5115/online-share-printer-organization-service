<?php
namespace App\Http\Controllers\Api\Module\Organization;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2022-02-09
 *
 * 机构银行控制器类
 */
class BankController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Api\Module\Organization\Bank';


  /**
   * @api {get} /api/organization/bank/data 01. 我的银行卡详情
   * @apiDescription 获取当前机构银行卡详情
   * @apiGroup 26. 机构银行模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiSuccess (字段说明|打印机) {String} company_name 公司名称
   * @apiSuccess (字段说明|打印机) {String} open_bank_name 开户行名称
   * @apiSuccess (字段说明|打印机) {String} branch_bank_name 支行名称
   * @apiSuccess (字段说明|打印机) {String} card_no 银行卡号
   *
   * @apiSampleRequest /api/organization/bank/data
   * @apiVersion 1.0.0
   */
  public function data(Request $request)
  {
    try
    {
      $condition = self::getCurrentWhereData();

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
   * @api {post} /api/organization/bank/handle 02. 操作银行卡
   * @apiDescription 当前机构操作银行卡
   * @apiGroup 26. 机构银行模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {String} company_name 公司名称
   * @apiParam {String} open_bank_name 开户行名称
   * @apiParam {String} branch_bank_name 支行名称
   * @apiParam {String} card_no 银行卡号
   *
   * @apiSampleRequest /api/organization/bank/handle
   * @apiVersion 1.0.0
   */
  public function handle(Request $request)
  {
    $messages = [
      'company_name.required' => '请您输入公司名称',
      'open_bank_name.required' => '请您输入开户行名称',
      'branch_bank_name.required' => '请您输入支行名称',
      'card_no.required' => '请您输入银行卡号',
      'card_no.max' => '银行卡号最多19位',
      'card_no.min' => '银行卡号最少16位',
    ];

    $rule = [
      'company_name' => 'required',
      'open_bank_name' => 'required',
      'branch_bank_name' => 'required',
      'card_no' => 'required',
      'card_no' => 'max:19|min:16',
    ];

    // 验证用户数据内容是否正确
    $validation = self::validation($request, $messages, $rule);

    if(!$validation['status'])
    {
      return $validation['message'];
    }
    else
    {
      try
      {
        $member_id = self::getCurrentId();

        $model = $this->_model::firstOrNew(['member_id' => $member_id]);

        $model->company_name = $request->company_name;
        $model->open_bank_name = $request->open_bank_name;
        $model->branch_bank_name = $request->branch_bank_name;
        $model->card_no = $request->card_no;
        $model->save();

        return self::success(Code::message(Code::HANDLE_SUCCESS));
      }
      catch(\Exception $e)
      {
        // 记录异常信息
        self::record($e);

        return self::error(Code::HANDLE_FAILURE);
      }
    }
  }


  /**
   * @api {get} /api/organization/bank/delete 03. 删除我的银行卡
   * @apiDescription 删除当前机构银行卡
   * @apiGroup 26. 机构银行模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiSuccess (字段说明) {String} id 银行卡自增编号
   *
   * @apiSampleRequest /api/organization/bank/delete
   * @apiVersion 1.0.0
   */
  public function delete(Request $request)
  {
    try
    {
      $condition = self::getCurrentWhereData();

      $where = ['id' => $request->id];

      $response = $this->_model::delete($condition);

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
