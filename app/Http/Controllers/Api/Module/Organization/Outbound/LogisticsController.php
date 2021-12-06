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
 * 机构出库物流控制器类
 */
class LogisticsController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Api\Module\Outbound\Logistics';


  /**
   * @api {get} /api/organization/outbound/logistics/data 01. 我的出库物流
   * @apiDescription 获取当前机构出库物流的数据
   * @apiGroup 39. 机构出库物流模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} outbound_id 出库自增编号
   *
   * @apiSuccess (字段说明) {String} company_id 物流公司
   * @apiSuccess (字段说明) {String} logistics_no 物流单号
   *
   * @apiSampleRequest /api/organization/outbound/logistics/data
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
}
