import { defineStore } from 'pinia';
import { eachTree, uuid } from 'ele-admin-plus/es';
import {
  stringTypes,
  arrayTypes,
  viewTypes,
  containerTypes
} from '@/components/ProForm/util';

/**
 * 标题宽度选项
 */
export const labelWidthOptions = [
  { value: 52, label: '52px' },
  { value: 66, label: '66px' },
  { value: 80, label: '80px' },
  { value: 94, label: '94px' },
  { value: 108, label: '108px' },
  { value: 122, label: '122px' },
  { value: 136, label: '136px' }
];

/**
 * 显示列数选项
 */
export const gridOptions = [
  { value: 1, label: '1列' },
  { value: 2, label: '2列' },
  { value: 3, label: '3列' },
  { value: 4, label: '4列' },
  { value: 6, label: '6列' },
  { value: 8, label: '8列' }
];

/**
 * 获取添加组件时的预设属性
 * @param type 组件类型
 */
export function getOptionsAndProps(type) {
  if (!type) {
    return { options: '', props: '' };
  }
  const treeData = [
    {
      label: '选项1',
      value: '1',
      children: [
        {
          label: '选项1-1',
          value: '1-1',
          children: [
            { label: '选项1-1-1', value: '1-1-1' },
            { label: '选项1-1-2', value: '1-1-2' }
          ]
        },
        {
          label: '选项1-2',
          value: '1-2',
          children: [
            { label: '选项1-2-1', value: '1-2-1' },
            { label: '选项1-2-2', value: '1-2-2' }
          ]
        }
      ]
    },
    {
      label: '选项2',
      value: '2',
      children: [
        {
          label: '选项2-1',
          value: '2-1',
          children: [
            { label: '选项2-1-1', value: '2-1-1' },
            { label: '选项2-1-2', value: '2-1-2' }
          ]
        },
        {
          label: '选项2-2',
          value: '2-2',
          children: [
            { label: '选项2-2-1', value: '2-2-1' },
            { label: '选项2-2-2', value: '2-2-2' }
          ]
        }
      ]
    }
  ];
  if (
    [
      'select',
      'multipleSelect',
      'radio',
      'radioButton',
      'checkbox',
      'checkboxButton'
    ].includes(type)
  ) {
    return {
      options: JSON.stringify(
        [
          { label: '选项一', value: 1 },
          { label: '选项二', value: 2 }
        ],
        void 0,
        2
      ),
      props: ''
    };
  }
  if ('autocomplete' === type) {
    return {
      options: JSON.stringify(
        [{ value: '选项一' }, { value: '选项二' }],
        void 0,
        2
      ),
      props: ''
    };
  }
  if ('cascader' === type) {
    return {
      options: JSON.stringify(treeData, void 0, 2),
      props: ''
    };
  }
  if ('tableSelect' === type || 'tableMultipleSelect' === type) {
    const props = {
      popperWidth: 580,
      valueKey: 'userId',
      labelKey: 'nickname',
      tableProps: {
        datasource: [
          { userId: 1, username: '001', nickname: '用户一', sex: '男' },
          { userId: 2, username: '002', nickname: '用户二', sex: '女' },
          { userId: 3, username: '003', nickname: '用户三', sex: '女' },
          { userId: 4, username: '004', nickname: '用户四', sex: '男' },
          { userId: 5, username: '005', nickname: '用户五', sex: '女' }
        ],
        columns: [
          { type: 'index', columnKey: 'index', width: 48, align: 'center' },
          { prop: 'username', label: '账号' },
          { prop: 'nickname', label: '用户名' },
          { prop: 'sex', label: '性别' }
        ],
        showOverflowTooltip: true,
        highlightCurrentRow: true,
        toolbar: false,
        pagination: {
          pageSize: 6,
          layout: 'total, prev, pager, next, jumper'
        },
        footerStyle: { padding: '0px' },
        rowStyle: { cursor: 'pointer' }
      }
    };
    if ('tableMultipleSelect' === type) {
      props.tableProps.columns.unshift({
        type: 'selection',
        columnKey: 'selection',
        width: 48,
        align: 'center',
        reserveSelection: true
      });
      props.tableProps.rowClickChecked = true;
      props.tableProps.highlightCurrentRow = void 0;
    }
    return {
      options: '',
      props: JSON.stringify(props, void 0, 2)
    };
  }
  if (['virtualTreeSelect', 'virtualTreeMultipleSelect'].includes(type)) {
    return {
      options: '',
      props: JSON.stringify(
        {
          popperWidth: 320,
          treeProps: {
            height: 266,
            data: treeData,
            props: { value: 'value', label: 'label' },
            expandOnClickNode: true
          },
          placement: 'bottom'
        },
        void 0,
        2
      )
    };
  }
  if (['treeSelect', 'treeMultipleSelect'].includes(type)) {
    const props = {
      defaultExpandAll: true,
      nodeKey: 'value',
      props: { label: 'label' }
    };
    if ('treeMultipleSelect' === type) {
      props.multiple = true;
      props.showCheckbox = true;
    }
    return {
      options: JSON.stringify(treeData, void 0, 2),
      props: JSON.stringify(props, void 0, 2)
    };
  }
  if (['checkCard', 'multipleCheckCard'].includes(type)) {
    return {
      options: JSON.stringify(
        [{ value: '选项一' }, { value: '选项二' }],
        void 0,
        2
      ),
      props: JSON.stringify(
        {
          style: { display: 'flex', alignItems: 'flex-start' },
          itemStyle: {
            padding: '8px 22px',
            margin: '0 12px 0 0',
            lineHeight: 'normal'
          }
        },
        void 0,
        2
      )
    };
  }
  if (
    ['dictRadio', 'dictSelect', 'dictCheckbox', 'dictMultipleSelect'].includes(
      type
    )
  ) {
    return {
      options: '',
      props: JSON.stringify({ code: 'sex' }, void 0, 2)
    };
  }
  if ('imageUpload' === type) {
    return {
      options: '',
      props: JSON.stringify({ limit: 3 }, void 0, 2)
    };
  }
  if ('fileUpload' === type) {
    return {
      options: '',
      props: JSON.stringify({ limit: 6 }, void 0, 2)
    };
  }
  if ('editor' === type) {
    return {
      options: '',
      props: JSON.stringify({ init: { height: 380 } }, void 0, 2)
    };
  }
  return { options: '', props: '' };
}

