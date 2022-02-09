<?php
namespace App\Http\Controllers\Api\Module\Common;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-06-08
 *
 * 银行控制器类
 */
class BankController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Common\Module\Common\Bank';


  // 排序方式
  protected $_order = [
    ['key' => 'sort', 'value' => 'desc'],
  ];


  /**
   * @api {get} /api/common/bank/list 09. 银行列表
   * @apiDescription 获取全国地区列表
   * @apiGroup 02. 公共模块
   *
   * @apiSampleRequest /api/common/bank/list
   * @apiVersion 1.0.0
   */
  public function list(Request $request)
  {
    try
    {
      $condition = self::getSimpleWhereData();

      // 对用户请求进行过滤
      $filter = $this->filter($request->all());

      $condition = array_merge($condition, $this->_where, $filter);

      $response = $this->_model::getList($condition, $this->_relevance, $this->_order);

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
