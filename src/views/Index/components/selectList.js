/*
  与企业相关的枚举值
 */

// 企业类型
export const corpTypeEnum = [
  {
    label: '平台用户',
    value: 2
  },
  {
    label: '采购商',
    value: 9
  }, {
    label: '供应商',
    value: 8
  }, {
    label: '供采双重身份',
    value: 10
  }
];

// 注册来源
export const regFromEnum = [
  {
    label: 'PC',
    value: 1
  }, {
    label: 'APP',
    value: 2
  }, {
    label: '小程序',
    value: 3
  }, {
    label: '平台',
    value: 4
  }, {
    label: '协会',
    value: 5
  }
];

// 审核状态
export const statusEnum = [
  {
    label: '待审核',
    value: 0
  }, {
    label: '正常',
    value: 1
  }, {
    label: '审核未通过',
    value: 2
  }, {
    label: '已冻结',
    value: 3
  }, {
    label: '未认证',
    value: 9
  }, {
    label: '已注销',
    value: 4
  }
];

// 身份类型
export const regTypeEnum = [
  {
    label: '企业',
    value: 1
  }, {
    label: '个人',
    value: 2
  }
];

// 证件类型（个人）
export const personalCertificateTypeEnum = [
  {
    label: '居民身份证',
    value: 0
  },
  {
    label: '军人身份证',
    value: 3
  },
  {
    label: '港澳居民往来内地通行证',
    value: 4
  },
  {
    label: '其他',
    value: 6
  },
  {
    label: '台湾居民往来大陆通行证',
    value: 7
  },
  {
    label: '户口簿',
    value: 8
  },
  {
    label: '支付结算IC卡',
    value: 9
  }
];
// 证件类型（企业）
export const corporateCertificateTypeEnum = [
  {
    label: '三证合一',
    value: 1
  },
  {
    label: '三证信息',
    value: 2
  }
];

// 会员分类
export const memberClassificationTypeEnum = [
  {
    label: '股东企业',
    value: 1
  }, {
    label: '产业合伙人',
    value: 2
  }, {
    label: '一般会员',
    value: 3
  }
];

// 企业性质
export const corporatePropertyEnum = [
  {
    label: '有限责任公司',
    value: "0"
  }, {
    label: '股份有限公司',
    value: "1"
  }, {
    label: '合伙企业',
    value: "2"
  }, {
    label: '个人独资企业',
    value: "3"
  }, {
    label: '代表处',
    value: "4"
  }, {
    label: '个体工商户',
    value: "5"
  }
];

// 企业规模
export const corporateScaleEnum = [
  {
    label: '100以下',
    value: "0"
  }, {
    label: '100-500人',
    value: "1"
  }, {
    label: '500-1000人',
    value: "2"
  }, {
    label: '1000以上',
    value: "3"
  }
];

// 会员状态
export const memberStatusEnum = [
  {
    label: '未开通',
    value: 0
  }, {
    label: '过期',
    value: 1
  }, {
    label: '正常',
    value: 2
  }
];

// 会员等级
export const memberLevelEnum = [
  {
    label: '黄金会员',
    value: 21
  }, {
    label: '铂金会员',
    value: 22
  }, {
    label: '钻石会员',
    value: 23
  }
];
