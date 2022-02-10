<?php
namespace App\Listeners\Api\Member;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use App\Events\Api\Member\WithdrawalEvent;
use App\Models\Api\Module\Organization\Asset;

/**
 * 提现金额流向额监听器
 */
class WithdrawalListeners
{
  /**
   * Create the event listener.
   *
   * @return void
   */
  public function __construct()
  {
      //
  }

  /**
   * Handle the event.
   *
   * @param  WithdrawalEvent  $event
   * @return void
   */
  public function handle(WithdrawalEvent $event)
  {
    try
    {
      $member_id = $event->member_id;
      $money     = $event->money;
      $type      = $event->type;

      $model = Asset::getRow(['member_id' => $member_id]);

      // type 1:提现 2:回滚
      if(1 == $type)
      {
        $model->decrement('money', $money);
        $model->increment('withdrawal_money', $money);
      }
      else
      {
        $model->decrement('withdrawal_money', $money);
        $model->increment('money', $money);
      }

      return true;
    }
    catch(\Exception $e)
    {
      record($e);

      return false;
    }
  }
}
