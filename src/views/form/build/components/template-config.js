/**
 * 单列表单和多列表单的共用表单项
 */
export const baseFormItems = [
  { label: '用户账号', prop: 'username', type: 'input', required: true },
  { label: '用户名', prop: 'nickname', type: 'input', required: true },
  {
    label: '性别',
    prop: 'sex',
    type: 'dictSelect',
    props: { code: 'sex' },
    required: true
  },
  {
    label: '角色',
    prop: 'roles',
    type: 'multipleSelect',
    options: [
      { label: '管理员', value: 1 },
      { label: '普通用户', value: 2 },
      { label: '游客', value: 3 }
    ],
    required: true
  },
  { label: '邮箱', prop: 'email', type: 'input', required: true },
  { label: '手机号', prop: 'phone', type: 'input', required: true },
  { label: '出生日期', prop: 'birthday', type: 'date', required: true },
  {
    label: '登录密码',
    prop: 'password',
    type: 'input',
    props: { clearable: false, showPassword: true, type: 'password' },
    required: true
  }
];

/**
 * 单列表单模板配置
 */
export const formSingleConfig = {
  labelWidth: 80,
  footer: true,
  style: { padding: '20px 20px 4px 14px' },
  items: [
    ...baseFormItems,
    {
      label: '个人简介',
      prop: 'introduction',
      type: 'textarea'
    }
  ]
};

/**
 * 多列表单模板配置
 */
export const formMultipleConfig = {
  labelWidth: 80,
  grid: { span: 12 },
  rowProps: { gutter: 12 },
  footer: true,
  style: { padding: '20px 20px 4px 14px' },
  items: [
    ...baseFormItems,
    {
      label: '个人简介',
      prop: 'introduction',
      type: 'textarea',
      colProps: { span: 24 }
    }
  ]
};

/**
 * 分组表单模板配置
 */
