define({ "api": [
  {
    "type": "get",
    "url": "/api/logout",
    "title": "12. 退出",
    "description": "<p>退出登录状态</p>",
    "group": "01._登录模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOjM2NzgsImF1ZGllbmN\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/logout"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "GetApiLogout"
  },
  {
    "type": "post",
    "url": "/api/bind_mobile",
    "title": "03. 绑定手机号码",
    "description": "<p>绑定用的的手机号码</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "open_id",
            "description": "<p>微信小程序编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>手机号码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/bind_mobile"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiBind_mobile"
  },
  {
    "type": "post",
    "url": "/api/register",
    "title": "02. 用户注册",
    "description": "<p>注册用户信息</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "open_id",
            "description": "<p>微信小程序编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sex",
            "description": "<p>会员性别</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "age",
            "description": "<p>会员性别</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "address",
            "description": "<p>详细地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/register"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiRegister"
  },
  {
    "type": "post",
    "url": "/api/weixin_login",
    "title": "01. 微信登录",
    "description": "<p>通过第三方软件-微信，进行登录</p>",
    "group": "01._登录模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "token",
            "description": "<p>邀请密钥</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>微信code</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sex",
            "description": "<p>会员性别</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "age",
            "description": "<p>会员性别</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "address",
            "description": "<p>详细地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|令牌": [
          {
            "group": "字段说明|令牌",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份令牌</p>"
          }
        ],
        "字段说明|用户": [
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色编号 1会员 2店长 3分销商</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "open_id",
            "description": "<p>微信编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "parent_id",
            "description": "<p>上级分销商编号</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "Number",
            "optional": false,
            "field": "level",
            "description": "<p>分销商级别</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "another_name",
            "description": "<p>分销商别称</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>会员头像</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "字段说明|用户",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>会员昵称</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/weixin_login"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/LoginController.php",
    "groupTitle": "01._登录模块",
    "name": "PostApiWeixin_login"
  },
  {
    "type": "get",
    "url": "/api/common/agreement/about",
    "title": "03. 关于我们",
    "description": "<p>获取关于我们协议</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>协议内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/agreement/about"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AgreementController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiCommonAgreementAbout"
  },
  {
    "type": "get",
    "url": "/api/common/agreement/employ",
    "title": "05. 使用协议",
    "description": "<p>获取使用协议</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>协议内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/agreement/employ"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AgreementController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiCommonAgreementEmploy"
  },
  {
    "type": "get",
    "url": "/api/common/agreement/liability",
    "title": "07. 免责声明",
    "description": "<p>获取免责声明</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>协议内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/agreement/liability"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AgreementController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiCommonAgreementLiability"
  },
  {
    "type": "get",
    "url": "/api/common/agreement/privacy",
    "title": "06. 隐私协议",
    "description": "<p>获取使用协议</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>协议内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/agreement/privacy"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AgreementController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiCommonAgreementPrivacy"
  },
  {
    "type": "get",
    "url": "/api/common/agreement/user",
    "title": "04. 用户协议",
    "description": "<p>获取用户协议</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>协议内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/agreement/user"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AgreementController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiCommonAgreementUser"
  },
  {
    "type": "get",
    "url": "/api/common/area/list",
    "title": "02. 地区列表",
    "description": "<p>获取全国地区列表</p>",
    "group": "02._公共模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "parent_id",
            "description": "<p>上级地区编号（为空：获取省，省编号: 获取市，市编号: 获取县）</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/area/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/AreaController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiCommonAreaList"
  },
  {
    "type": "get",
    "url": "/api/common/bank/list",
    "title": "09. 银行列表",
    "description": "<p>获取全国地区列表</p>",
    "group": "02._公共模块",
    "sampleRequest": [
      {
        "url": "/api/common/bank/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/BankController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiCommonBankList"
  },
  {
    "type": "get",
    "url": "/api/system/kernel",
    "title": "01. 系统信息",
    "description": "<p>获取系统配置内容信息</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "web_chinese_name",
            "description": "<p>网站中文名称</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "web_english_name",
            "description": "<p>网站英文名字</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "web_url",
            "description": "<p>站点链接</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "keywords",
            "description": "<p>网站关键字</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>网站描述</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>网站logo</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>公司电话</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>公司邮箱</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "copyright",
            "description": "<p>备案号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "web_status",
            "description": "<p>站点状态</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "web_close_info",
            "description": "<p>站点关闭原因</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/system/kernel"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/SystemController.php",
    "groupTitle": "02._公共模块",
    "name": "GetApiSystemKernel"
  },
  {
    "type": "post",
    "url": "/api/common/notify/wechat",
    "title": "14. 微信支付回调",
    "description": "<p>获取微信支付回调</p>",
    "group": "02._公共模块",
    "sampleRequest": [
      {
        "url": "/api/common/notify/wechat"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/NotifyController.php",
    "groupTitle": "02._公共模块",
    "name": "PostApiCommonNotifyWechat"
  },
  {
    "type": "post",
    "url": "/api/common/service/data",
    "title": "08. 联系我们",
    "description": "<p>获取联系我们信息</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>公司名称</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "comapny_mobile",
            "description": "<p>公司电话</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "company_email",
            "description": "<p>公司邮箱</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "service_mobile",
            "description": "<p>客服电话</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/service/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/ServiceController.php",
    "groupTitle": "02._公共模块",
    "name": "PostApiCommonServiceData"
  },
  {
    "type": "post",
    "url": "/api/common/withdrawal/data",
    "title": "10. 提现配置",
    "description": "<p>获取提现配置信息</p>",
    "group": "02._公共模块",
    "success": {
      "fields": {
        "basic params": [
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "withdrawal_rate",
            "description": "<p>提现税率(百分比)</p>"
          },
          {
            "group": "basic params",
            "type": "String",
            "optional": false,
            "field": "minimum_amount",
            "description": "<p>最低提现金额</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/common/withdrawal/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Common/WithdrawalController.php",
    "groupTitle": "02._公共模块",
    "name": "PostApiCommonWithdrawalData"
  },
  {
    "type": "post",
    "url": "/api/file/file",
    "title": "01. 上传文件",
    "description": "<p>通过base64的内容进行文件上传</p>",
    "group": "03._上传模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>文件数据</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "category",
            "description": "<p>文件分类 excel word pdf video audio ...</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>文件地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/file/file"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/FileController.php",
    "groupTitle": "03._上传模块",
    "name": "PostApiFileFile"
  },
  {
    "type": "post",
    "url": "/api/file/picture",
    "title": "02. 上传图片",
    "description": "<p>通过base64的内容进行图片上传</p>",
    "group": "03._上传模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>图片数据</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "category",
            "description": "<p>图片分类 picture avatar ...</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>图片地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/file/picture"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/System/FileController.php",
    "groupTitle": "03._上传模块",
    "name": "PostApiFilePicture"
  },
  {
    "type": "get",
    "url": "/api/problem/category/select",
    "title": "01. 常见问题分类数据",
    "description": "<p>获取常见问题分类不分页列表数据</p>",
    "group": "07._常见问题分类模块",
    "success": {
      "fields": {
        "字段说明|问题分类": [
          {
            "group": "字段说明|问题分类",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>常见问题分类编号</p>"
          },
          {
            "group": "字段说明|问题分类",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>常见问题分类标题</p>"
          }
        ],
        "字段说明|问题": [
          {
            "group": "字段说明|问题",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>常见问题标题</p>"
          },
          {
            "group": "字段说明|问题",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>常见问题内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/problem/category/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Problem/CategoryController.php",
    "groupTitle": "07._常见问题分类模块",
    "name": "GetApiProblemCategorySelect"
  },
  {
    "type": "get",
    "url": "/api/problem/list?page={page}",
    "title": "01. 常见问题列表",
    "description": "<p>获取常见问题分页列表</p>",
    "group": "08._常见问题模块",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>常见问题编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>常见问题标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>常见问题内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/problem/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/ProblemController.php",
    "groupTitle": "08._常见问题模块",
    "name": "GetApiProblemListPagePage"
  },
  {
    "type": "get",
    "url": "/api/problem/select",
    "title": "02. 常见问题数据",
    "description": "<p>获取常见问题不分页列表数据</p>",
    "group": "08._常见问题模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>常见问题编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>常见问题标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>常见问题内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/problem/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/ProblemController.php",
    "groupTitle": "08._常见问题模块",
    "name": "GetApiProblemSelect"
  },
  {
    "type": "get",
    "url": "/api/problem/view/{id}",
    "title": "03. 常见问题详情",
    "description": "<p>获取常见问题详情</p>",
    "group": "08._常见问题模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>常见问题编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>常见问题标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>常见问题内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/problem/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/ProblemController.php",
    "groupTitle": "08._常见问题模块",
    "name": "GetApiProblemViewId"
  },
  {
    "type": "get",
    "url": "/api/repair/category/select",
    "title": "01. 报修分类数据",
    "description": "<p>获取报修分类不分页列表数据</p>",
    "group": "09._报修分类模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>报修分类编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>报修分类标题</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/repair/category/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Repair/CategoryController.php",
    "groupTitle": "09._报修分类模块",
    "name": "GetApiRepairCategorySelect"
  },
  {
    "type": "get",
    "url": "/api/price/select",
    "title": "01. 打印价格数据",
    "description": "<p>获取打印价格数据</p>",
    "group": "11._打印价格模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>打印价格编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>价格标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>打印价格</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/price/select"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/PriceController.php",
    "groupTitle": "11._打印价格模块",
    "name": "GetApiPriceSelect"
  },
  {
    "type": "get",
    "url": "/api/price/view/{id}",
    "title": "02. 打印价格详情",
    "description": "<p>获取打印价格详情</p>",
    "group": "11._打印价格模块",
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>打印价格编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>价格标题</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>打印价格</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/price/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/PriceController.php",
    "groupTitle": "11._打印价格模块",
    "name": "GetApiPriceViewId"
  },
  {
    "type": "get",
    "url": "/api/printer/list?page={page}",
    "title": "01. 打印机列表",
    "description": "<p>获取打印机列表(分页)</p>",
    "group": "12._打印机模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "member_id",
            "description": "<p>机构自增编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "manager_id",
            "description": "<p>店长自增编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|打印机": [
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>打印机自增编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "first_level_agent_id",
            "description": "<p>一级代理商编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "second_level_agent_id",
            "description": "<p>二级代理商编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "manager_id",
            "description": "<p>店长编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>打印机名称</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>打印机型号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>打印机编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "province_id",
            "description": "<p>所在省份</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>所在城市</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "region_id",
            "description": "<p>所在区县</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "ink_quantity",
            "description": "<p>剩余墨量</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "paper_quantity",
            "description": "<p>纸张消耗量</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "failure_number",
            "description": "<p>故障次数</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "bind_status",
            "description": "<p>绑定状态 1 已绑定 2 未绑定</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "bind_time",
            "description": "<p>绑定时间</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "activate_time",
            "description": "<p>激活时间</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "artivate_status",
            "description": "<p>激活状态 1正常 2离线 3损坏</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          }
        ],
        "字段说明|店长": [
          {
            "group": "字段说明|店长",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>店长姓名</p>"
          },
          {
            "group": "字段说明|店长",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>店长电话</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/printer/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/PrinterController.php",
    "groupTitle": "12._打印机模块",
    "name": "GetApiPrinterListPagePage"
  },
  {
    "type": "get",
    "url": "/api/printer/view/{id}",
    "title": "02. 打印机详情",
    "description": "<p>获取打印机的详情</p>",
    "group": "12._打印机模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>打印机编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|打印机": [
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>打印机自增编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "first_level_agent_id",
            "description": "<p>一级代理商编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "second_level_agent_id",
            "description": "<p>二级代理商编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "manager_id",
            "description": "<p>店长编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>打印机名称</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>打印机型号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>打印机编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "province_id",
            "description": "<p>所在省份</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>所在城市</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "region_id",
            "description": "<p>所在区县</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "ink_quantity",
            "description": "<p>剩余墨量</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "paper_quantity",
            "description": "<p>纸张消耗量</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "failure_number",
            "description": "<p>故障次数</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "bind_status",
            "description": "<p>绑定状态 1 已绑定 2 未绑定</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "bind_time",
            "description": "<p>绑定时间</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "activate_time",
            "description": "<p>激活时间</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "artivate_status",
            "description": "<p>激活状态 1正常 2离线 3损坏</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          }
        ],
        "字段说明|店长": [
          {
            "group": "字段说明|店长",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>店长姓名</p>"
          },
          {
            "group": "字段说明|店长",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>店长电话</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/printer/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/PrinterController.php",
    "groupTitle": "12._打印机模块",
    "name": "GetApiPrinterViewId"
  },
  {
    "type": "get",
    "url": "/api/organization/archive",
    "title": "01. 当前机构档案",
    "description": "<p>获取当前机构的档案信息</p>",
    "group": "20._机构模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明|机构": [
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>机构编号</p>"
          },
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>机构头像</p>"
          },
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>机构姓名</p>"
          }
        ],
        "字段说明|档案": [
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "字段说明|档案",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/archive"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/OrganizationController.php",
    "groupTitle": "20._机构模块",
    "name": "GetApiOrganizationArchive"
  },
  {
    "type": "get",
    "url": "/api/organization/data",
    "title": "06. 查询机构数据",
    "description": "<p>根据机构编号获取机构数据</p>",
    "group": "20._机构模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>机构编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|机构": [
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>机构编号</p>"
          },
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>机构头像</p>"
          },
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>机构姓名</p>"
          }
        ],
        "字段说明|资产": [
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>账户资产</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "proportion",
            "description": "<p>分成收益</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "withdrawal_money",
            "description": "<p>提现金额</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "should_printer_total",
            "description": "<p>认购打印机数量</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "already_printer_total",
            "description": "<p>已收到打印机数量</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "order_total",
            "description": "<p>订单数量</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "yesterday_money",
            "description": "<p>昨天收益</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "current_month_money",
            "description": "<p>本月收益</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/OrganizationController.php",
    "groupTitle": "20._机构模块",
    "name": "GetApiOrganizationData"
  },
  {
    "type": "get",
    "url": "/api/organization/obtain",
    "title": "08. 下属机构收益",
    "description": "<p>根据机构编号获取机构收益</p>",
    "group": "20._机构模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>机构编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色类型 3下级代理商 2下级店长</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "create_time",
            "description": "<p>提现时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n  \"create_time\": [\n    \"2021-05-05 17:01:01\",\n    \"2021-07-07 17:01:10\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明|机构": [
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>机构编号</p>"
          },
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>机构头像</p>"
          },
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>机构姓名</p>"
          }
        ],
        "字段说明|收益": [
          {
            "group": "字段说明|收益",
            "type": "String",
            "optional": false,
            "field": "obtain_money",
            "description": "<p>收益金额</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/obtain"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/OrganizationController.php",
    "groupTitle": "20._机构模块",
    "name": "GetApiOrganizationObtain"
  },
  {
    "type": "get",
    "url": "/api/organization/status",
    "title": "02. 当前机构是否填写资料",
    "description": "<p>获取当前机构是否填写资料信息</p>",
    "group": "20._机构模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>true|false</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/OrganizationController.php",
    "groupTitle": "20._机构模块",
    "name": "GetApiOrganizationStatus"
  },
  {
    "type": "get",
    "url": "/api/organization/subordinate",
    "title": "07. 下属机构数据",
    "description": "<p>根据机构编号获取机构数据</p>",
    "group": "20._机构模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>机构编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色类型 3下级代理商 2下级店长</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "asset_create_time",
            "description": "<p>提现时间</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|机构": [
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>机构编号</p>"
          },
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>角色编号</p>"
          },
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>机构头像</p>"
          },
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>登录账户</p>"
          },
          {
            "group": "字段说明|机构",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>机构姓名</p>"
          }
        ],
        "字段说明|资产": [
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>账户资产</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "proportion",
            "description": "<p>分成收益</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "withdrawal_money",
            "description": "<p>提现金额</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "should_printer_total",
            "description": "<p>认购打印机数量</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "already_printer_total",
            "description": "<p>已收到打印机数量</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "order_total",
            "description": "<p>订单数量</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "yesterday_money",
            "description": "<p>昨天收益</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "current_month_money",
            "description": "<p>本月收益</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/subordinate"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/OrganizationController.php",
    "groupTitle": "20._机构模块",
    "name": "GetApiOrganizationSubordinate"
  },
  {
    "type": "post",
    "url": "/api/organization/change_code",
    "title": "04. 手机验变更证码[略]",
    "description": "<p>获取当前机构的变更手机的验证码</p>",
    "group": "20._机构模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>旧手机号码（18201018888）</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/change_code"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/OrganizationController.php",
    "groupTitle": "20._机构模块",
    "name": "PostApiOrganizationChange_code"
  },
  {
    "type": "post",
    "url": "/api/organization/change_mobile",
    "title": "05. 变更手机号码[略]",
    "description": "<p>修改当前机构的手机号码</p>",
    "group": "20._机构模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sms_code",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/change_mobile"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/OrganizationController.php",
    "groupTitle": "20._机构模块",
    "name": "PostApiOrganizationChange_mobile"
  },
  {
    "type": "post",
    "url": "/api/organization/handle",
    "title": "03. 当前机构填写信息",
    "description": "<p>当前机构编辑信息</p>",
    "group": "20._机构模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>机构头像</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickname",
            "description": "<p>机构姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sex",
            "description": "<p>机构性别</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "age",
            "description": "<p>机构性别</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "province_id",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city_id",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "region_id",
            "description": "<p>县</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "weixin",
            "description": "<p>微信号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "address",
            "description": "<p>详细地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/OrganizationController.php",
    "groupTitle": "20._机构模块",
    "name": "PostApiOrganizationHandle"
  },
  {
    "type": "post",
    "url": "/api/organization/mobile",
    "title": "09. 机构手机号码",
    "description": "<p>根据机构编号获取机构数据</p>",
    "group": "20._机构模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>微信code</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "data",
            "description": "<p>一键登录加密数据</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "iv",
            "description": "<p>一键登录初始向量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>手机号码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/mobile"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/OrganizationController.php",
    "groupTitle": "20._机构模块",
    "name": "PostApiOrganizationMobile"
  },
  {
    "type": "post",
    "url": "/api/organization/qrcode",
    "title": "09. 邀请店长二维码",
    "description": "<p>根据机构编号获取邀请店长二维码</p>",
    "group": "20._机构模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>机构自增编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>二维码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/qrcode"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/OrganizationController.php",
    "groupTitle": "20._机构模块",
    "name": "PostApiOrganizationQrcode"
  },
  {
    "type": "get",
    "url": "/api/organization/asset/data",
    "title": "01. 我的资产",
    "description": "<p>获取当前机构的资产</p>",
    "group": "21._机构资产模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明|资产": [
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>账户金额</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "yesterday_money",
            "description": "<p>昨天收益金额</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "current_month_money",
            "description": "<p>本月收益金额</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "proportion",
            "description": "<p>分成比例金额</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "withdrawal_money",
            "description": "<p>已提现金额</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "should_printer_total",
            "description": "<p>认购打印机数量</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "already_printer_total",
            "description": "<p>已确认打印机数量</p>"
          },
          {
            "group": "字段说明|资产",
            "type": "String",
            "optional": false,
            "field": "order_total",
            "description": "<p>订单总量</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/asset/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/AssetController.php",
    "groupTitle": "21._机构资产模块",
    "name": "GetApiOrganizationAssetData"
  },
  {
    "type": "get",
    "url": "/api/organization/asset/equipment",
    "title": "02. 设备中心",
    "description": "<p>获取当前机构设备中心数据</p>",
    "group": "21._机构资产模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|打印机": [
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "printer_total",
            "description": "<p>打印机总量</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "already_printer_total",
            "description": "<p>已分配总量</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "without_printer_total",
            "description": "<p>未分配总量</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/asset/equipment"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/AssetController.php",
    "groupTitle": "21._机构资产模块",
    "name": "GetApiOrganizationAssetEquipment"
  },
  {
    "type": "get",
    "url": "/api/organization/obtain/center",
    "title": "01. 我的收益中心",
    "description": "<p>获取当前会员的收益列表</p>",
    "group": "22._机构收益模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>收益笔数</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>收益金额</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/obtain/center"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/ObtainController.php",
    "groupTitle": "22._机构收益模块",
    "name": "GetApiOrganizationObtainCenter"
  },
  {
    "type": "get",
    "url": "/api/organization/obtain/data",
    "title": "03. 某个收益列表",
    "description": "<p>获取某个会员的收益列表</p>",
    "group": "22._机构收益模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "member_id",
            "description": "<p>代理商自增编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "create_time",
            "description": "<p>提现时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n  \"member_id\": 1,\n  \"create_time\": [\n    \"2021-05-05 17:01:01\",\n    \"2021-07-07 17:01:10\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>收益自增编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>收益订单自增编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>收益金额</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>收益时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success:",
          "content": "[\n  {\n    time: '时间',\n    money: '收益',\n    data: [\n      {id:4,...},\n      {id:5,...},\n    ]\n  },{\n    time: '时间',\n    money: '收益',\n    data: [\n      {id:4,...},\n      {id:5,...},\n    ]\n  },\n]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/organization/obtain/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/ObtainController.php",
    "groupTitle": "22._机构收益模块",
    "name": "GetApiOrganizationObtainData"
  },
  {
    "type": "get",
    "url": "/api/organization/obtain/list",
    "title": "02. 我的收益列表",
    "description": "<p>获取当前会员的收益列表</p>",
    "group": "22._机构收益模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "create_time",
            "description": "<p>提现时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n  \"create_time\": [\n    \"2021-05-05 17:01:01\",\n    \"2021-07-07 17:01:10\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>收益自增编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "order_id",
            "description": "<p>收益订单自增编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>收益金额</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>收益时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success:",
          "content": "[\n  {\n    time: '时间',\n    money: '收益',\n    data: [\n      {id:4,...},\n      {id:5,...},\n    ]\n  },{\n    time: '时间',\n    money: '收益',\n    data: [\n      {id:4,...},\n      {id:5,...},\n    ]\n  },\n]",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/organization/obtain/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/ObtainController.php",
    "groupTitle": "22._机构收益模块",
    "name": "GetApiOrganizationObtainList"
  },
  {
    "type": "get",
    "url": "/api/organization/order/list?page={page}",
    "title": "01. 我的订单列表",
    "description": "<p>获取当前机构订单列表(分页)</p>",
    "group": "23._机构订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|订单": [
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "first_level_agent_id",
            "description": "<p>一级代理商自增编号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "second_level_agent_id",
            "description": "<p>二级代理商自增编号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "manager_id",
            "description": "<p>店长自增编号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "printer_id",
            "description": "<p>打印机自增编号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>打印类型</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>打印文件名称</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "page_total",
            "description": "<p>文件页数</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "print_total",
            "description": "<p>打印份数</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "pay_status",
            "description": "<p>支付状态</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "pay_time",
            "description": "<p>支付时间</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          }
        ],
        "字段说明|店长": [
          {
            "group": "字段说明|店长",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>店长自增编号</p>"
          },
          {
            "group": "字段说明|店长",
            "type": "String",
            "optional": false,
            "field": "nickanme",
            "description": "<p>店长姓名</p>"
          }
        ],
        "字段说明|打印机": [
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>打印机自增编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>打印机编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>打印机型号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>打印机地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/order/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/OrderController.php",
    "groupTitle": "23._机构订单模块",
    "name": "GetApiOrganizationOrderListPagePage"
  },
  {
    "type": "get",
    "url": "/api/organization/order/view/{id}",
    "title": "02. 我的订单详情",
    "description": "<p>获取当前机构订单的详情</p>",
    "group": "23._机构订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|订单": [
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "order_no",
            "description": "<p>订单号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "first_level_agent_id",
            "description": "<p>一级代理商自增编号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "second_level_agent_id",
            "description": "<p>二级代理商自增编号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "manager_id",
            "description": "<p>店长自增编号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "printer_id",
            "description": "<p>打印机自增编号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "member_id",
            "description": "<p>会员编号</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>打印类型</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>打印文件名称</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "page_total",
            "description": "<p>文件页数</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "print_total",
            "description": "<p>打印份数</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "pay_money",
            "description": "<p>支付金额</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "pay_type",
            "description": "<p>支付类型</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "pay_status",
            "description": "<p>支付状态</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "pay_time",
            "description": "<p>支付时间</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "order_status",
            "description": "<p>订单状态</p>"
          },
          {
            "group": "字段说明|订单",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          }
        ],
        "字段说明|店长": [
          {
            "group": "字段说明|店长",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>店长自增编号</p>"
          },
          {
            "group": "字段说明|店长",
            "type": "String",
            "optional": false,
            "field": "nickanme",
            "description": "<p>店长姓名</p>"
          }
        ],
        "字段说明|打印机": [
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>打印机自增编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>打印机编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>打印机型号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>打印机地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/order/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/OrderController.php",
    "groupTitle": "23._机构订单模块",
    "name": "GetApiOrganizationOrderViewId"
  },
  {
    "type": "post",
    "url": "/api/organization/order/cancel",
    "title": "04. 订单取消",
    "description": "<p>当前机构取消某个订单</p>",
    "group": "23._机构订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/order/cancel"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/OrderController.php",
    "groupTitle": "23._机构订单模块",
    "name": "PostApiOrganizationOrderCancel"
  },
  {
    "type": "post",
    "url": "/api/organization/order/finish",
    "title": "03. 订单完成",
    "description": "<p>当前机构标记某个订单完成</p>",
    "group": "23._机构订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/order/finish"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/OrderController.php",
    "groupTitle": "23._机构订单模块",
    "name": "PostApiOrganizationOrderFinish"
  },
  {
    "type": "post",
    "url": "/api/organization/order/refund",
    "title": "05. 订单退款[TODO]",
    "description": "<p>当前机构取消某个订单</p>",
    "group": "23._机构订单模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "order_id",
            "description": "<p>订单编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "total",
            "description": "<p>纸张张数</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "money",
            "description": "<p>退款金额</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/order/refund"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/OrderController.php",
    "groupTitle": "23._机构订单模块",
    "name": "PostApiOrganizationOrderRefund"
  },
  {
    "type": "get",
    "url": "/api/organization/withdrawal/list?page={page}",
    "title": "01. 我的提现列表",
    "description": "<p>获取当前机构提现列表(分页)</p>",
    "group": "24._机构提现模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "create_time",
            "description": "<p>提现时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n  \"create_time\": [\n    \"2021-05-05 17:01:01\",\n    \"2021-07-07 17:01:10\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>提现金额</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>提现时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/withdrawal/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/WithdrawalController.php",
    "groupTitle": "24._机构提现模块",
    "name": "GetApiOrganizationWithdrawalListPagePage"
  },
  {
    "type": "get",
    "url": "/api/organization/withdrawal/view/{id}",
    "title": "02. 我的提现详情",
    "description": "<p>获取当前机构提现的详情</p>",
    "group": "24._机构提现模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>提现编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>提现金额</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>提现时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/withdrawal/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/WithdrawalController.php",
    "groupTitle": "24._机构提现模块",
    "name": "GetApiOrganizationWithdrawalViewId"
  },
  {
    "type": "post",
    "url": "/api/organization/withdrawal/handle",
    "title": "03. 提现[TODO]",
    "description": "<p>当前机构标记某个提现完成</p>",
    "group": "24._机构提现模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "money",
            "description": "<p>提现金额</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/withdrawal/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/WithdrawalController.php",
    "groupTitle": "24._机构提现模块",
    "name": "PostApiOrganizationWithdrawalHandle"
  },
  {
    "type": "get",
    "url": "/api/organization/complain/list?page={page}",
    "title": "01. 我的投诉列表",
    "description": "<p>获取我的投诉分页列表</p>",
    "group": "25._机构投诉模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|投诉": [
          {
            "group": "字段说明|投诉",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>投诉自增编号</p>"
          },
          {
            "group": "字段说明|投诉",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>投诉内容</p>"
          },
          {
            "group": "字段说明|投诉",
            "type": "String",
            "optional": false,
            "field": "contact",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "字段说明|投诉",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>投诉时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/complain/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/ComplainController.php",
    "groupTitle": "25._机构投诉模块",
    "name": "GetApiOrganizationComplainListPagePage"
  },
  {
    "type": "get",
    "url": "/api/organization/complain/view/{id}",
    "title": "02. 我的投诉详情",
    "description": "<p>获取我的投诉详情</p>",
    "group": "25._机构投诉模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明|投诉": [
          {
            "group": "字段说明|投诉",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>投诉自增编号</p>"
          },
          {
            "group": "字段说明|投诉",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>投诉内容</p>"
          },
          {
            "group": "字段说明|投诉",
            "type": "String",
            "optional": false,
            "field": "contact",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "字段说明|投诉",
            "type": "Number",
            "optional": false,
            "field": "create_time",
            "description": "<p>投诉时间</p>"
          }
        ],
        "字段说明|投诉资源": [
          {
            "group": "字段说明|投诉资源",
            "type": "Number",
            "optional": false,
            "field": "picture",
            "description": "<p>投诉图片地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/complain/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/ComplainController.php",
    "groupTitle": "25._机构投诉模块",
    "name": "GetApiOrganizationComplainViewId"
  },
  {
    "type": "post",
    "url": "/api/organization/complain/handle",
    "title": "03. 提交投诉信息",
    "description": "<p>提交投诉信息</p>",
    "group": "25._机构投诉模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>投诉内容</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "picture",
            "description": "<p>投诉图片</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contact",
            "description": "<p>联系方式（不可为空）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n  \"content\": \"1231312313\",\n  \"contact\": \"18201018926\",\n  \"picture\": [\n    \"111\",\n    \"222\",\n    \"333\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/organization/complain/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/ComplainController.php",
    "groupTitle": "25._机构投诉模块",
    "name": "PostApiOrganizationComplainHandle"
  },
  {
    "type": "get",
    "url": "/api/organization/bank/data",
    "title": "01. 我的银行卡详情",
    "description": "<p>获取当前机构银行卡详情</p>",
    "group": "26._机构银行模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明|打印机": [
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>公司名称</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "open_bank_name",
            "description": "<p>开户行名称</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "branch_bank_name",
            "description": "<p>支行名称</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "card_no",
            "description": "<p>银行卡号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/bank/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/BankController.php",
    "groupTitle": "26._机构银行模块",
    "name": "GetApiOrganizationBankData"
  },
  {
    "type": "get",
    "url": "/api/organization/bank/delete",
    "title": "03. 删除我的银行卡",
    "description": "<p>删除当前机构银行卡</p>",
    "group": "26._机构银行模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>银行卡自增编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/bank/delete"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/BankController.php",
    "groupTitle": "26._机构银行模块",
    "name": "GetApiOrganizationBankDelete"
  },
  {
    "type": "post",
    "url": "/api/organization/bank/handle",
    "title": "02. 操作银行卡",
    "description": "<p>当前机构操作银行卡</p>",
    "group": "26._机构银行模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company_name",
            "description": "<p>公司名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "open_bank_name",
            "description": "<p>开户行名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branch_bank_name",
            "description": "<p>支行名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card_no",
            "description": "<p>银行卡号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/bank/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/BankController.php",
    "groupTitle": "26._机构银行模块",
    "name": "PostApiOrganizationBankHandle"
  },
  {
    "type": "get",
    "url": "/api/organization/printer/list?page={page}",
    "title": "01. 我的打印机列表",
    "description": "<p>获取当前机构打印机列表(分页)</p>",
    "group": "30._机构打印机模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|打印机": [
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>打印机自增编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "first_level_agent_id",
            "description": "<p>一级代理商编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "second_level_agent_id",
            "description": "<p>二级代理商编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "manager_id",
            "description": "<p>店长编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>打印机名称</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>打印机型号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>打印机编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "province_id",
            "description": "<p>所在省份</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>所在城市</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "region_id",
            "description": "<p>所在区县</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "ink_quantity",
            "description": "<p>剩余墨量</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "paper_quantity",
            "description": "<p>纸张消耗量</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "failure_number",
            "description": "<p>故障次数</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "bind_status",
            "description": "<p>绑定状态 1 已绑定 2 未绑定</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "bind_time",
            "description": "<p>绑定时间</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "activate_time",
            "description": "<p>激活时间</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "artivate_status",
            "description": "<p>激活状态 1正常 2离线 3损坏</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          }
        ],
        "字段说明|一级代理商": [
          {
            "group": "字段说明|一级代理商",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>一级代理商姓名</p>"
          }
        ],
        "字段说明|二级代理商": [
          {
            "group": "字段说明|二级代理商",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>二级代理商姓名</p>"
          }
        ],
        "字段说明|店长": [
          {
            "group": "字段说明|店长",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>店长姓名</p>"
          },
          {
            "group": "字段说明|店长",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>店长电话</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/printer/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/PrinterController.php",
    "groupTitle": "30._机构打印机模块",
    "name": "GetApiOrganizationPrinterListPagePage"
  },
  {
    "type": "get",
    "url": "/api/organization/printer/view/{id}",
    "title": "02. 我的打印机详情",
    "description": "<p>获取当前机构打印机的详情</p>",
    "group": "30._机构打印机模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>打印机编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|打印机": [
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>打印机自增编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "first_level_agent_id",
            "description": "<p>一级代理商编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "second_level_agent_id",
            "description": "<p>二级代理商编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "manager_id",
            "description": "<p>店长编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>打印机名称</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>打印机型号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>打印机编号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "province_id",
            "description": "<p>所在省份</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>所在城市</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "region_id",
            "description": "<p>所在区县</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "ink_quantity",
            "description": "<p>剩余墨量</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "paper_quantity",
            "description": "<p>纸张消耗量</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "failure_number",
            "description": "<p>故障次数</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "bind_status",
            "description": "<p>绑定状态 1 已绑定 2 未绑定</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "bind_time",
            "description": "<p>绑定时间</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "activate_time",
            "description": "<p>激活时间</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "artivate_status",
            "description": "<p>激活状态 1正常 2离线 3损坏</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          }
        ],
        "字段说明|一级代理商": [
          {
            "group": "字段说明|一级代理商",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>一级代理商姓名</p>"
          }
        ],
        "字段说明|二级代理商": [
          {
            "group": "字段说明|二级代理商",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>二级代理商姓名</p>"
          }
        ],
        "字段说明|店长": [
          {
            "group": "字段说明|店长",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>店长姓名</p>"
          },
          {
            "group": "字段说明|店长",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>店长电话</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/printer/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/PrinterController.php",
    "groupTitle": "30._机构打印机模块",
    "name": "GetApiOrganizationPrinterViewId"
  },
  {
    "type": "post",
    "url": "/api/organization/printer/delete",
    "title": "07. 删除打印机",
    "description": "<p>当前店长删除打印机</p>",
    "group": "30._机构打印机模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "printer_id",
            "description": "<p>打印机自增编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/printer/delete"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/PrinterController.php",
    "groupTitle": "30._机构打印机模块",
    "name": "PostApiOrganizationPrinterDelete"
  },
  {
    "type": "post",
    "url": "/api/organization/printer/first_step",
    "title": "04. 添加打印机",
    "description": "<p>当前机构添加打印机, 第一步，添加打印机</p>",
    "group": "30._机构打印机模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>打印机名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>打印机编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>打印机地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>打印机备注</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/printer/first_step"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/PrinterController.php",
    "groupTitle": "30._机构打印机模块",
    "name": "PostApiOrganizationPrinterFirst_step"
  },
  {
    "type": "post",
    "url": "/api/organization/printer/second_step",
    "title": "05. 验证通过",
    "description": "<p>当前机构添加打印机, 第二步，验证通过</p>",
    "group": "30._机构打印机模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "printer_id",
            "description": "<p>打印机自增编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/printer/second_step"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/PrinterController.php",
    "groupTitle": "30._机构打印机模块",
    "name": "PostApiOrganizationPrinterSecond_step"
  },
  {
    "type": "post",
    "url": "/api/organization/printer/status",
    "title": "03. 打印机状态",
    "description": "<p>当前机构更改打印机状态[如果在线变更为离线，否在反之]</p>",
    "group": "30._机构打印机模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "printer_id",
            "description": "<p>打印机编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>激活状态 1正常 2离线 3损坏</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/printer/status"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/PrinterController.php",
    "groupTitle": "30._机构打印机模块",
    "name": "PostApiOrganizationPrinterStatus"
  },
  {
    "type": "post",
    "url": "/api/organization/printer/third_step",
    "title": "06. 验证失败",
    "description": "<p>当前机构添加打印机, 第三步，验证失败</p>",
    "group": "30._机构打印机模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "printer_id",
            "description": "<p>打印机自增编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/printer/third_step"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/PrinterController.php",
    "groupTitle": "30._机构打印机模块",
    "name": "PostApiOrganizationPrinterThird_step"
  },
  {
    "type": "get",
    "url": "/api/organization/repair/list?page={page}",
    "title": "01. 我的报修列表",
    "description": "<p>获取当前机构报修列表(分页)</p>",
    "group": "31._机构报修模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|报修": [
          {
            "group": "字段说明|报修",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>报修自增编号</p>"
          },
          {
            "group": "字段说明|报修",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>分类编号</p>"
          },
          {
            "group": "字段说明|报修",
            "type": "String",
            "optional": false,
            "field": "member_id",
            "description": "<p>店长编号</p>"
          },
          {
            "group": "字段说明|报修",
            "type": "String",
            "optional": false,
            "field": "printer_id",
            "description": "<p>打印机自增编号</p>"
          },
          {
            "group": "字段说明|报修",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>报修内容</p>"
          },
          {
            "group": "字段说明|报修",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>提交时间</p>"
          }
        ],
        "字段说明|报修分类": [
          {
            "group": "字段说明|报修分类",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>报修分类名称</p>"
          }
        ],
        "字段说明|打印机": [
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>打印机型号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>打印机编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/repair/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/RepairController.php",
    "groupTitle": "31._机构报修模块",
    "name": "GetApiOrganizationRepairListPagePage"
  },
  {
    "type": "get",
    "url": "/api/organization/repair/view/{id}",
    "title": "02. 我的报修详情",
    "description": "<p>获取当前机构课程报修的详情</p>",
    "group": "31._机构报修模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>报修编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明|报修": [
          {
            "group": "字段说明|报修",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>报修自增编号</p>"
          },
          {
            "group": "字段说明|报修",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>分类编号</p>"
          },
          {
            "group": "字段说明|报修",
            "type": "String",
            "optional": false,
            "field": "member_id",
            "description": "<p>店长编号</p>"
          },
          {
            "group": "字段说明|报修",
            "type": "String",
            "optional": false,
            "field": "printer_id",
            "description": "<p>打印机自增编号</p>"
          },
          {
            "group": "字段说明|报修",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>报修内容</p>"
          },
          {
            "group": "字段说明|报修",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>提交时间</p>"
          }
        ],
        "字段说明|报修分类": [
          {
            "group": "字段说明|报修分类",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>报修分类名称</p>"
          }
        ],
        "字段说明|打印机": [
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>打印机型号</p>"
          },
          {
            "group": "字段说明|打印机",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>打印机编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/repair/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/RepairController.php",
    "groupTitle": "31._机构报修模块",
    "name": "GetApiOrganizationRepairViewId"
  },
  {
    "type": "post",
    "url": "/api/organization/repair/handle",
    "title": "03. 提交报修",
    "description": "<p>当前机构提交报修信息</p>",
    "group": "31._机构报修模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category_id",
            "description": "<p>报修分类编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "printer_id",
            "description": "<p>打印机自增编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>报修内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/repair/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/RepairController.php",
    "groupTitle": "31._机构报修模块",
    "name": "PostApiOrganizationRepairHandle"
  },
  {
    "type": "get",
    "url": "/api/organization/outbound/list",
    "title": "01. 我的出库列表",
    "description": "<p>获取当前机构的出库列表</p>",
    "group": "35._机构出库模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>出库自增编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>设备类型[1打印机 2墨盒 3纸张]</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>出库类型[1新设备出库 2 返修出库]</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "member_id",
            "description": "<p>机构编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>出库数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "operator",
            "description": "<p>操作人</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>出库时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/outbound/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/OutboundController.php",
    "groupTitle": "35._机构出库模块",
    "name": "GetApiOrganizationOutboundList"
  },
  {
    "type": "get",
    "url": "/api/organization/outbound/view/{id}",
    "title": "02. 我的出库详情",
    "description": "<p>获取当前机构出库的详情</p>",
    "group": "35._机构出库模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>出库自增编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>出库自增编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>设备类型[1打印机 2墨盒 3纸张]</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>出库类型[1新设备出库 2 返修出库]</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "member_id",
            "description": "<p>机构编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>出库数量</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "operator",
            "description": "<p>操作人</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>出库时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/outbound/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/OutboundController.php",
    "groupTitle": "35._机构出库模块",
    "name": "GetApiOrganizationOutboundViewId"
  },
  {
    "type": "get",
    "url": "/api/organization/outbound/detail/list",
    "title": "01. 我的出库明细列表",
    "description": "<p>获取当前机构的出库明细列表</p>",
    "group": "36._机构出库明细模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "outbound_id",
            "description": "<p>出库自增编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>出库明细自增编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>设备型号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>设备编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/outbound/detail/list"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/Outbound/DetailController.php",
    "groupTitle": "36._机构出库明细模块",
    "name": "GetApiOrganizationOutboundDetailList"
  },
  {
    "type": "get",
    "url": "/api/organization/outbound/detail/view/{id}",
    "title": "02. 我的出库明细详情",
    "description": "<p>获取当前机构出库明细的详情</p>",
    "group": "36._机构出库明细模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>出库明细自增编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>出库明细自增编号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>设备型号</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>设备编号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/outbound/detail/view/{id}"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/Outbound/DetailController.php",
    "groupTitle": "36._机构出库明细模块",
    "name": "GetApiOrganizationOutboundDetailViewId"
  },
  {
    "type": "post",
    "url": "/api/organization/outbound/resource/handle",
    "title": "03. 上传回执单[略]",
    "description": "<p>当前机构上传快递回执单</p>",
    "group": "37._机构出库资源模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "outbound_id",
            "description": "<p>出库自增编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receipt_form",
            "description": "<p>回执单地址</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/outbound/resource/handle"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/Outbound/ResourceController.php",
    "groupTitle": "37._机构出库资源模块",
    "name": "PostApiOrganizationOutboundResourceHandle"
  },
  {
    "type": "get",
    "url": "/api/organization/outbound/resource/data",
    "title": "01. 我的出库回执单",
    "description": "<p>获取当前机构出库资源的数据</p>",
    "group": "38._机构出库资源模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "outbound_id",
            "description": "<p>出库自增编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "receipt_form",
            "description": "<p>回执单地址</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "create_time",
            "description": "<p>提交时间</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/outbound/resource/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/Outbound/ResourceController.php",
    "groupTitle": "38._机构出库资源模块",
    "name": "GetApiOrganizationOutboundResourceData"
  },
  {
    "type": "get",
    "url": "/api/organization/outbound/logistics/data",
    "title": "01. 我的出库物流",
    "description": "<p>获取当前机构出库物流的数据</p>",
    "group": "39._机构出库物流模块",
    "permission": [
      {
        "name": "jwt"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>身份令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiO\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "outbound_id",
            "description": "<p>出库自增编号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "字段说明": [
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "company_id",
            "description": "<p>物流公司</p>"
          },
          {
            "group": "字段说明",
            "type": "String",
            "optional": false,
            "field": "logistics_no",
            "description": "<p>物流单号</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/organization/outbound/logistics/data"
      }
    ],
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/Module/Organization/Outbound/LogisticsController.php",
    "groupTitle": "39._机构出库物流模块",
    "name": "GetApiOrganizationOutboundLogisticsData"
  }
] });
