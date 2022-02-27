<?php
namespace App\Http\Controllers\Api\Module;

use Illuminate\Http\Request;

use App\Http\Constant\Code;
use App\Http\Controllers\Api\BaseController;


/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-12-07
 *
 * 打印机控制器类
 */
class PrinterController extends BaseController
{
  // 模型名称
  protected $_model = 'App\Models\Api\Module\Printer';

  // 客户端搜索字段
  protected $_params = [
    'manager_id',
  ];

  // 关联对像
  protected $_relevance = [
    'manager',
  ];


  /**
   * @api {get} /api/printer/list?page={page} 01. 打印机列表
   * @apiDescription 获取打印机列表(分页)
   * @apiGroup 12. 打印机模块
   * @apiPermission jwt
   * @apiHeader {String} Authorization 身份令牌
   * @apiHeaderExample {json} Header-Example:
   * {
   *   "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO"
   * }
   *
   * @apiParam {int} page 当前页数
   * @apiParam {int} member_id 机构自增编号
   * @apiParam {int} manager_id 店长自增编号
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
   * @apiSuccess (字段说明|店长) {String} nickname 店长姓名
   * @apiSuccess (字段说明|店长) {String} username 店长电话
   *
   * @apiSampleRequest /api/printer/list
   * @apiVersion 1.0.0
   */
  public function list(Request $request)
  {
    try
    {
      $field = self::getChildUserQueryField();

      $condition = self::getSimpleWhereData($request->member_id, $field);

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
   * @api {get} /api/printer/view/{id} 02. 打印机详情
   * @apiDescription 获取打印机的详情
   * @apiGroup 12. 打印机模块
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
   * @apiSuccess (字段说明|店长) {String} nickname 店长姓名
   * @apiSuccess (字段说明|店长) {String} username 店长电话
   *
   * @apiSampleRequest /api/printer/view/{id}
   * @apiVersion 1.0.0
   */
  public function view(Request $request, $id)
  {
    try
    {
      $condition = self::getSimpleWhereData($id);

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
}
