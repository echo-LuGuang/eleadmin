/**
 * 表单项类型数据
 */
export const itemTypes = [
  {
    value: 'input',
    label: '输入框',
    component: 'ElInput',
    defaultProps: { clearable: true },
    reservedProps: {}
  },
  {
    value: 'textarea',
    label: '文本域',
    component: 'ElInput',
    defaultProps: { rows: 4 },
    reservedProps: { type: 'textarea' }
  },
  {
    value: 'select',
    label: '下拉',
    component: 'ElSelect',
    defaultProps: { class: 'ele-fluid', clearable: true },
    reservedProps: {}
  },
  {
    value: 'multipleSelect',
    label: '下拉多选',
    component: 'ElSelect',
    defaultProps: { class: 'ele-fluid', clearable: true },
    reservedProps: { multiple: true }
  },
  {
    value: 'radio',
    label: '单选',
    component: 'ElRadio',
    defaultProps: {},
    reservedProps: {}
  },
  {
    value: 'radioButton',
    label: '单选按钮',
    component: 'ElRadioButton',
    defaultProps: {},
    reservedProps: {}
  },
  {
    value: 'checkbox',
    label: '多选',
    component: 'ElCheckbox',
    defaultProps: {},
    reservedProps: {}
  },
  {
    value: 'checkboxButton',
    label: '多选按钮',
    component: 'ElCheckboxButton',
    defaultProps: {},
    reservedProps: {}
  },
  {
    value: 'date',
    label: '日期选择',
    component: 'ElDatePicker',
    defaultProps: { class: 'ele-fluid', valueFormat: 'YYYY-MM-DD' },
    reservedProps: {}
  },
  {
    value: 'datetime',
    label: '日期时间选择',
    component: 'ElDatePicker',
    defaultProps: {
      class: 'ele-fluid',
      valueFormat: 'YYYY-MM-DD HH:mm:ss'
    },
    reservedProps: { type: 'datetime' }
  },
  {
    value: 'daterange',
    label: '日期范围选择',
    component: 'ElDatePicker',
    defaultProps: {
      class: 'ele-fluid',
      valueFormat: 'YYYY-MM-DD',
      rangeSeparator: '-',
      startPlaceholder: '开始日期',
      endPlaceholder: '结束日期',
      unlinkPanels: true,
      type: 'daterange'
    },
    reservedProps: {}
  },
  {
    value: 'datetimerange',
    label: '日期时间范围选择',
    component: 'ElDatePicker',
    defaultProps: {
      class: 'ele-fluid',
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      rangeSeparator: '-',
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      unlinkPanels: true
    },
    reservedProps: { type: 'datetimerange' }
  },
  {
    value: 'time',
    label: '时间选择',
    component: 'ElTimePicker',
    defaultProps: { class: 'ele-fluid', valueFormat: 'HH:mm:ss' },
    reservedProps: {}
  },
  {
    value: 'timerange',
    label: '时间范围选择',
    component: 'ElTimePicker',
    defaultProps: {
      class: 'ele-fluid',
      valueFormat: 'HH:mm:ss',
      rangeSeparator: '-',
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间'
    },
    reservedProps: { isRange: true }
  },
  {
    value: 'timeSelect',
    label: '时间段选择',
    component: 'ElTimeSelect',
    defaultProps: { class: 'ele-fluid' },
    reservedProps: {}
  },
  {
    value: 'editTag',
    label: '标签输入',
    component: 'EleEditTag',
    defaultProps: {
      type: 'info',
      style: { marginTop: '4px' },
      itemStyle: { margin: '0 4px 4px 0' },
      buttonStyle: { marginBottom: '4px' },
      inputTagStyle: { marginBottom: '4px' }
    },
    reservedProps: {}
  },
  {
    value: 'switch',
    label: '开关',
    component: 'ElSwitch',
    defaultProps: { activeValue: 1, inactiveValue: 0 },
    reservedProps: {}
  },
  {
    value: 'rate',
    label: '评分',
    component: 'ElRate',
    defaultProps: {},
    reservedProps: {}
  },
  {
    value: 'inputNumber',
    label: '数字输入框',
    component: 'ElInputNumber',
    defaultProps: { class: 'ele-fluid', controlsPosition: 'right' },
    reservedProps: {}
  },
  {
    value: 'cascader',
    label: '级联选择',
    component: 'ElCascader',
    defaultProps: { class: 'ele-fluid', clearable: true },
    reservedProps: {}
  },
  {
    value: 'treeSelect',
    label: '树下拉',
    component: 'ElTreeSelect',
    defaultProps: { class: 'ele-fluid', clearable: true },
    reservedProps: {}
  },
  {
    value: 'treeMultipleSelect',
    label: '树下拉多选',
    component: 'ElTreeSelect',
    defaultProps: {
      class: 'ele-fluid',
      clearable: true,
      showCheckbox: true
    },
    reservedProps: { multiple: true }
  },
  {
    value: 'virtualTreeSelect',
    label: '虚拟树下拉',
    component: 'EleTreeSelect',
    defaultProps: { clearable: true },
    reservedProps: {}
  },
  {
    value: 'virtualTreeMultipleSelect',
    label: '虚拟树下拉多选',
    component: 'EleTreeSelect',
    defaultProps: { clearable: true, maxTagCount: 1 },
    reservedProps: { multiple: true }
  },
  {
    value: 'tableSelect',
    label: '表格下拉',
    component: 'EleTableSelect',
    defaultProps: { clearable: true },
    reservedProps: {}
  },
  {
    value: 'tableMultipleSelect',
    label: '表格下拉多选',
    component: 'EleTableSelect',
    defaultProps: { clearable: true },
    reservedProps: { multiple: true }
  },
  {
    value: 'checkCard',
    label: '可选卡片',
    component: 'EleCheckCard',
    defaultProps: {},
    reservedProps: {}
  },
  {
    value: 'multipleCheckCard',
    label: '多选卡片',
    component: 'EleCheckCard',
    defaultProps: {},
    reservedProps: { multiple: true }
  },
  {
    value: 'autocomplete',
    label: '自动完成',
    component: 'ElAutocomplete',
    defaultProps: { class: 'ele-fluid' },
    reservedProps: {}
  },
  {
    value: 'imageUpload',
    label: '图片上传',
    component: 'ImageUpload',
    defaultProps: {},
    reservedProps: {}
  },
  {
    value: 'fileUpload',
    label: '附件上传',
    component: 'FileUpload',
    defaultProps: {},
    reservedProps: {}
  },
  {
    value: 'regions',
    label: '省市区选择',
    component: 'RegionsSelect',
    defaultProps: {},
    reservedProps: {}
  },
  {
    value: 'dictRadio',
    label: '字典单选',
    component: 'DictData',
    defaultProps: { code: '' },
    reservedProps: { type: 'radio' }
  },
  {
    value: 'dictCheckbox',
    label: '字典多选',
    component: 'DictData',
    defaultProps: { code: '' },
    reservedProps: { type: 'checkbox' }
  },
  {
    value: 'dictSelect',
    label: '字典下拉',
    component: 'DictData',
    defaultProps: { code: '' },
    reservedProps: { type: 'select' }
  },
  {
    value: 'dictMultipleSelect',
    label: '字典下拉多选',
    component: 'DictData',
    defaultProps: { code: '' },
    reservedProps: { type: 'multipleSelect' }
  },
  {
    value: 'slider',
    label: '滑块',
    component: 'ElSlider',
    defaultProps: {},
    reservedProps: {}
  },
  {
    value: 'sliderRange',
    label: '范围滑块',
    component: 'ElSlider',
    defaultProps: {},
    reservedProps: { range: true }
  },
  {
    value: 'editor',
    label: '富文本',
    component: 'TinymceEditor',
    defaultProps: {},
    reservedProps: {}
  },
  {
    value: 'text',
    label: '只读文本',
    component: 'EleText',
    defaultProps: {},
    reservedProps: {}
  },
  // 展示类型
  {
    value: 'label',
    label: '文本',
    component: 'EleText',
    defaultProps: {},
    reservedProps: {}
  },
  {
    value: 'divider',
    label: '分割线',
    component: 'ElDivider',
    defaultProps: {},
    reservedProps: {}
  },
  {
    value: 'button',
    label: '按钮',
    component: 'ElButton',
    defaultProps: { type: 'primary' },
    reservedProps: {}
  },
  {
    value: 'steps',
    label: '步骤条',
    component: 'EleSteps',
    defaultProps: {},
    reservedProps: {}
  },
  // 容器类型
  {
    value: 'card',
    label: '卡片',
    component: 'EleCard',
    defaultProps: { bordered: true },
    reservedProps: {}
  },
  {
    value: 'table',
    label: '表格',
    component: 'EleTable',
    defaultProps: {},
    reservedProps: {}
  },
  {
    value: 'tabs',
    label: '选项卡',
    component: 'EleTabs',
    defaultProps: { type: 'border-card' },
    reservedProps: {}
  },
  {
    value: 'row',
    label: '栅格',
    component: 'ElRow',
    defaultProps: {},
    reservedProps: {}
  },
  {
    value: 'col',
    label: '栅格',
    component: 'ElCol',
    defaultProps: {},
    reservedProps: {}
  },
  {
    value: 'collapse',
    label: '折叠面板',
    component: 'ElCollapse',
    defaultProps: {},
    reservedProps: {}
  },
  {
    value: 'collapseItem',
    label: '折叠面板',
    component: 'ElCollapseItem',
    defaultProps: {},
    reservedProps: {}
  },
  {
    value: 'div',
    label: 'div',
    component: 'div',
    defaultProps: {},
    reservedProps: {}
  }
];
