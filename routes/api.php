<?php

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', [
  'namespace'  =>  'Api',
  'middleware'  =>  'serializer:array'
], function ($api)
{
  $api->group([
    'middleware'  =>  'api.throttle', // 启用节流限制
    'limit'  =>  1000, // 允许次数
    'expires'  =>  1, // 分钟
  ], function ($api)
  {
    $api->group(['namespace' => 'System'], function ($api) {
      $api->post('weixin_login', 'LoginController@weixin_login'); // 微信登录
      $api->post('register', 'LoginController@register');
      $api->post('bind_mobile', 'LoginController@bind_mobile');
      $api->get('logout', 'LoginController@logout'); // 退出

      // 系统基础数据路由
      $api->group(['prefix' => 'system'], function ($api) {
        $api->get('kernel', 'SystemController@kernel'); // 系统信息路由
      });

      // 上传路由
      $api->group(['prefix' => 'file', 'middleware' => ['auth:api', 'refresh.token.api', 'failure']], function ($api) {
        // 上传文件
        $api->post('file', 'FileController@file');
        // 上传图片
        $api->post('picture', 'FileController@picture');
      });
    });



    $api->group(['namespace' => 'Module'], function ($api) {

      // 公共路由
      $api->group(['namespace' => 'Common', 'prefix' => 'common'], function ($api) {

        // 省市县路由
        $api->group(['prefix' => 'area'], function ($api) {
          $api->get('list', 'AreaController@list');
        });

        // 联系方式路由
        $api->group(['prefix' => 'service'], function ($api) {
          $api->get('data', 'ServiceController@data');
        });

        // 系统协议路由
        $api->group(['prefix' => 'agreement'], function ($api) {
          $api->get('about', 'AgreementController@about');
          $api->get('user', 'AgreementController@user');
          $api->get('employ', 'AgreementController@employ');
          $api->get('privacy', 'AgreementController@privacy');
          $api->get('specification', 'AgreementController@specification');
          $api->get('liability', 'AgreementController@liability');
        });

        // 支付回调路由
        $api->group(['prefix' => 'notify'], function ($api) {
          $api->any('wechat', 'NotifyController@wechat');
        });

        // 支付类型路由
        $api->group(['prefix' => 'pay'], function ($api) {
          $api->post('data', 'PayController@data');
        });
      });



      // 广告路由
      $api->group(['prefix' => 'advertising'], function ($api) {
        $api->get('select', 'AdvertisingController@select');

        $api->group(['namespace' => 'Advertising', 'prefix' => 'position'], function ($api) {
          $api->get('list', 'PositionController@list');
          $api->get('select', 'PositionController@select');
          $api->get('view/{id}', 'PositionController@view');
        });
      });


      // 常见问题路由
      $api->group(['prefix'  => 'problem'], function ($api) {
        $api->get('list', 'ProblemController@list');
        $api->get('select', 'ProblemController@select');
        $api->get('view/{id}', 'ProblemController@view');

        // 常见问题分类路由
        $api->group(['namespace' => 'Problem', 'prefix'  => 'category'], function ($api) {
          $api->get('select', 'CategoryController@select');
        });
      });


      // 报修路由
      $api->group(['prefix'  => 'repair'], function ($api) {
        // 报修分类路由
        $api->group(['namespace' => 'Repair', 'prefix'  => 'category'], function ($api) {
          $api->get('select', 'CategoryController@select');
        });
      });


      // 打印价格路由
      $api->group(['prefix'  => 'price'], function ($api) {
        $api->get('select', 'PriceController@select');
        $api->get('view/{id}', 'PriceController@view');
      });


      // 打印机路由
      $api->group(['prefix'  => 'printer'], function ($api) {
        $api->get('list', 'PrinterController@list');
        $api->get('view/{id}', 'PrinterController@view');
      });


      // 机构路由
      $api->group(['prefix'  => 'organization', 'middleware' => ['auth:api', 'refresh.token.api', 'failure']], function ($api) {
        $api->get('archive', 'OrganizationController@archive');
        $api->get('status', 'OrganizationController@status');
        $api->post('handle', 'OrganizationController@handle');
        $api->post('change_code', 'OrganizationController@change_code');
        $api->post('change_mobile', 'OrganizationController@change_mobile');
        $api->get('data', 'OrganizationController@data');
        $api->get('subordinate', 'OrganizationController@subordinate');


        // 机构关联内容路由
        $api->group(['namespace' => 'Organization'], function ($api) {

          // 机构资产路由
          $api->group(['prefix'  => 'asset'], function ($api) {
            $api->get('data', 'AssetController@data');
            $api->get('equipment', 'AssetController@equipment');
          });

          // 机构收益模块路由
          $api->group(['prefix'  => 'obtain'], function ($api) {
            $api->get('list', 'ObtainController@list');
          });

          // 机构订单路由
          $api->group(['prefix'  => 'order'], function ($api) {
            $api->get('list', 'OrderController@list');
            $api->get('view/{id}', 'OrderController@view');
            $api->post('finish', 'OrderController@finish');
            $api->post('cancel', 'OrderController@cancel');
            $api->post('refund', 'OrderController@refund');
          });

          // 机构打印机路由
          $api->group(['prefix'  => 'printer'], function ($api) {
            $api->get('list', 'PrinterController@list');
            $api->get('view/{id}', 'PrinterController@view');
            $api->post('status', 'PrinterController@status');
            $api->post('first_step', 'PrinterController@first_step');
            $api->post('second_step', 'PrinterController@second_step');
            $api->post('third_step', 'PrinterController@third_step');
          });

          // 机构维修路由
          $api->group(['prefix'  => 'repair'], function ($api) {
            $api->get('list', 'RepairController@list');
            $api->get('view/{id}', 'RepairController@view');
            $api->post('handle', 'RepairController@handle');
          });

          // 机构出库路由
          $api->group(['prefix'  => 'outbound'], function ($api) {
            $api->get('list', 'OutboundController@list');
            $api->get('view/{id}', 'OutboundController@view');

            $api->group(['namespace' => 'Outbound'], function ($api) {

              // 机构出库详情路由
              $api->group(['prefix'  => 'detail'], function ($api) {
                $api->get('list', 'DetailController@list');
                $api->get('view/{id}', 'DetailController@view');
              });

              // 机构出库资源路由
              $api->group(['prefix'  => 'resource'], function ($api) {
                $api->get('data', 'ResourceController@data');
                $api->post('handle', 'ResourceController@handle');
              });

              // 机构出库物流路由
              $api->group(['prefix'  => 'logistics'], function ($api) {
                $api->get('data', 'LogisticsController@data');
              });
            });
          });



          // 机构投诉路由
          $api->group(['prefix'  => 'complain'], function ($api) {
            $api->get('list', 'ComplainController@list');
            $api->get('view/{id}', 'ComplainController@view');
            $api->post('handle', 'ComplainController@handle');
          });
        });
      });
    });
  });
});
