<?php
namespace App\Models\Common\Module\Inbound;

use App\Models\Base;

/**
 * @author zhangxiaofei [<1326336909@qq.com>]
 * @dateTime 2021-11-13
 *
 * 入库明细模型类
 */
class Detail extends Base
{
  // 表名
  protected $table = "module_inbound_detail";

  // 隐藏的属性
  protected $hidden = [
    'update_time'
  ];

  // 追加到模型数组表单的访问器
  protected $appends = [];

  // 批量添加
  protected $fillable = [
    'id',
    'inbound_id'
  ];


  // 关联函数 ------------------------------------------------------


  /**
   * @author zhangxiaofei [<1326336909@qq.com>]
   * @dateTime 2021-11-17
   * ------------------------------------------
   * 入库详情与入库关联表
   * ------------------------------------------
   *
   * 入库详情与入库关联表
   *
   * @return [关联对象]
   */
  public function inbound()
  {
    return $this->belongsTo(
      'App\Models\Common\Module\Inbound',
      'inbound_id',
      'id'
    );
  }
}