/**
 * 获取表单初始化值
 * @param items 表单项数据
 */
export function getFormInitValue(items) {
  const init = {};
  eachTree(items, (item) => {
    if (
      item.type != null &&
      !['tabs', 'collapse'].includes(item.type) &&
      (viewTypes.includes(item.type) || containerTypes.includes(item.type))
    ) {
      return;
    }
    if (item.initValue != null && item.initValue !== '') {
      try {
        init[item.prop] = JSON.parse(item.initValue);
      } catch (_e) {
        init[item.prop] = item.initValue;
      }
      return;
    }
    if (item.type) {
      if ('sliderRange' === item.type) {
        init[item.prop] = [0, 100];
        return;
      }
      if ('tabs' === item.type) {
        const active = item.props?.modelValue || item.children?.[0]?.prop || '';
        init[item.prop] = active;
        return;
      }
      if ('collapse' === item.type) {
        const active =
          item.props?.modelValue ||
          item.children?.[0]?.props?.name ||
          item.children?.[0]?.prop ||
          '';
        init[item.prop] = item.props?.accordion ? active : [];
        return;
      }
      if (arrayTypes.includes(item.type)) {
        init[item.prop] = [];
        return;
      }
      if (stringTypes.includes(item.type)) {
        init[item.prop] = '';
        return;
      }
    }
    init[item.prop] = void 0;
  });
  return init;
}

/**
 * 生成表单 grid 属性值
 * @param grid 显示列数
 */
export function getFormGrid(grid) {
  return grid == null || grid === 1 ? false : { span: 24 / grid };
}

/**
 * 根据 grid 属性值生成列数值
 * @param grid ElColProps
 */
export function getGridNumber(grid) {
  if (grid === true) {
    return 2;
  }
  if (!grid || !grid.span) {
    return 1;
  }
  return 24 / grid.span;
}

