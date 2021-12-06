<?php
namespace App\Http\Controllers\Api\Module\Common;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-12-06
 *
 * 联系客服控制器类
 */
class ServiceController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Api\System\Config';

  // 默认查询条件
  protected $_where = [
    'category_id' => 2
  ];


  /**
   * @api {post} /api/common/service/data 08. 联系我们
   * @apiDescription 获取联系我们信息
   * @apiGroup 02. 公共模块
   *
   * @apiSuccess (basic params) {String} company_name 公司名称
   * @apiSuccess (basic params) {String} comapny_mobile 公司电话
   * @apiSuccess (basic params) {String} company_email 公司邮箱
   * @apiSuccess (basic params) {String} service_mobile 客服电话
   *
   * @apiSampleRequest /api/common/service/data
   * @apiVersion 1.0.0
   */
  public function data(Request $request)
  {
    try
    {
      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($this->_where, $filter);

      $response = $this->_model::getPluck(['value', 'title'], $condition);

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