export const formGroupConfig = {
  labelWidth: 94,
  footer: true,
  footerProps: { labelWidth: '0px' },
  footerStyle: { justifyContent: 'center' },
  style: {
    background: 'var(--el-bg-color-page)',
    padding: '16px 16px 1px 16px'
  },
  items: [
    {
      label: '寄件信息',
      prop: 'senderInfo',
      type: 'card',
      props: { bordered: false, style: { marginBottom: '16px' } },
      grid: { span: 12 },
      rowProps: { gutter: 20 },
      children: [
        {
          label: '寄件人姓名',
          prop: 'senderName',
          type: 'input',
          required: true
        },
        {
          label: '寄件人电话',
          prop: 'senderPhone',
          type: 'input',
          required: true
        },
        {
          label: '寄件地址',
          prop: 'senderAddress',
          type: 'textarea',
          required: true,
          colProps: { span: 24 }
        }
      ]
    },
    {
      label: '收件信息',
      prop: 'receiverInfo',
      type: 'card',
      props: { bordered: false, style: { marginBottom: '16px' } },
      grid: { span: 12 },
      rowProps: { gutter: 20 },
      children: [
        {
          label: '收件人姓名',
          prop: 'receiverName',
          type: 'input',
          required: true
        },
        {
          label: '收件人电话',
          prop: 'receiverPhone',
          type: 'input',
          required: true
        },
        {
          label: '收件地址',
          prop: 'receiverAddress',
          type: 'textarea',
          required: true,
          colProps: { span: 24 }
        }
      ]
    },
    {
      label: '可折叠卡片',
      prop: 'otherInfo',
      type: 'card',
      props: {
        bordered: false,
        collapsable: 'header',
        bodyStyle: { padding: 0 },
        headerStyle: { cursor: 'pointer', userSelect: 'none' },
        style: { marginBottom: '16px' }
      },
      children: [
        {
          label: '',
          prop: 'otherInfoWrap',
          type: 'div',
          props: { style: { padding: '20px' } },
          children: [
            {
              label: '快递服务',
              prop: 'service',
              type: 'checkCard',
              props: {
                style: { display: 'flex', alignItems: 'flex-start' },
                itemStyle: {
                  padding: '8px 22px',
                  margin: '0 12px 0 0',
                  lineHeight: 'normal'
                }
              },
              options: [
                { value: '顺丰快递' },
                { value: '中通快递' },
                { value: '韵达快递' }
              ],
              required: true,
              itemProps: { labelWidth: '80px' }
            },
            {
              label: '隐私保护',
              prop: 'privacy',
              type: 'checkbox',
              options: [
                { label: '姓名脱敏', value: 1 },
                { label: '使用虚拟号码', value: 2 },
                { label: '隐藏地址', value: 3 }
              ],
              itemProps: { labelWidth: '80px' }
            }
          ]
        }
      ]
    },
    {
      label: '',
      prop: 'introductionAlert',
      type: 'div',
      props: {
        is: 'EleAlert',
        showIcon: true,
        description: false,
        title:
          'ProFrom 和所有容器组件都可直接通过属性设置子级显示列数，每个子级都可通过属性设置自己在父级中的所占列数，设置多列后会自动包裹 ElRow 和 ElCol ，当然也提供了 row 和 col 对应的 type 类型组件直接使用。',
        style: { marginBottom: '16px' }
      }
    },
    {
      label: '',
      prop: 'row01',
      type: 'row',
      props: { gutter: 16 },
      children: [
        {
          label: '',
          prop: 'row01_col01',
          type: 'col',
          props: { span: 12 },
          children: [
            {
              label: '卡片一',
              prop: 'row01_col01_card',
              type: 'card',
              props: {
                bordered: false,
                style: { marginBottom: '16px' },
                bodyStyle: { paddingBottom: 0 }
              },
              children: [
                {
                  label: '',
                  prop: 'row01_col01_row',
                  type: 'row',
                  props: { gutter: 20 },
                  children: [
                    {
                      label: '',
                      prop: 'row01_col01_col01',
                      type: 'col',
                      props: { span: 12 },
                      children: [
                        {
                          label: '内容内容内容',
                          prop: 'row01_col01_text01',
                          type: 'div',
                          props: {
                            style: {
                              background: 'rgba(125, 226, 252, 0.4)',
                              lineHeight: '60px',
                              marginBottom: '20px'
                            }
                          }
                        }
                      ]
                    },
                    {
                      label: '',
                      prop: 'row01_col01_col02',
                      type: 'col',
                      props: { span: 12 },
                      children: [
                        {
                          label: '内容内容内容',
                          prop: 'row01_col01_text02',
                          type: 'div',
                          props: {
                            style: {
                              background: 'rgba(125, 226, 252, 0.4)',
                              lineHeight: '60px',
                              marginBottom: '20px'
                            }
                          }
                        }
                      ]
                    },
                    {
                      label: '',
                      prop: 'row01_col01_col03',
                      type: 'col',
                      props: { span: 24 },
                      children: [
                        {
                          label: '内容内容内容',
                          prop: 'row01_col01_text03',
                          type: 'div',
                          props: {
                            style: {
                              background: 'rgba(125, 226, 252, 0.4)',
                              lineHeight: '60px',
                              marginBottom: '20px'
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: '',
          prop: 'row01_col02',
          type: 'col',
          props: { span: 12 },
          children: [
            {
              label: '卡片二',
              prop: 'row01_col02_card',
              type: 'card',
              props: {
                bordered: false,
                style: { marginBottom: '16px' },
                bodyStyle: { paddingBottom: 0 }
              },
              children: [
                {
                  label: '',
                  prop: 'row01_col02_row',
                  type: 'row',
                  props: { gutter: 20 },
                  children: [
                    {
                      label: '',
                      prop: 'row01_col02_col01',
                      type: 'col',
                      props: { md: 12, sm: 24, xs: 24 },
                      children: [
                        {
                          label: '内容内容内容',
                          prop: 'row01_col02_text01',
                          type: 'div',
                          props: {
                            style: {
                              background: 'rgba(125, 226, 252, 0.4)',
                              lineHeight: '60px',
                              marginBottom: '20px'
                            }
                          }
                        }
                      ]
                    },
                    {
                      label: '',
                      prop: 'row01_col02_col02',
                      type: 'col',
                      props: { md: 12, sm: 24, xs: 24 },
                      children: [
                        {
                          label: '内容内容内容',
                          prop: 'row01_col02_text02',
                          type: 'div',
                          props: {
                            style: {
                              background: 'rgba(125, 226, 252, 0.4)',
                              lineHeight: '60px',
                              marginBottom: '20px'
                            }
                          }
                        }
                      ]
                    },
                    {
                      label: '',
                      prop: 'row01_col02_col03',
                      type: 'col',
                      props: { span: 24 },
                      children: [
                        {
                          label: '内容内容内容',
                          prop: 'row01_col02_text03',
                          type: 'div',
                          props: {
                            style: {
                              background: 'rgba(125, 226, 252, 0.4)',
                              lineHeight: '60px',
                              marginBottom: '20px'
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: '',
          prop: 'row01_col03',
          type: 'col',
          props: { span: 24 },
          children: [
            {
              label: '卡片三',
              prop: 'row01_col03_card',
              type: 'card',
              props: {
                bordered: false,
                style: { marginBottom: '16px' },
                bodyStyle: { paddingBottom: 0 }
              },
              grid: { span: 12 },
              rowProps: { gutter: 20 },
              children: [
                {
                  label: '内容内容内容',
                  prop: 'row01_col03_text01',
                  type: 'div',
                  props: {
                    style: {
                      background: 'rgba(125, 226, 252, 0.4)',
                      lineHeight: '60px',
                      marginBottom: '20px'
                    }
                  }
                },
                {
                  label: '内容内容内容',
                  prop: 'row01_col03_text02',
                  type: 'div',
                  props: {
                    style: {
                      background: 'rgba(125, 226, 252, 0.4)',
                      lineHeight: '60px',
                      marginBottom: '20px'
                    }
                  }
                },
                {
                  label: '内容内容内容',
                  prop: 'row01_col03_text03',
                  type: 'div',
                  props: {
                    style: {
                      background: 'rgba(125, 226, 252, 0.4)',
                      lineHeight: '60px',
                      marginBottom: '20px'
                    }
                  },
                  colProps: { span: 24 }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

/**
 * 问卷表单模板配置
 */
export const formQuestionConfig = {
  labelPosition: 'top',
  labelWidth: 80,
  footer: true,
  footerProps: { labelWidth: '0px' },
  footerStyle: { justifyContent: 'center' },
  style: { padding: '28px 26px 16px 26px' },
  items: [
    {
      label: '部门团建活动方案投票',
      prop: 'title',
      type: 'label',
      props: {
        size: 'xl',
        strong: true,
        style: { textAlign: 'center', marginBottom: '18px' }
      }
    },
    {
      label:
        '为了感谢各位员工最近对公司发展做出的辛苦付出，也为了增强部门同事之间的凝聚力，开阔员工的视野，让大家在繁忙的工作中放松心情，以更饱满的精神状态迎接新一个月的工作，本部门计划于 06 月 01 日组织团建活动，现在开始征集部门团建活动方案的投票啦~ 请各位同事积极参与，认真填写。',
      prop: 'description',
      type: 'label',
      props: {
        style: { textIndent: '2em', lineHeight: '28px', marginBottom: '28px' }
      }
    },
    {
      label: '（01）请选择你最喜欢的活动方案(可多选)：',
      prop: 'plan',
      itemProps: {
        rules: [{ required: true, message: '请选择你最喜欢的活动方案' }],
        style: { marginBottom: '36px' }
      },
      type: 'checkbox',
      props: {
        style: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          paddingLeft: '22px'
        }
      },
      options: [
        { label: '方案一 龙湾度假村一日游', value: 1 },
        { label: '方案二 欢乐谷一日游', value: 2 },
        { label: '方案三 世界城吃饭 + 密室逃脱', value: 3 },
        { label: '方案四 大悦城自助餐 + KTV', value: 4 }
      ]
    },
    {
      label: '（02）您的姓名：',
      prop: 'name',
      itemProps: {
        rules: [{ required: true, message: '请输入您的姓名' }],
        style: { marginBottom: '36px' }
      },
      type: 'input',
      props: {
        placeholder: '请输入您的姓名',
        style: { flex: 1, margin: '4px 0 8px 22px', maxWidth: '320px' }
      }
    },
    {
      label: '（03）是否携带家属(选是会继续选择携带数量)：',
      prop: 'family',
      itemProps: {
        rules: [{ required: true, message: '请选择是否携带家属' }],
        style: { marginBottom: '36px' }
      },
      type: 'radio',
      props: {
        style: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          paddingLeft: '22px'
        }
      },
      options: [
        { label: '是', value: 1 },
        { label: '否', value: 0 }
      ]
    },
    {
      label: '（04）携带家属数量：',
      prop: 'attendance',
      itemProps: {
        rules: [{ required: true, message: '请选择携带家属数量' }],
        style: { marginBottom: '36px' }
      },
      type: 'radio',
      props: {
        style: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          paddingLeft: '22px'
        }
      },
      options: [
        { label: '携带 1 人', value: 1 },
        { label: '携带 2 人', value: 2 },
        { label: '携带 3 人', value: 3 }
      ],
      vIf: 'form.family == 1'
    }
  ]
};

/**
 * 简历表单模板配置
 */
export const formResumeConfig = {
  labelWidth: 80,
  footer: true,
  footerProps: { labelWidth: '0px' },
  footerStyle: { justifyContent: 'center' },
  style: { padding: '20px 20px 4px 20px' },
  items: [
    {
      label: '',
      prop: 'resumeTitle',
      type: 'div',
      props: {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '4px solid var(--el-color-primary)',
          margin: '6px 0 38px 0'
        }
      },
      children: [
        {
          label: '个人简历',
          prop: 'resumeText',
          type: 'label',
          props: {
            size: 'xl',
            strong: true,
            style: {
              color: '#fff',
              background: 'var(--el-color-primary)',
              padding: '6px 28px 2px 28px',
              letterSpacing: '6px',
              borderRadius: '22px 22px 0px 0px'
            }
          }
        }
      ]
    },
    {
      label: '',
      prop: 'profile',
      type: 'div',
      props: {
        style: { display: 'flex', alignItems: 'flex-start', overflowX: 'auto' }
      },
      children: [
        {
          label: '',
          prop: 'baseProfile',
          type: 'div',
          props: {
            style: { flex: 1, paddingRight: '20px', minWidth: '360px' }
          },
          grid: { span: 12 },
          rowProps: { gutter: 16 },
          children: [
            { label: '姓名', prop: 'name', type: 'input', required: true },
            {
              label: '性别',
              prop: 'sex',
              type: 'radio',
              options: [
                { label: '男', value: '男' },
                { label: '女', value: '女' }
              ]
            },
            { label: '年龄', prop: 'age', type: 'inputNumber' },
            { label: '联系方式', prop: 'phone', type: 'input' },
            { label: '学历', prop: 'education', type: 'input' },
            { label: '工作经验', prop: 'experience', type: 'input' },
            { label: '意向岗位', prop: 'job', type: 'input' },
            { label: '期望薪资', prop: 'salary', type: 'input' }
          ]
        },
        {
          label: '头像',
          prop: 'avatar',
          type: 'imageUpload',
          props: {
            limit: 1,
            itemStyle: { margin: 0, width: '120px', height: '148px' },
            buttonStyle: { margin: 0, width: '120px', height: '148px' }
          },
          itemProps: {
            labelWidth: '86px',
            style: { flexShrink: 0, flexDirection: 'column' }
          }
        }
      ]
    },
    {
      label: '',
      prop: 'skillTitle',
      type: 'div',
      props: {
        style: {
          display: 'flex',
          alignItems: 'center',
          borderBottom: '2px solid var(--el-color-primary)',
          margin: '22px 0 12px 0'
        }
      },
      children: [
        {
          label: '专业技能',
          prop: 'skillText',
          type: 'label',
          props: {
            size: 'md',
            strong: true,
            style: {
              color: '#fff',
              background: 'var(--el-color-primary)',
              padding: '4px 20px 2px 20px',
              letterSpacing: '6px',
              borderRadius: '12px 12px 0px 0px'
            }
          }
        }
      ]
    },
    {
      label: '',
      prop: 'skill',
      type: 'textarea',
      props: {
        rows: 12,
        placeholder:
          '1、熟练掌握 XXX 语言\n2、熟练使用 XXX 框架\n3、取得 XXX 证书'
      },
      itemProps: { labelWidth: '0px' }
    },
    {
      label: '',
      prop: 'careerTitle',
      type: 'div',
      props: {
        style: {
          display: 'flex',
          alignItems: 'center',
          borderBottom: '2px solid var(--el-color-primary)',
          margin: '38px 0 20px 0'
        }
      },
      children: [
        {
          label: '工作经历',
          prop: 'careerText',
          type: 'label',
          props: {
            size: 'md',
            strong: true,
            style: {
              color: '#fff',
              background: 'var(--el-color-primary)',
              padding: '4px 20px 2px 20px',
              letterSpacing: '6px',
              borderRadius: '12px 12px 0px 0px'
            }
          }
        }
      ]
    },
    {
      label: '',
      prop: 'career',
      type: 'div',
      children: [
        {
          label: '',
          prop: 'careerTime',
          type: 'daterange',
          itemProps: { labelWidth: '0px' }
        },
        {
          label: '',
          prop: 'careerCompany',
          type: 'input',
          props: { placeholder: '公司名称' },
          itemProps: { labelWidth: '0px' }
        },
        {
          label: '',
          prop: 'careerPost',
          type: 'input',
          props: { placeholder: '岗位名称' },
          itemProps: { labelWidth: '0px' }
        },
        {
          label: '',
          prop: 'careerJobDescription',
          type: 'textarea',
          props: {
            placeholder:
              '工作内容：\n负责了什么项目，运用了什么技术，解决了什么难题，取得了什么成果'
          },
          itemProps: { labelWidth: '0px' },
          colProps: { span: 24 }
        }
      ],
      grid: { span: 8 },
      rowProps: { gutter: 16 }
    },
    {
      label: '',
      prop: 'career02',
      type: 'div',
      props: {
        style: {
          borderTop: '1px dashed var(--el-border-color)',
          paddingTop: '24px',
          marginTop: '12px',
          position: 'relative'
        }
      },
      children: [
        {
          label: '',
          prop: 'career02Wrap',
          type: 'div',
          grid: { span: 8 },
          rowProps: { gutter: 16 },
          children: [
            {
              label: '',
              prop: 'career02Time',
              type: 'daterange',
              itemProps: { labelWidth: '0px' }
            },
            {
              label: '',
              prop: 'career02Company',
              type: 'input',
              props: { placeholder: '公司名称' },
              itemProps: { labelWidth: '0px' }
            },
            {
              label: '',
              prop: 'career02Post',
              type: 'input',
              props: { placeholder: '岗位名称' },
              itemProps: { labelWidth: '0px' }
            },
            {
              label: '',
              prop: 'career02JobDescription',
              type: 'textarea',
              props: {
                placeholder:
                  '工作内容：\n负责了什么项目，运用了什么技术，解决了什么难题，取得了什么成果'
              },
              itemProps: { labelWidth: '0px' },
              colProps: { span: 24 }
            }
          ]
        },
        {
          label: '',
          prop: 'career02BtnDel',
          type: 'label',
          props: {
            title: '删除工作经历',
            style: {
              background: '#ff4d4f',
              color: '#fff',
              width: '20px',
              height: '20px',
              borderRadius: '0px 2px 0px 20px',
              padding: '2px 0 0 5px',
              fontSize: '13px',
              lineHeight: 1,
              boxSizing: 'border-box',
              position: 'absolute',
              top: 0,
              right: 0,
              cursor: 'pointer'
            },
            icon: '__PRO_FORM_ICON__CloseOutlined',
            onClick: '/*__PRO_FORM__*/() => { form.showCareer02 = void 0; }'
          }
        }
      ],
      vIf: '!!form.showCareer02'
    },
    {
      label: '',
      prop: 'career03',
      type: 'div',
      props: {
        style: {
          borderTop: '1px dashed var(--el-border-color)',
          paddingTop: '24px',
          marginTop: '12px',
          position: 'relative'
        }
      },
      vIf: '!!form.showCareer03',
      children: [
        {
          label: '',
          prop: 'career03Wrap',
          type: 'div',
          grid: { span: 8 },
          rowProps: { gutter: 16 },
          children: [
            {
              label: '',
              prop: 'career03Time',
              type: 'daterange',
              itemProps: { labelWidth: '0px' }
            },
            {
              label: '',
              prop: 'career03Company',
              type: 'input',
              props: { placeholder: '公司名称' },
              itemProps: { labelWidth: '0px' }
            },
            {
              label: '',
              prop: 'career03Post',
              type: 'input',
              props: { placeholder: '岗位名称' },
              itemProps: { labelWidth: '0px' }
            },
            {
              label: '',
              prop: 'career03JobDescription',
              type: 'textarea',
              props: {
                placeholder:
                  '工作内容：\n负责了什么项目，运用了什么技术，解决了什么难题，取得了什么成果'
              },
              itemProps: { labelWidth: '0px' },
              colProps: { span: 24 }
            }
          ]
        },
        {
          label: '',
          prop: 'career03BtnDel',
          type: 'label',
          props: {
            title: '删除工作经历',
            style: {
              background: '#ff4d4f',
              color: '#fff',
              width: '20px',
              height: '20px',
              borderRadius: '0px 2px 0px 20px',
              padding: '2px 0 0 5px',
              fontSize: '13px',
              lineHeight: 1,
              boxSizing: 'border-box',
              position: 'absolute',
              top: 0,
              right: 0,
              cursor: 'pointer'
            },
            icon: '__PRO_FORM_ICON__CloseOutlined',
            onClick: '/*__PRO_FORM__*/() => { form.showCareer03 = void 0; }'
          }
        }
      ]
    },
    {
      label: '',
      prop: 'showCareer02',
      type: 'checkCard',
      props: {
        style: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '12px'
        },
        itemStyle: {
          padding: '6px 0px',
          margin: '0 0 0 0',
          lineHeight: 'normal',
          textAlign: 'center',
          borderStyle: 'dashed',
          '--ele-check-card-border-color': 'var(--el-border-color)'
        }
      },
      options: [{ value: '+ 添加工作经历' }],
      itemProps: { labelWidth: '0px' },
      vIf: '!form.showCareer02'
    },
    {
      label: '',
      prop: 'showCareer03',
      type: 'checkCard',
      props: {
        style: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '12px'
        },
        itemStyle: {
          padding: '6px 0px',
          margin: '0 0 0 0',
          lineHeight: 'normal',
          textAlign: 'center',
          borderStyle: 'dashed',
          '--ele-check-card-border-color': 'var(--el-border-color)'
        }
      },
      options: [{ value: '+ 添加工作经历' }],
      itemProps: { labelWidth: '0px' },
      vIf: '!!form.showCareer02&&!form.showCareer03'
    },
    {
      label: '',
      prop: 'projectTitle',
      type: 'div',
      props: {
        style: {
          display: 'flex',
          alignItems: 'center',
          borderBottom: '2px solid var(--el-color-primary)',
          margin: '22px 0 20px 0'
        }
      },
      children: [
        {
          label: '项目经验',
          prop: 'projectText',
          type: 'label',
          props: {
            size: 'md',
            strong: true,
            style: {
              color: '#fff',
              background: 'var(--el-color-primary)',
              padding: '4px 20px 2px 20px',
              letterSpacing: '6px',
              borderRadius: '12px 12px 0px 0px'
            }
          }
        }
      ]
    },
    {
      label: '',
      prop: 'project',
      type: 'div',
      children: [
        {
          label: '',
          prop: 'projectTime',
          type: 'daterange',
          itemProps: { labelWidth: '0px' }
        },
        {
          label: '',
          prop: 'projectName',
          type: 'input',
          props: { placeholder: '项目名称' },
          itemProps: { labelWidth: '0px' }
        },
        {
          label: '',
          prop: 'projectRole',
          type: 'input',
          props: { placeholder: 'XX 角色' },
          itemProps: { labelWidth: '0px' }
        },
        {
          label: '',
          prop: 'projectDescription',
          type: 'textarea',
          props: {
            rows: 8,
            placeholder:
              '技术栈：框架、数据库、中间件、工具\n团队规模：前端 XX 人、后端 XX 人\n项目简介：\n用于什么行业，包含什么功能，解决什么需求\n工作内容：\n主要负责哪些模块，遇到了什么难题，是如何解决的，从中汲取了什么经验'
          },
          itemProps: { labelWidth: '0px' },
          colProps: { span: 24 }
        }
      ],
      grid: { span: 8 },
      rowProps: { gutter: 16 },
      props: { style: { marginBottom: '28px' } }
    }
  ]
};

/**
 * 只读简历表单模板配置
 */
export const formResumeViewConfig = {
  labelWidth: 94,
  style: { padding: '20px 20px 4px 20px' },
  items: [
    {
      label: '',
      prop: 'resumeTitle',
      type: 'div',
      props: {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '4px solid var(--el-color-primary)',
          margin: '6px 0 38px 0'
        }
      },
      children: [
        {
          label: '个人简历',
          prop: 'resumeText',
          type: 'label',
          props: {
            size: 'xl',
            strong: true,
            style: {
              color: '#fff',
              background: 'var(--el-color-primary)',
              padding: '6px 28px 2px 28px',
              letterSpacing: '6px',
              borderRadius: '22px 22px 0px 0px'
            }
          }
        }
      ]
    },
    {
      label: '',
      prop: 'profile',
      type: 'div',
      props: {
        style: { display: 'flex', alignItems: 'flex-start', overflowX: 'auto' }
      },
      children: [
        {
          label: '',
          prop: 'baseProfile',
          type: 'div',
          props: {
            style: { flex: 1, paddingRight: '20px', minWidth: '360px' }
          },
          grid: { span: 12 },
          rowProps: { gutter: 16 },
          children: [
            {
              label: '姓名：',
              prop: 'name',
              type: 'text',
              initValue: 'XXX',
              itemProps: { style: { marginBottom: '0px' } }
            },
            {
              label: '性别：',
              prop: 'sex',
              type: 'text',
              initValue: '男',
              itemProps: { style: { marginBottom: '0px' } }
            },
            {
              label: '年龄：',
              prop: 'age',
              type: 'text',
              initValue: '25',
              itemProps: { style: { marginBottom: '0px' } }
            },
            {
              label: '联系方式：',
              prop: 'phone',
              type: 'text',
              initValue: '12345678901',
              itemProps: { style: { marginBottom: '0px' } }
            },
            {
              label: '学历：',
              prop: 'education',
              type: 'text',
              initValue: '本科',
              itemProps: { style: { marginBottom: '0px' } }
            },
            {
              label: '工作经验：',
              prop: 'experience',
              type: 'text',
              initValue: '三年',
              itemProps: { style: { marginBottom: '0px' } }
            },
            {
              label: '意向岗位：',
              prop: 'job',
              type: 'text',
              initValue: 'Java 开发工程师',
              itemProps: { style: { marginBottom: '0px' } }
            },
            {
              label: '期望薪资：',
              prop: 'salary',
              type: 'text',
              initValue: '10K ~ 12K',
              itemProps: { style: { marginBottom: '0px' } }
            }
          ]
        },
        {
          label: '',
          prop: 'avatar',
          type: 'imageUpload',
          initValue:
            'https://cdn.eleadmin.com/20200609/c184eef391ae48dba87e3057e70238fb.jpg',
          props: {
            limit: 1,
            itemStyle: {
              margin: 0,
              width: '112px',
              height: '128px',
              border: 'none',
              cursor: 'zoom-in'
            },
            imageProps: { fit: 'cover' },
            readonly: true
          },
          itemProps: {
            labelWidth: '0px',
            style: {
              flexShrink: 0,
              flexDirection: 'column',
              margin: '0 8px 0 0'
            }
          }
        }
      ]
    },
    {
      label: '',
      prop: 'skillTitle',
      type: 'div',
      props: {
        style: {
          display: 'flex',
          alignItems: 'center',
          borderBottom: '2px solid var(--el-color-primary)',
          margin: '38px 0 16px 0'
        }
      },
      children: [
        {
          label: '专业技能',
          prop: 'skillText',
          type: 'label',
          props: {
            size: 'md',
            strong: true,
            style: {
              color: '#fff',
              background: 'var(--el-color-primary)',
              padding: '4px 20px 2px 20px',
              letterSpacing: '6px',
              borderRadius: '12px 12px 0px 0px'
            }
          }
        }
      ]
    },
    {
      label: '',
      prop: 'skill',
      type: 'text',
      itemProps: { labelWidth: '0px' },
      initValue:
        '1、熟练掌握 Java 基础知识，精通多线程并发，精通 JVM 原理；\n2、熟练使用 MySQL、Redis 及常见的优化手段；\n3、熟练使用 SpringBoot、MyBtais 等主流开发框架；\n4、熟练掌握 RabbitMQ、Kafka、Zookeeper 的使用和原理；\n5、熟练掌握分布式和微服务的系统设计与应用；\n6、熟练掌握常见的 CAP、Paxos 算法；\n7、熟练使用 Git、Maven、Docker 等工具；',
      props: { style: { flex: 1, whiteSpace: 'pre-wrap', padding: '0 10px' } }
    },
    {
      label: '',
      prop: 'careerTitle',
      type: 'div',
      props: {
        style: {
          display: 'flex',
          alignItems: 'center',
          borderBottom: '2px solid var(--el-color-primary)',
          margin: '38px 0 20px 0'
        }
      },
      children: [
        {
          label: '工作经历',
          prop: 'careerText',
          type: 'label',
          props: {
            size: 'md',
            strong: true,
            style: {
              color: '#fff',
              background: 'var(--el-color-primary)',
              padding: '4px 20px 2px 20px',
              letterSpacing: '6px',
              borderRadius: '12px 12px 0px 0px'
            }
          }
        }
      ]
    },
    {
      label: '',
      prop: 'career',
      type: 'div',
      props: { style: { padding: '0 10px' } },
      children: [
        {
          label: '',
          prop: 'careerTime',
          type: 'text',
          itemProps: { labelWidth: '0px', style: { marginBottom: '0px' } },
          initValue: '2024/02/05 ~ 至今'
        },
        {
          label: '',
          prop: 'careerCompany',
          type: 'text',
          itemProps: { labelWidth: '0px', style: { marginBottom: '0px' } },
          initValue: 'XXXXX 科技有限公司',
          props: { style: { flex: 1, textAlign: 'center' } }
        },
        {
          label: '',
          prop: 'careerPost',
          type: 'text',
          itemProps: { labelWidth: '0px', style: { marginBottom: '0px' } },
          initValue: 'Java 开发工程师',
          props: { style: { flex: 1, textAlign: 'right' } }
        },
        {
          label: '',
          prop: 'careerJobDescription',
          type: 'text',
          itemProps: { labelWidth: '0px', style: { marginTop: '6px' } },
          colProps: { span: 24 },
          initValue:
            '工作内容：\n负责 XXX 业务相关服务的开发和重构以及维护工作，负责线上产品端服务的同步，负责 SSO 单点登录系统后端的架构与开发。',
          props: { style: { flex: 1, whiteSpace: 'pre-wrap' } }
        }
      ],
      grid: { span: 8 },
      rowProps: { gutter: 16 }
    },
    {
      label: '',
      prop: 'career02',
      type: 'div',
      props: {
        style: {
          borderTop: '1px dashed var(--el-border-color)',
          padding: '24px 10px 0 10px',
          marginTop: '6px'
        }
      },
      children: [
        {
          label: '',
          prop: 'career02Time',
          type: 'text',
          itemProps: { labelWidth: '0px', style: { marginBottom: '0px' } },
          initValue: '2023/01/25 ~ 2024/01/02'
        },
        {
          label: '',
          prop: 'career02Company',
          type: 'text',
          itemProps: { labelWidth: '0px', style: { marginBottom: '0px' } },
          initValue: 'XXX 集团股份有限公司',
          props: { style: { flex: 1, textAlign: 'center' } }
        },
        {
          label: '',
          prop: 'career02Post',
          type: 'text',
          itemProps: { labelWidth: '0px', style: { marginBottom: '0px' } },
          initValue: 'Java 开发工程师',
          props: { style: { flex: 1, textAlign: 'right' } }
        },
        {
          label: '',
          prop: 'career02JobDescription',
          type: 'text',
          itemProps: { labelWidth: '0px', style: { marginTop: '6px' } },
          colProps: { span: 24 },
          initValue:
            '工作内容：\n负责了什么项目，运用了什么技术，解决了什么难题，取得了什么成果',
          props: { style: { flex: 1, whiteSpace: 'pre-wrap' } }
        }
      ],
      grid: { span: 8 },
      rowProps: { gutter: 16 }
    },
    {
      label: '',
      prop: 'projectTitle',
      type: 'div',
      props: {
        style: {
          display: 'flex',
          alignItems: 'center',
          borderBottom: '2px solid var(--el-color-primary)',
          margin: '22px 0 20px 0'
        }
      },
      children: [
        {
          label: '项目经验',
          prop: 'projectText',
          type: 'label',
          props: {
            size: 'md',
            strong: true,
            style: {
              color: '#fff',
              background: 'var(--el-color-primary)',
              padding: '4px 20px 2px 20px',
              letterSpacing: '6px',
              borderRadius: '12px 12px 0px 0px'
            }
          }
        }
      ]
    },
    {
      label: '',
      prop: 'project',
      type: 'div',
      children: [
        {
          label: '',
          prop: 'projectTime',
          type: 'text',
          itemProps: { labelWidth: '0px', style: { marginBottom: '0px' } },
          initValue: '2024/03/22 ~ 2024/06/05'
        },
        {
          label: '',
          prop: 'projectName',
          type: 'text',
          itemProps: { labelWidth: '0px', style: { marginBottom: '0px' } },
          initValue: 'XXX 电商购物平台',
          props: { style: { flex: 1, textAlign: 'center' } }
        },
        {
          label: '',
          prop: 'projectRole',
          type: 'text',
          itemProps: { labelWidth: '0px', style: { marginBottom: '0px' } },
          initValue: '后端开发',
          props: { style: { flex: 1, textAlign: 'right' } }
        },
        {
          label: '',
          prop: 'projectDescription',
          type: 'text',
          itemProps: { labelWidth: '0px', style: { marginTop: '12px' } },
          colProps: { span: 24 },
          initValue:
            '技术栈：SSM、MySQL、Redis、Nginx、MyCat\n团队规模：20人\n项目简介：\n    是一个完整的电商购物平台，主要功能是购物，包含登录、注册、退出登录、购物、支付、退货、换货等模块。\n工作内容：\n    主要负责购物模块，对老旧代码进行重构，解决了访问速度慢的问题，通过 Redis 缓存，解决了高并发问题，将网页的访问速度提高 50%，采用 RabbitMQ 解决不同系统之间的通信问题，并解决了应用 HttpClient 带来的系统耦合问题，使用 Nginx 做反向代理，搭建 Tomcat 服务器集群，实现了系统的高可用、易扩展、高性能。',
          props: { style: { flex: 1, whiteSpace: 'pre-wrap' } }
        }
      ],
      grid: { span: 8 },
      rowProps: { gutter: 16 },
      props: { style: { marginBottom: '28px', padding: '0 10px' } }
    }
  ]
};

/**
 * 表格表单模板配置
 */
export const formTableConfig = {
  labelWidth: 80,
  footer: true,
  footerProps: { labelWidth: '0px' },
  footerStyle: { justifyContent: 'center' },
  style: { padding: '20px 20px 4px 20px' },
  items: [
    {
      label: '员工离职申请表',
      prop: 'title',
      type: 'label',
      props: {
        size: 'xl',
        strong: true,
        style: { textAlign: 'center', marginBottom: '12px' }
      }
    },
    {
      label: '',
      prop: 'table',
      type: 'table',
      props: {
        border: true,
        hasHeader: false,
        style: {
          '--ele-table-border-color': 'var(--el-text-color-secondary)',
          tableLayout: 'fixed',
          marginBottom: '28px'
        }
      },
      children: [
        {
          label: '',
          prop: 'tr01',
          type: 'div',
          props: { is: 'tr' },
          children: [
            {
              label: '',
              prop: 'td01_01',
              type: 'div',
              props: {
                is: 'td',
                style: {
                  width: '116px',
                  whiteSpace: 'pre-wrap',
                  textAlign: 'right'
                }
              },
              children: [
                {
                  label: '*',
                  prop: 'td01_01_text_before',
                  type: 'label',
                  props: {
                    tag: 'span',
                    type: 'danger',
                    style: { marginRight: '4px' }
                  }
                },
                {
                  label: '姓        名',
                  prop: 'td01_01_text',
                  type: 'label',
                  props: { tag: 'span' }
                }
              ]
            },
            {
              label: '',
              prop: 'td01_02',
              type: 'div',
              props: { is: 'td', style: { minWidth: '140px' } },
              children: [
                {
                  label: '',
                  prop: 'name',
                  type: 'input',
                  itemProps: {
                    rules: [{ required: true, message: '请输入姓名' }],
                    labelWidth: '0px',
                    style: { marginBottom: '0px' },
                    class: 'pro-form-error-popper'
                  },
                  props: { placeholder: '' }
                }
              ]
            },
            {
              label: '性        别',
              prop: 'td01_03',
              type: 'div',
              props: {
                is: 'td',
                style: {
                  width: '116px',
                  whiteSpace: 'pre-wrap',
                  textAlign: 'right'
                }
              }
            },
            {
              label: '',
              prop: 'td01_04',
              type: 'div',
              props: { is: 'td', style: { minWidth: '140px' } },
              children: [
                {
                  label: '',
                  prop: 'sex',
                  type: 'input',
                  itemProps: {
                    labelWidth: '0px',
                    style: { marginBottom: '0px' }
                  },
                  props: { placeholder: '' }
                }
              ]
            }
          ]
        },
        {
          label: '',
          prop: 'tr02',
          type: 'div',
          props: { is: 'tr' },
          children: [
            {
              label: '',
              prop: 'td02_01',
              type: 'div',
              props: {
                is: 'td',
                style: { whiteSpace: 'pre-wrap', textAlign: 'right' }
              },
              children: [
                {
                  label: '*',
                  prop: 'td02_01_text_before',
                  type: 'label',
                  props: {
                    tag: 'span',
                    type: 'danger',
                    style: { marginRight: '4px' }
                  }
                },
                {
                  label: '工        号',
                  prop: 'td02_01_text',
                  type: 'label',
                  props: { tag: 'span' }
                }
              ]
            },
            {
              label: '',
              prop: 'td02_02',
              type: 'div',
              props: { is: 'td' },
              children: [
                {
                  label: '',
                  prop: 'jobNumber',
                  type: 'input',
                  itemProps: {
                    rules: [{ required: true, message: '请输入工号' }],
                    labelWidth: '0px',
                    style: { marginBottom: '0px' },
                    class: 'pro-form-error-popper'
                  },
                  props: { placeholder: '' }
                }
              ]
            },
            {
              label: '',
              prop: 'td02_03',
              type: 'div',
              props: {
                is: 'td',
                style: { whiteSpace: 'pre-wrap', textAlign: 'right' }
              },
              children: [
                {
                  label: '*',
                  prop: 'td02_03_text_before',
                  type: 'label',
                  props: {
                    tag: 'span',
                    type: 'danger',
                    style: { marginRight: '4px' }
                  }
                },
                {
                  label: '入职日期',
                  prop: 'td02_03_text',
                  type: 'label',
                  props: { tag: 'span' }
                }
              ]
            },
            {
              label: '',
              prop: 'td02_04',
              type: 'div',
              props: { is: 'td' },
              children: [
                {
                  label: '',
                  prop: 'commencementDate',
                  type: 'date',
                  itemProps: {
                    rules: [{ required: true, message: '请选择入职日期' }],
                    labelWidth: '0px',
                    style: { marginBottom: '0px' },
                    class: 'pro-form-error-popper'
                  },
                  props: { placeholder: '' }
                }
              ]
            }
          ]
        },
        {
          label: '',
          prop: 'tr03',
          type: 'div',
          props: { is: 'tr' },
          children: [
            {
              label: '所在部门',
              prop: 'td03_01',
              type: 'div',
              props: {
                is: 'td',
                style: { whiteSpace: 'pre-wrap', textAlign: 'right' }
              }
            },
            {
              label: '',
              prop: 'td03_02',
              type: 'div',
              props: { is: 'td' },
              children: [
                {
                  label: '',
                  prop: 'department',
                  type: 'input',
                  itemProps: {
                    labelWidth: '0px',
                    style: { marginBottom: '0px' }
                  },
                  props: { placeholder: '' }
                }
              ]
            },
            {
              label: '岗        位',
              prop: 'td03_03',
              type: 'div',
              props: {
                is: 'td',
                style: { whiteSpace: 'pre-wrap', textAlign: 'right' }
              }
            },
            {
              label: '',
              prop: 'td03_04',
              type: 'div',
              props: { is: 'td' },
              children: [
                {
                  label: '',
                  prop: 'post',
                  type: 'input',
                  itemProps: {
                    labelWidth: '0px',
                    style: { marginBottom: '0px' }
                  },
                  props: { placeholder: '' }
                }
              ]
            }
          ]
        },
        {
          label: '',
          prop: 'tr04',
          type: 'div',
          props: { is: 'tr' },
          children: [
            {
              label: '',
              prop: 'td04_01',
              type: 'div',
              props: {
                is: 'td',
                style: { whiteSpace: 'pre-wrap', textAlign: 'right' }
              },
              children: [
                {
                  label: '*',
                  prop: 'td04_01_text_before',
                  type: 'label',
                  props: {
                    tag: 'span',
                    type: 'danger',
                    style: { marginRight: '4px' }
                  }
                },
                {
                  label: '离职原因',
                  prop: 'td04_01_text',
                  type: 'label',
                  props: { tag: 'span' }
                }
              ]
            },
            {
              label: '',
              prop: 'td04_02',
              type: 'div',
              props: { is: 'td', colspan: '3' },
              children: [
                {
                  label: '',
                  prop: 'reason',
                  type: 'textarea',
                  props: { rows: 12, placeholder: '' },
                  itemProps: {
                    rules: [{ required: true, message: '请输入离职原因' }],
                    labelWidth: '0px',
                    style: { marginBottom: '0px' },
                    class: 'pro-form-error-popper'
                  }
                },
                {
                  label: '申请人签字：_____________    日期：_____________',
                  prop: 'td04_02_text',
                  type: 'label',
                  props: {
                    style: {
                      textAlign: 'right',
                      whiteSpace: 'pre-wrap',
                      margin: '16px 0 10px 0'
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          label: '',
          prop: 'tr05',
          type: 'div',
          props: { is: 'tr' },
          children: [
            {
              label: '',
              prop: 'td05-01',
              type: 'div',
              props: { is: 'td', colspan: '4' },
              children: [
                {
                  label: '部门意见：',
                  prop: 'td05_01_title',
                  type: 'label',
                  props: { style: { marginBottom: '12px' } }
                },
                {
                  label: '',
                  prop: 'opinion',
                  type: 'textarea',
                  props: { placeholder: '' },
                  itemProps: {
                    labelWidth: '0px',
                    style: { marginBottom: '0px' }
                  }
                },
                {
                  label: '部门主管签字：_____________    日期：_____________',
                  prop: 'td05_01_text',
                  type: 'label',
                  props: {
                    style: {
                      textAlign: 'right',
                      whiteSpace: 'pre-wrap',
                      margin: '16px 0 10px 0'
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

/**
 * 表格表单模板配置
 */
export const formTableViewConfig = {
  labelWidth: 80,
  style: { padding: '20px' },
  items: [
    {
      label: '员工离职申请表',
      prop: 'title',
      type: 'label',
      props: {
        size: 'xl',
        strong: true,
        style: { textAlign: 'center', marginBottom: '12px' }
      }
    },
    {
      label: '',
      prop: 'table',
      type: 'table',
      props: {
        border: true,
        hasHeader: false,
        style: {
          '--ele-table-border-color': 'var(--el-text-color-secondary)',
          '--ele-table-tr-hover-bg': 'transparent',
          '--ele-table-radius': 0,
          tableLayout: 'fixed'
        }
      },
      children: [
        {
          label: '',
          prop: 'tr01',
          type: 'div',
          props: { is: 'tr' },
          children: [
            {
              label: '姓        名',
              prop: 'td01_01',
              type: 'div',
              props: {
                is: 'td',
                style: {
                  width: '100px',
                  whiteSpace: 'pre-wrap',
                  textAlign: 'center'
                }
              }
            },
            {
              label: '',
              prop: 'td01_02',
              type: 'div',
              props: { is: 'td', style: { minWidth: '140px' } },
              children: [
                {
                  label: '',
                  prop: 'name',
                  type: 'text',
                  initValue: 'XXX',
                  itemProps: {
                    labelWidth: '0px',
                    style: { marginBottom: '0px' }
                  }
                }
              ]
            },
            {
              label: '性        别',
              prop: 'td01_03',
              type: 'div',
              props: {
                is: 'td',
                style: {
                  width: '100px',
                  whiteSpace: 'pre-wrap',
                  textAlign: 'center'
                }
              }
            },
            {
              label: '',
              prop: 'td01_04',
              type: 'div',
              props: { is: 'td', style: { minWidth: '140px' } },
              children: [
                {
                  label: '',
                  prop: 'sex',
                  type: 'text',
                  initValue: '男',
                  itemProps: {
                    labelWidth: '0px',
                    style: { marginBottom: '0px' }
                  }
                }
              ]
            }
          ]
        },
        {
          label: '',
          prop: 'tr02',
          type: 'div',
          props: { is: 'tr' },
          children: [
            {
              label: '工        号',
              prop: 'td02_01',
              type: 'div',
              props: {
                is: 'td',
                style: { whiteSpace: 'pre-wrap', textAlign: 'center' }
              }
            },
            {
              label: '',
              prop: 'td02_02',
              type: 'div',
              props: { is: 'td' },
              children: [
                {
                  label: '',
                  prop: 'jobNumber',
                  type: 'text',
                  initValue: '026',
                  itemProps: {
                    labelWidth: '0px',
                    style: { marginBottom: '0px' }
                  }
                }
              ]
            },
            {
              label: '入职日期',
              prop: 'td02_03',
              type: 'div',
              props: {
                is: 'td',
                style: { whiteSpace: 'pre-wrap', textAlign: 'center' }
              }
            },
            {
              label: '',
              prop: 'td02_04',
              type: 'div',
              props: { is: 'td' },
              children: [
                {
                  label: '',
                  prop: 'commencementDate',
                  type: 'text',
                  initValue: '2021/11/04',
                  itemProps: {
                    labelWidth: '0px',
                    style: { marginBottom: '0px' }
                  },
                  props: { style: { wordBreak: 'break-all' } }
                }
              ]
            }
          ]
        },
        {
          label: '',
          prop: 'tr03',
          type: 'div',
          props: { is: 'tr' },
          children: [
            {
              label: '所在部门',
              prop: 'td03_01',
              type: 'div',
              props: {
                is: 'td',
                style: { whiteSpace: 'pre-wrap', textAlign: 'center' }
              }
            },
            {
              label: '',
              prop: 'td03_02',
              type: 'div',
              props: { is: 'td' },
              children: [
                {
                  label: '',
                  prop: 'department',
                  type: 'text',
                  initValue: '研发部',
                  itemProps: {
                    labelWidth: '0px',
                    style: { marginBottom: '0px' }
                  }
                }
              ]
            },
            {
              label: '岗        位',
              prop: 'td03_03',
              type: 'div',
              props: {
                is: 'td',
                style: { whiteSpace: 'pre-wrap', textAlign: 'center' }
              }
            },
            {
              label: '',
              prop: 'td03_04',
              type: 'div',
              props: { is: 'td' },
              children: [
                {
                  label: '',
                  prop: 'post',
                  type: 'text',
                  initValue: 'Java 开发工程师',
                  itemProps: {
                    labelWidth: '0px',
                    style: { marginBottom: '0px' }
                  }
                }
              ]
            }
          ]
        },
        {
          label: '',
          prop: 'tr04',
          type: 'div',
          props: { is: 'tr' },
          children: [
            {
              label: '离职原因',
              prop: 'td04_01',
              type: 'div',
              props: {
                is: 'td',
                style: { whiteSpace: 'pre-wrap', textAlign: 'center' }
              }
            },
            {
              label: '',
              prop: 'td04_02',
              type: 'div',
              props: { is: 'td', colspan: '3' },
              children: [
                {
                  label: '',
                  prop: 'reason',
                  type: 'text',
                  initValue:
                    '我非常感谢在这里的工作经历，但我一直寻求在技术上和职业生涯上有更大的突破，在过去的一段时间里，我努力工作并为公司做出了不少贡献，然而，我注意到我的薪资水平并没有得到相应的提升，最近我收到了一份薪资更高、更具挑战性的工作邀请，它更符合我的职业发展规划，因此我决定接受这个机会，离开现在的环境！',
                  props: { style: { textIndent: '2em', minHeight: '260px' } },
                  itemProps: {
                    labelWidth: '0px',
                    style: { marginBottom: '0px' }
                  }
                },
                {
                  label: '申请人签字：_____________    日期：_____________',
                  prop: 'td04_02_text',
                  type: 'label',
                  props: {
                    style: {
                      textAlign: 'right',
                      whiteSpace: 'pre-wrap',
                      marginBottom: '10px'
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          label: '',
          prop: 'tr05',
          type: 'div',
          props: { is: 'tr' },
          children: [
            {
              label: '',
              prop: 'td05-01',
              type: 'div',
              props: { is: 'td', colspan: '4' },
              children: [
                {
                  label: '部门意见：',
                  prop: 'td05_01_title',
                  type: 'label',
                  props: { style: { marginBottom: '12px' } }
                },
                {
                  label: '',
                  prop: 'opinion',
                  type: 'text',
                  initValue: '所有工作内容都已经交接完毕，同意离职！',
                  props: { style: { minHeight: '120px' } },
                  itemProps: {
                    labelWidth: '0px',
                    style: { marginBottom: '0px' }
                  }
                },
                {
                  label: '部门主管签字：_____________    日期：_____________',
                  prop: 'td05_01_text',
                  type: 'label',
                  props: {
                    style: {
                      textAlign: 'right',
                      whiteSpace: 'pre-wrap',
                      marginBottom: '10px'
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

/**
 * 选项卡表单模板配置
 */
export const formTabsConfig = {
  labelWidth: 94,
  footer: true,
  footerProps: { labelWidth: '0px' },
  footerStyle: { justifyContent: 'center' },
  style: { padding: '20px 20px 4px 20px' },
  items: [
    {
      label: '卡片风格的选项卡',
      prop: 'titleText1',
      type: 'label',
      props: {
        size: 'md',
        strong: true,
        style: {
          borderLeft: '4px solid var(--el-color-primary)',
          lineHeight: 1,
          paddingLeft: '10px',
          margin: '0 0 16px 0'
        }
      }
    },
    {
      label: '',
      prop: 'tab1',
      type: 'tabs',
      children: [
        {
          label: '寄件信息',
          prop: 'senderInfo',
          type: 'div',
          grid: { span: 12 },
          rowProps: { gutter: 20 },
          children: [
            {
              label: '寄件人姓名',
              prop: 'senderName',
              type: 'input',
              required: true
            },
            {
              label: '寄件人电话',
              prop: 'senderPhone',
              type: 'input',
              required: true
            },
            {
              label: '寄件地址',
              prop: 'senderAddress',
              type: 'textarea',
              required: true,
              colProps: { span: 24 }
            }
          ]
        },
        {
          label: '收件信息',
          prop: 'receiverInfo',
          type: 'div',
          grid: { span: 12 },
          rowProps: { gutter: 20 },
          children: [
            {
              label: '收件人姓名',
              prop: 'receiverName',
              type: 'input',
              required: true
            },
            {
              label: '收件人电话',
              prop: 'receiverPhone',
              type: 'input',
              required: true
            },
            {
              label: '收件地址',
              prop: 'receiverAddress',
              type: 'textarea',
              required: true,
              colProps: { span: 24 }
            },
            {
              label: '隐私保护',
              prop: 'privacy',
              type: 'checkbox',
              options: [
                { label: '姓名脱敏', value: 1 },
                { label: '使用虚拟号码', value: 2 },
                { label: '隐藏地址', value: 3 }
              ],
              colProps: { span: 24 }
            }
          ]
        }
      ]
    },
    {
      label: '默认风格的选项卡',
      prop: 'titleText2',
      type: 'label',
      props: {
        size: 'md',
        strong: true,
        style: {
          borderLeft: '4px solid var(--el-color-primary)',
          lineHeight: 1,
          paddingLeft: '10px',
          margin: '32px 0 16px 0'
        }
      }
    },
    {
      label: '',
      prop: 'tab2',
      type: 'tabs',
      props: { type: 'default' },
      children: [
        {
          label: '寄件信息',
          prop: 'tab2_senderInfo',
          type: 'div',
          children: [
            {
              label: '',
              prop: 'tab2_senderInfoWrap',
              type: 'div',
              grid: { span: 12 },
              rowProps: { gutter: 20 },
              props: { style: { padding: '20px 12px' } },
              children: [
                {
                  label: '寄件人姓名',
                  prop: 'senderName2',
                  type: 'input',
                  required: true
                },
                {
                  label: '寄件人电话',
                  prop: 'senderPhone2',
                  type: 'input',
                  required: true
                },
                {
                  label: '寄件地址',
                  prop: 'senderAddress2',
                  type: 'textarea',
                  required: true,
                  colProps: { span: 24 }
                }
              ]
            }
          ]
        },
        {
          label: '收件信息',
          prop: 'tab2_receiverInfo',
          type: 'div',
          children: [
            {
              label: '',
              prop: 'tab2_receiverInfoWrap',
              type: 'div',
              grid: { span: 12 },
              rowProps: { gutter: 20 },
              props: { style: { padding: '20px 12px' } },
              children: [
                {
                  label: '收件人姓名',
                  prop: 'receiverName2',
                  type: 'input',
                  required: true
                },
                {
                  label: '收件人电话',
                  prop: 'receiverPhone2',
                  type: 'input',
                  required: true
                },
                {
                  label: '收件地址',
                  prop: 'receiverAddress2',
                  type: 'textarea',
                  required: true,
                  colProps: { span: 24 }
                },
                {
                  label: '隐私保护',
                  prop: 'privacy2',
                  type: 'checkbox',
                  options: [
                    { label: '姓名脱敏', value: 1 },
                    { label: '使用虚拟号码', value: 2 },
                    { label: '隐藏地址', value: 3 }
                  ],
                  colProps: { span: 24 }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: '',
      prop: 'btnWrap1',
      type: 'div',
      children: [
        {
          label: '切换到“收件信息”',
          prop: 'btn01',
          type: 'button',
          props: {
            onClick:
              "/*__PRO_FORM__*/() => { form.tab2 = 'tab2_receiverInfo'; }"
          },
          vIf: "!form.tab2 || form.tab2 == 'tab2_senderInfo'"
        },
        {
          label: '切换到“寄件信息”',
          prop: 'btn02',
          type: 'button',
          props: {
            onClick: "/*__PRO_FORM__*/() => { form.tab2 = 'tab2_senderInfo'; }"
          },
          vIf: "form.tab2 == 'tab2_receiverInfo'"
        }
      ]
    }
  ]
};

/**
 * 搜索表单模板配置
 */
export const formSearchConfig = {
  labelWidth: 80,
  grid: { span: 8 },
  footer: true,
  footerProps: { labelWidth: '16px' },
  footerStyle: {
    justifyContent: `/*__PRO_FORM__*/form.searchExpand ? 'flex-end' : 'flex-start'`
  },
  footerColProps: {
    span: '/*__PRO_FORM__*/form.searchExpand ? 2 * 8 : 8'
  },
  showSearchExpand: true,
  style: { padding: '20px 20px 4px 14px' },
  items: baseFormItems.slice(0, baseFormItems.length - 1).map((d, i) => {
    return {
      ...d,
      required: false,
      vIf: i < 2 ? void 0 : '/*__PRO_FORM__*/searchExpand'
    };
  })
};

/**
 * div高级表单模板配置
 */
export const formDivProConfig = {
  labelWidth: 94,
  footer: true,
  footerProps: { labelWidth: '0px' },
  footerStyle: { justifyContent: 'center' },
  style: { padding: '20px 20px 4px 20px' },
  items: [
    {
      label: '使用折叠面板组件',
      prop: 'titleText1',
      type: 'label',
      props: {
        size: 'md',
        strong: true,
        style: {
          borderLeft: '4px solid var(--el-color-primary)',
          lineHeight: 1,
          paddingLeft: '10px',
          margin: '6px 0 22px 0'
        }
      }
    },
    {
      label: '',
      prop: 'collapse1',
      type: 'collapse',
      props: { accordion: true },
      children: [
        {
          label: '寄件信息',
          prop: 'senderInfo',
          type: 'collapseItem',
          grid: { span: 12 },
          rowProps: { gutter: 20, style: { marginTop: '20px' } },
          children: [
            {
              label: '寄件人姓名',
              prop: 'senderName',
              type: 'input',
              required: true
            },
            {
              label: '寄件人电话',
              prop: 'senderPhone',
              type: 'input',
              required: true
            },
            {
              label: '寄件地址',
              prop: 'senderAddress',
              type: 'textarea',
              required: true,
              colProps: { span: 24 }
            }
          ]
        },
        {
          label: '收件信息',
          prop: 'receiverInfo',
          type: 'collapseItem',
          grid: { span: 12 },
          rowProps: { gutter: 20, style: { marginTop: '20px' } },
          children: [
            {
              label: '收件人姓名',
              prop: 'receiverName',
              type: 'input',
              required: true
            },
            {
              label: '收件人电话',
              prop: 'receiverPhone',
              type: 'input',
              required: true
            },
            {
              label: '收件地址',
              prop: 'receiverAddress',
              type: 'textarea',
              required: true,
              colProps: { span: 24 }
            }
          ]
        }
      ]
    },
    {
      label: '',
      prop: 'collapse1_btnWrap1',
      type: 'div',
      props: { style: { marginTop: '20px' } },
      children: [
        {
          label: '展开“收件信息”',
          prop: 'collapse1_btnWrap1_btn01',
          type: 'button',
          props: {
            onClick:
              "/*__PRO_FORM__*/() => { form.collapse1 = 'receiverInfo'; }"
          },
          vIf: "!form.collapse1 || form.collapse1 == 'senderInfo'"
        },
        {
          label: '展开“寄件信息”',
          prop: 'collapse1_btnWrap1_btn02',
          type: 'button',
          props: {
            onClick: "/*__PRO_FORM__*/() => { form.collapse1 = 'senderInfo'; }"
          },
          vIf: "form.collapse1 == 'receiverInfo'"
        }
      ]
    },
    {
      label: '使用轮播图组件',
      prop: 'titleText2',
      type: 'label',
      props: {
        size: 'md',
        strong: true,
        style: {
          borderLeft: '4px solid var(--el-color-primary)',
          lineHeight: 1,
          paddingLeft: '10px',
          margin: '42px 0 22px 0'
        }
      }
    },
    {
      label: '',
      prop: 'carousel1',
      type: 'div',
      props: { is: 'ElCarousel', height: '320px' },
      children: [
        {
          label: '',
          prop: 'carousel1_item1',
          type: 'div',
          props: {
            is: 'ElCarouselItem',
            style: {
              background:
                'top left/100% url(https://cdn.eleadmin.com/20200610/yeKvhT20lMU0f1T3Y743UlGEOLLnZSnp.jpg)'
            }
          },
          children: [
            {
              label: '',
              prop: 'carouselImgWrap1',
              type: 'div',
              props: {
                style: { height: '100%' }
              },
              children: [
                {
                  label: '',
                  prop: 'carouselImg1',
                  type: 'div',
                  props: {
                    is: 'img',
                    src: 'https://cdn.eleadmin.com/20200610/yeKvhT20lMU0f1T3Y743UlGEOLLnZSnp.jpg',
                    style: {
                      width: 'auto',
                      height: '100%',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto',
                      maskImage:
                        'linear-gradient(to right, transparent 4%, rgba(0, 0, 0, 1) 12%, rgba(0, 0, 0, 1) 88%, transparent 96%)'
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          label: '',
          prop: 'carousel1_item2',
          type: 'div',
          props: {
            is: 'ElCarouselItem',
            style: {
              background:
                'bottom left/100% url(https://cdn.eleadmin.com/20200610/4Z0QR2L0J1XStxBh99jVJ8qLfsGsOgjU.jpg)'
            }
          },
          children: [
            {
              label: '',
              prop: 'carouselImgWrap2',
              type: 'div',
              props: {
                style: { height: '100%' }
              },
              children: [
                {
                  label: '',
                  prop: 'carouselImg2',
                  type: 'div',
                  props: {
                    is: 'img',
                    src: 'https://cdn.eleadmin.com/20200610/4Z0QR2L0J1XStxBh99jVJ8qLfsGsOgjU.jpg',
                    style: {
                      width: 'auto',
                      height: '100%',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto',
                      maskImage:
                        'linear-gradient(to right, transparent 4%, rgba(0, 0, 0, 1) 12%, rgba(0, 0, 0, 1) 88%, transparent 96%)',
                      transform: 'translateX(28%)'
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          label: '',
          prop: 'carousel1_item3',
          type: 'div',
          props: {
            is: 'ElCarouselItem',
            style: {
              background:
                'left bottom/100% url(https://cdn.eleadmin.com/20200610/fAenQ8nvRjL7x0i0jEfuDBZHvJfHf3v6.jpg)'
            }
          },
          children: [
            {
              label: '',
              prop: 'carouselImgWrap3',
              type: 'div',
              props: {
                style: { backdropFilter: 'blur(2px)', height: '100%' }
              },
              children: [
                {
                  label: '',
                  prop: 'carouselImg3',
                  type: 'div',
                  props: {
                    is: 'img',
                    src: 'https://cdn.eleadmin.com/20200610/fAenQ8nvRjL7x0i0jEfuDBZHvJfHf3v6.jpg',
                    style: {
                      width: 'auto',
                      height: '100%',
                      objectFit: 'contain',
                      display: 'block',
                      margin: '0 auto',
                      maskImage:
                        'linear-gradient(to right, transparent 4%, rgba(0, 0, 0, 1) 12%, rgba(0, 0, 0, 1) 88%, transparent 96%)'
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: '使用布局组件',
      prop: 'titleText3',
      type: 'label',
      props: {
        size: 'md',
        strong: true,
        style: {
          borderLeft: '4px solid var(--el-color-primary)',
          lineHeight: 1,
          paddingLeft: '10px',
          margin: '42px 0 22px 0'
        }
      }
    },
    {
      label: '',
      prop: 'framHeader1',
      type: 'div',
      props: {
        style: {
          background: '#3C3C3C',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          height: '24px',
          borderTopLeftRadius: '6px',
          borderTopRightRadius: '6px',
          padding: '0 12px'
        }
      },
      children: [
        {
          label: '',
          prop: 'fram1Icon1',
          type: 'div',
          props: {
            style: {
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#ff4a4a'
            }
          }
        },
        {
          label: '',
          prop: 'fram1Icon2',
          type: 'div',
          props: {
            style: {
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#ffb83d'
            }
          }
        },
        {
          label: '',
          prop: 'fram1Icon3',
          type: 'div',
          props: {
            style: {
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#00c543'
            }
          }
        }
      ]
    },
    {
      label: '',
      prop: 'framBody1',
      type: 'div',
      props: {
        style: {
          border: '7px solid #3C3C3C',
          borderBottomLeftRadius: '6px',
          borderBottomRightRadius: '6px',
          borderTop: 'none',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 99
        }
      },
      children: [
        {
          label: '',
          prop: 'layout1',
          type: 'div',
          props: {
            is: 'EleAdminLayout',
            height: '520px',
            fixedBody: true,
            logoSrc: 'https://cdn.eleadmin.com/20200610/logo.svg',
            logoTitle: 'ProForm',
            logoInHeader: true,
            headerCustomStyle: { gap: '22px' },
            menuScrollToActive: false,
            layout: 'mix',
            sidebarLayout: 'box',
            sideboxActive: '/user',
            sideboxMenus: [
              {
                index: '/user',
                title: '用户管理',
                icon: '__PRO_FORM_ICON__UserOutlined'
              },
              {
                index: '/order',
                title: '订单管理',
                icon: '__PRO_FORM_ICON__UserOutlined'
              }
            ],
            headerMenus: [
              {
                index: '/personnel',
                title: '人事系统',
                icon: '__PRO_FORM_ICON__UserOutlined'
              },
              {
                index: '/finance',
                title: '财务系统',
                icon: '__PRO_FORM_ICON__UserOutlined'
              }
            ],
            headerActive: '/personnel'
          },
          children: [
            {
              label: '',
              prop: 'userInfoWrap',
              type: 'div',
              props: { style: { padding: '16px' } },
              children: [
                {
                  label: '新增用户',
                  prop: 'userInfoCard',
                  type: 'card',
                  props: { bordered: false },
                  children: [
                    {
                      label: '用户名',
                      prop: 'username',
                      type: 'input',
                      required: true
                    },
                    {
                      label: '性别',
                      prop: 'sex',
                      type: 'radio',
                      options: [
                        { label: '男', value: 1 },
                        { label: '女', value: 2 }
                      ],
                      required: true
                    },
                    {
                      label: '角色',
                      prop: 'role',
                      type: 'multipleCheckCard',
                      props: {
                        style: { display: 'flex', alignItems: 'flex-start' },
                        itemStyle: {
                          padding: '8px 22px',
                          margin: '0 12px 0 0',
                          lineHeight: 'normal'
                        }
                      },
                      options: [{ value: '管理员' }, { value: '普通用户' }],
                      required: true
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: '使用步骤条组件',
      prop: 'titleText4',
      type: 'label',
      props: {
        size: 'md',
        strong: true,
        style: {
          borderLeft: '4px solid var(--el-color-primary)',
          lineHeight: 1,
          paddingLeft: '10px',
          margin: '42px 0 22px 0'
        }
      }
    },
    {
      label: '',
      prop: 'demoSteps',
      type: 'steps',
      props: {
        items: [
          { title: '第一步', description: '填写转账信息' },
          { title: '第二步', description: '确认转账信息' },
          { title: '第三步', description: '转账成功' }
        ],
        finishStatus: 'success'
      }
    },
    {
      label: '',
      prop: 'btnStepsWrap',
      type: 'div',
      props: { style: { margin: '22px 0 0 0' } },
      children: [
        {
          label: '上一步',
          prop: 'btnPrevSteps',
          type: 'button',
          props: {
            type: 'default',
            onClick:
              '/*__PRO_FORM__*/() => { if( form.demoSteps > 0 ) { form.demoSteps--; } }'
          }
        },
        {
          label: '下一步',
          prop: 'btnNextSteps',
          type: 'button',
          props: {
            onClick:
              '/*__PRO_FORM__*/() => { if( !form.demoSteps ) { form.demoSteps = 1; } else if ( form.demoSteps < 3 ) { form.demoSteps++; } }'
          }
        }
      ]
    },
    {
      label: '使用图标',
      prop: 'titleText5',
      type: 'label',
      props: {
        size: 'md',
        strong: true,
        style: {
          borderLeft: '4px solid var(--el-color-primary)',
          lineHeight: 1,
          paddingLeft: '10px',
          margin: '42px 0 22px 0'
        }
      }
    },
    {
      label: ' 主色文本',
      prop: 'textPrimary1',
      type: 'label',
      props: {
        type: 'primary',
        icon: '__PRO_FORM_ICON__UserOutlined'
      }
    },
    {
      label: ' 成功文本',
      prop: 'textSuccess1',
      type: 'label',
      props: {
        type: 'success',
        icon: '__PRO_FORM_ICON__CheckCircleOutlined',
        style: { marginTop: '12px' }
      }
    },
    {
      label: '后置图标',
      prop: 'textDefault1',
      type: 'label',
      props: { style: { marginTop: '12px' } },
      children: [
        {
          label: '',
          prop: 'textDefault1_icon',
          type: 'div',
          props: {
            is: 'ElIcon',
            style: { marginLeft: '4px', verticalAlign: '-2px' }
          },
          children: [
            {
              label: '',
              prop: 'textDefault1_icon_svg',
              type: 'div',
              props: { is: '__PRO_FORM_ICON__UserOutlined' }
            }
          ]
        }
      ]
    },
    {
      label: '',
      prop: 'btnIconWrap',
      type: 'div',
      props: { style: { margin: '16px 0 32px 0' } },
      children: [
        {
          label: '前置图标',
          prop: 'btnIcon1',
          type: 'button',
          props: {
            icon: '__PRO_FORM_ICON__UserOutlined',
            class: 'ele-btn-icon'
          }
        },
        {
          label: '后置图标',
          prop: 'btnIcon2',
          type: 'button',
          props: { class: 'ele-btn-icon' },
          children: [
            {
              label: '',
              prop: 'btnIcon2_icon',
              type: 'div',
              props: {
                is: 'ElIcon',
                style: { marginLeft: '4px' }
              },
              children: [
                {
                  label: '',
                  prop: 'btnIcon2_icon_svg',
                  type: 'div',
                  props: { is: '__PRO_FORM_ICON__CheckCircleOutlined' }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