/**
 * 获取 ElCol 跨列属性
 * @param grid 显示列数
 * @param colSpan 所占列数
 */
export function getColProps(grid, colSpan) {
  if (grid === 1 || colSpan === 1) {
    return;
  }
  const span = 24 / grid;
  return { span: span * colSpan };
}

/**
 * 获取表单项所占列数
 * @param grid 显示列数
 * @param colSpan ElCol 的 span 值
 */
export function getColSpan(grid, colSpan) {
  if (grid === 1 || colSpan == null) {
    return 1;
  }
  const span = 24 / grid;
  return colSpan / span;
}

/**
 * 父级显示列数改变后更新子级的跨列值
 * @param items 直接数据
 * @param oldGrid 父级旧的显示列数值
 * @param grid 父级新的显示列数值
 */
export function updateChildrenColSpan(items, oldGrid, grid) {
  if (!items) {
    return;
  }
  items.forEach((item) => {
    if (!item.colProps || !item.colProps.span) {
      return;
    }
    const span = getColSpan(oldGrid || 1, item.colProps.span);
    if (span > (grid || 1)) {
      item.colProps = void 0;
    } else {
      const colProps = getColProps(grid || 1, span);
      if (colProps == null) {
        item.colProps = void 0;
      } else {
        Object.assign(item.colProps, colProps);
      }
    }
  });
}

/**
 * 验证 JSON 格式
 * @param value 字符串
 */
export function validateJSON(value) {
  if (value) {
    const msg = '请输入正确的JSON格式';
    try {
      const obj = JSON.parse(value);
      if (obj == null || typeof obj !== 'object') {
        return msg;
      }
    } catch (_e) {
      return msg;
    }
  }
}

/**
 * 获取字符串 js 值或 JSON 值
 * @param value 字符串
 */
export function getStrValOrJsonVal(value) {
  if (value === null) {
    return null;
  }
  if (
    value == null ||
    value === '' ||
    (typeof value === 'string' && !value.trim())
  ) {
    return;
  }
  try {
    return JSON.parse(value);
  } catch (_e) {
    try {
      return new Function(`return (${value})`)();
    } catch (_e) {
      //
    }
  }
  return value;
}

/**
 * ElFormItem 组件提示代码
 */
export const itemPropsTipCode = `{
  "rules": [
    { "required": true, "message": "姓名必须填写" }
  ],
  "labelWidth": "88px",
  "style": { "marginBottom": "0px" }
}`;

/**
 * 组件属性提示代码
 */
export const propsTipCode = `{
  "clearable": false,
  "placeholder": "请填写姓名",
  "style": { "marginTop": "80px" }
}`;

/**
 * 选项数据提示代码
 */
export const optionsTipCode = `[
  { "label": "男", "value": 1 },
  { "label": "女", "value": 2, children: [] }
]`;

/**
 * ElRow 组件提示代码
 */
export const rowPropsTipCode = `{ "gutter": 16 }`;

/**
 * 表单样式提示代码
 */
export const styleTipCode = `{
  "padding": "20px 20px 4px 14px",
  "background": "var(--el-bg-color-page)"
}`;

/**
 * 底栏 ElFormItem 组件提示代码
 */
export const footerItemPropsTipCode = `{
  "labelWidth": "0px",
  "style": { "marginBottom": "0px" }
}`;

/**
 * 底栏样式提示代码
 */
export const footerStyleTipCode = `{
  "justifyContent": "flex-end",
  "flexDirection": "row-reverse",
  "gap": "16px"
}`;

/**
 * 底栏 ElCol 组件提示代码
 */
export const footerColPropsTipCode = `{ "span": 12 }`;

/**
 * 生成表单项唯一值
 */
export function generateItemKey() {
  return `item-${uuid(16, 36).toLowerCase()}`;
}

/**
 * 表单构建状态管理
 */
export const useFormBuildStore = defineStore('formBuild', {
  state: () => ({
    /** 显示的删除确认 */
    showDelPopKey: null
  }),
  actions: {
    /** 修改显示的删除确认 */
    setShowDelPopKey(key) {
      this.showDelPopKey = key;
    }
  }
});
