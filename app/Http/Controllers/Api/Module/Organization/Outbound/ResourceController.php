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
 * 机构出库资源控制器类
 */
class ResourceController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Api\Module\Outbound\Resource';


  /**
   * @api {get} /api/organization/outbound/resource/data 01. 我的出库回执单
   * @apiDescription 获取当前机构出库资源的数据
   * @apiGroup 38. 机构出库资源模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} outbound_id 出库自增编号
   *
   * @apiSuccess (字段说明) {String} receipt_form 回执单地址
   * @apiSuccess (字段说明) {String} create_time 提交时间
   *
   * @apiSampleRequest /api/organization/outbound/resource/data
   * @apiVersion 1.0.0
   */
  public function data(Request $request)
  {
    $messages = [
      'outbound_id.required' => '请您输入出库自增编号',
    ];

    $rule = [
      'outbound_id' => 'required',
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
        $condition = self::getSimpleWhereData();

        $where = ['outbound_id' => $request->outbound_id];

        $condition = array_merge($condition, $where);

        // 获取关联对象
        $relevance = self::getRelevanceData($this->_relevance, 'data');

        $response = $this->_model::getRow($condition, $relevance);

        return self::success($response);
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
   * @api {post} /api/organization/outbound/resource/handle 03. 上传回执单[略]
   * @apiDescription 当前机构上传快递回执单
   * @apiGroup 37. 机构出库资源模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {String} outbound_id 出库自增编号
   * @apiParam {String} receipt_form 回执单地址
   *
   * @apiSampleRequest /api/organization/outbound/resource/handle
   * @apiVersion 1.0.0
   */
  public function handle(Request $request)
  {
    $messages = [
      'outbound_id.required'  => '请您输入出库自增编号',
      'receipt_form.required' => '请您上传回执单地址',
    ];

    $rule = [
      'outbound_id'  => 'required',
      'receipt_form' => 'required',
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
        $model = $this->_model::getRow(['outbound_id' => $request->outbound_id]);

        $model->receipt_form = $request->receipt_form;
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
