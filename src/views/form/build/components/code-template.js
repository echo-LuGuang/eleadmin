import { eachTree } from 'ele-admin-plus/es';
import {
  viewTypes,
  containerTypes,
  selectTypes,
  uploadTypes,
  getRuleTrigger
} from '@/components/ProForm/util';
import {
  templateEngine,
  obj2Str,
  kebabCase,
  addIndentChar,
  generatePropsCode
} from './code-util';
import { JsVar, transformJsVar } from './code-js-var';
import { itemTypes } from './item-types';

/**
 * ProForm 代码生成模板
 */
export const proTemplate = `<template>
  <pro-form
    :model="form"
    :items="formItems"<% d.proFormPropsCode %><%# if(d.showFooterExpand){ %>
    v-model:search-expand="form.searchExpand"<%# } %>
    @updateValue="setFieldValue"
    @submit="handleSubmit"
    @reset="handleReset"
  />
</template>

<script setup>
  <% d.proFormImportCode %>

  /** 表单数据 */
  const [form, resetFields, _assignFields, setFieldValue] = useFormData(<% d.modelCode %>);

  /** 提交 */
  const handleSubmit = (form) => {
    console.log(form);
  };

  /** 重置 */
  const handleReset = () => {<%# if(d.showFooterExpand){ %>
    resetFields(void 0, ['searchExpand']);<%# }else{ %>
    resetFields();<%# } %>
  };<%# if(d.proFormVarCode){ %>

  <% d.proFormVarCode %><%# } %>

  /** 表单项 */
  const formItems = ref(<% d.proFormItemsCode %>);
</script>
`;

/**
 * ElForm 代码生成模板
 */
export const formTemplate = `<!-- eslint-disable vue/html-self-closing -->
<template>
  <el-form
    ref="formRef"
    :model="form"
    :rules="rules"<% d.formPropsCode %>
    @submit.prevent=""
  ><% d.formContentCode %>
  </el-form>
</template>

<script setup>
  <% d.formImportCode %>

  /** 表单实例 */
  const formRef = ref(null);

  /** 表单数据 */
  const [form, resetFields, _assignFields] = useFormData(<% d.modelCode %>);

  /** 表单验证规则 */
  const rules = reactive(<% d.formRuleCode %>);

  /** 保存编辑 */
  const <% d.showFooter?'':'_' %>handleSubmit = () => {
    formRef.value?.validate?.((valid) => {
      if (!valid) {
        return;
      }
      console.log(form);
    });
  };

  /** 重置表单 */
  const <% d.showFooter?'':'_' %>handleReset = () => {<%# if(d.showFooterExpand){ %>
    resetFields(void 0, ['searchExpand']);<%# }else{ %>
    resetFields();<%# } %>
    nextTick(() => {
      nextTick(() => {
        formRef.value?.clearValidate?.();
      });
    });
  };<%# if(d.formVarCode){ %>

  <% d.formVarCode %><%# } %>
</script>
`;

/**
 * ElForm 内容代码生成模板
 */
export const contentTemplate = `<%# getFormContent(d.items,d.grid,d.rowProps,d.indentSize,d.contentExtra,d.contentExtraColProps); function getFormContent(items,grid,rowProps,indentSize,contentExtra,contentExtraColProps){ var indentChar = Array.from({length:indentSize||0}).fill(' ').join(''); if(!grid){ (items||[]).forEach(function(item){ %>
<% indentChar %><%# getFormItem(item,indentSize); }); if(contentExtra){ %>
<% indentChar %><% d.addIndentChar(contentExtra,indentChar) %><%# } }else if(items&&items.length){ %>
<% indentChar %><el-row<% d.addIndentChar(d.generatePropsCode(rowProps,null,2,true),indentChar) %>><%# items.forEach(function(item){ %>
<% indentChar %>  <el-col<% d.generateColProps(item,grid,4,indentChar) %>>
<% indentChar %>    <%# getFormItem(item,(indentSize||0)+4); %>
<% indentChar %>  </el-col><%# }); if(contentExtra){ %>
<% indentChar %>  <el-col<% d.generateColProps(null,contentExtraColProps,4,indentChar) %>>
<% indentChar %>    <% d.addIndentChar(contentExtra,'    '+indentChar) %>
<% indentChar %>  </el-col><%# } %>
<% indentChar %></el-row><%# } } function getFormItem(item,indentSize){ var indentChar = Array.from({length:indentSize||0}).fill(' ').join(''); if(d.viewTypes.includes(item.type)){ %><<% d.getComponentTag(item) %><% d.generateComponentProps(item,2,indentChar) %>><%# if(item.label){ %>
<% indentChar %>  <% item.label %><%# } getFormContent(item.children,item.grid,item.rowProps,indentSize+2); %>
<% indentChar %></<% d.getComponentTag(item) %>><%# }else if(item.type=='card'){ %><ele-card<% d.generateComponentProps(item,2,indentChar) %>><%# getFormContent(item.children,item.grid,item.rowProps,indentSize+2); %>
<% indentChar %></ele-card><%# }else if(item.type=='tabs'){ %><ele-tabs<% d.generateComponentProps(item,2,indentChar) %>><%# (item.children||[]).forEach(function(tabItem){ %>
<% indentChar %>  <template #<% tabItem.prop %>><%# getFormContent(tabItem.children,tabItem.grid,tabItem.rowProps,indentSize+4); %>
<% indentChar %>  </template><%# }); %>
<% indentChar %></ele-tabs><%# }else if(item.type=='div'){ var divTagName = d.getDivTag(item); %><<% divTagName %><% d.generateComponentProps(item,2,indentChar) %>><%# if(item.label){ %>
<% indentChar %>  <% item.label %><%# } getFormContent(item.children,item.grid,item.rowProps,indentSize+2); %>
<% indentChar %></<% divTagName %>><%# }else if(d.containerTypes.includes(item.type)){ %><<% d.getComponentTag(item) %><% d.generateComponentProps(item,2,indentChar) %>><%# if(item.label&&!['collapseItem'].includes(item.type)){ %>
<% indentChar %>  <% item.label %><%# } getFormContent(item.children,item.grid,item.rowProps,indentSize+2); %>
<% indentChar %></<% d.getComponentTag(item) %>><%# }else{ %><el-form-item<% d.generateFormItemProps(item,2,indentChar) %>>
<% indentChar %>  <%# if(item.type=='select'||item.type=='multipleSelect'){ %><el-select<% d.generateComponentProps(item,4,indentChar) %>><%# (item.options||[]).forEach(function(opt){ %>
<% indentChar %>    <el-option<% d.generatePropsCode(opt,true) %> /><%# }); %>
<% indentChar %>  </el-select><%# }else if(item.type=='radio'){ %><el-radio-group<% d.generateComponentProps(item,4,indentChar) %>><%# (item.options||[]).forEach(function(opt){ %>
<% indentChar %>    <el-radio<% d.generatePropsCode(opt,true) %> /><%# }); %>
<% indentChar %>  </el-radio-group><%# }else if(item.type=='radioButton'){ %><el-radio-group<% d.generateComponentProps(item,4,indentChar) %>><%# (item.options||[]).forEach(function(opt){ %>
<% indentChar %>    <el-radio-button<% d.generatePropsCode(opt,true) %> /><%# }); %>
<% indentChar %>  </el-radio-group><%# }else if(item.type=='checkbox'){ %><el-checkbox-group<% d.generateComponentProps(item,4,indentChar) %>><%# (item.options||[]).forEach(function(opt){ %>
<% indentChar %>    <el-checkbox<% d.generatePropsCode(opt,true) %> /><%# }); %>
<% indentChar %>  </el-checkbox-group><%# }else if(item.type=='checkboxButton'){ %><el-checkbox-group<% d.generateComponentProps(item,4,indentChar) %>><%# (item.options||[]).forEach(function(opt){ %>
<% indentChar %>    <el-checkbox-button<% d.generatePropsCode(opt,true) %> /><%# }); %>
<% indentChar %>  </el-checkbox-group><%# }else if(item.type=='text'){ %><ele-text<% d.generateComponentProps(item,4,indentChar) %>>
<% indentChar %>    {{ form.<% item.prop %> }}
<% indentChar %>  </ele-text><%# }else{ %><% d.generateComponentCode(item,4,indentChar) %><%# } %>
<% indentChar %></el-form-item><%# } } %>`;

/**
 * ElForm 底栏代码生成模板
 */
export const footerTemplate = `<el-form-item<% d.footerPropsCode %>>
  <div :style="<% d.footerStyleCode %>">
    <el-button type="primary" @click="handleSubmit"><% d.showFooterExpand?'搜索':'提交' %></el-button>
    <el-button @click="handleReset">重置</el-button><%# if(d.showFooterExpand){ %>
    <el-link
      type="primary"
      :underline="false"
      @click="form.searchExpand = !form.searchExpand"
      style="margin-left: 12px"
    >
      <template v-if="form.searchExpand">
        <span>收起</span>
        <el-icon style="vertical-align: -1px">
          <ArrowUp />
        </el-icon>
      </template>
      <template v-else>
        <span>展开</span>
        <el-icon style="vertical-align: -2px">
          <ArrowDown />
        </el-icon>
      </template>
    </el-link><%# } %>
  </div>
</el-form-item>`;

/**
 * 生成 ElForm 底栏代码
 * @param formProps 表单配置
 * @param showFooterExpand 是否需要展开收起按钮
 */
export function generateFooterCode(formProps, showFooterExpand) {
  if (!formProps.footer) {
    return '';
  }
  const style = { flex: 1, display: 'flex', alignItems: 'center' };
  const code = obj2Str({ ...style, ...(formProps.footerStyle || {}) }, true);
  return templateEngine(footerTemplate, {
    footerStyleCode: code,
    footerPropsCode: generatePropsCode(formProps.footerProps),
    showFooterExpand
  });
}

/**
 * 生成 ElFormItem 所有属性代码
 * @param item 表单项
 * @param indentChar 上层代码缩进
 * @param indentSize 属性换行的缩进空格数量
 */
export function generateFormItemProps(item, indentSize, indentChar) {
  const { vIf, label, prop, itemProps } = item;
  const props = { label, prop, ...(itemProps || {}), vIf };
  const code = generatePropsCode(props, null, indentSize);
  return addIndentChar(code, indentChar);
}

/**
 * 生成 ElCol 所有属性代码
 * @param item 表单项
 * @param grid 父级的 grid 属性
 * @param indentChar 上层代码缩进
 * @param indentSize 属性换行的缩进空格数量
 */
export function generateColProps(item, grid, indentSize, indentChar) {
  const gridCol = grid === true ? { span: 12 } : grid || {};
  const { vIf, colProps } = item || {};
  const props = { ...gridCol, ...(colProps || {}), vIf };
  const code = generatePropsCode(props, null, indentSize);
  return addIndentChar(code, indentChar);
}

/**
 * 生成容器组件和非单标签组件的所有属性代码
 * @param item 表单项
 * @param indentSize 属性换行的缩进空格数量
 * @param indentChar 上层代码缩进
 */
export function generateComponentProps(item, indentSize, indentChar) {
  const props =
    item.type === 'div'
      ? { ...(item.props || {}), is: void 0 }
      : item.props || {};
  const code = generatePropsCode(props, null, indentSize);
  return addIndentChar(code, indentChar);
}

/**
 * 生成 ElForm 代码时获取组件使用的组件名称
 * @param item 表单项
 */
export function getComponentTag(item) {
  const name = itemTypes.find((d) => d.value === item.type)?.component;
  return kebabCase(name || '');
}

/**
 * 生成展示型组件和单标签组件的完整代码
 * @param item 表单项
 * @param indentSize 属性换行的缩进空格数量
 * @param indentChar 上层代码缩进
 * @param content 展示型组件的文本内容
 */
export function generateComponentCode(item, indentSize, indentChar, content) {
  const component = getComponentTag(item);
  const propsCode = generatePropsCode(item.props, null, indentSize);
  const code = addIndentChar(propsCode, indentChar);
  if (content == null) {
    return `<${component}${code}/>`;
  }
  if (content === '') {
    return `<${component}${code}>\n${indentChar}</${component}>`;
  }
  return `<${component}${code}>\n${indentChar}  ${content}\n${indentChar}</${component}>`;
}

/**
 * 生成 ElForm 代码时获取 div 容器使用的组件名称
 * @param item 表单项
 */
export function getDivTag(item) {
  const divTag = item.props?.is;
  const jsVar = transformJsVar(divTag);
  if (jsVar != null) {
    return jsVar.name;
  }
  return divTag || 'div';
}

/**
 * 生成 ElForm 内容代码
 * @param items 表单项数据
 * @param formProps 表单配置
 * @param showFooterExpand 是否需要展开收起按钮
 */
export function generateContentCode(items, formProps, showFooterExpand) {
  return templateEngine(contentTemplate, {
    items,
    grid: formProps.grid,
    rowProps: formProps.rowProps,
    indentSize: 4,
    contentExtra: generateFooterCode(formProps, showFooterExpand),
    contentExtraColProps: formProps.footerColProps || { span: 24 },
    generateFormItemProps,
    generateColProps,
    generateComponentProps,
    generateComponentCode,
    getDivTag,
    getComponentTag,
    viewTypes,
    containerTypes,
    addIndentChar,
    generatePropsCode
  });
}

/**
 * 获取上传组件表单验证方法代码
 * @param item 表单项
 */
export function getUploadValidatorCode(item) {
  return `(_rule, value, callback) => {
  if (value && ${item.prop}UploadRef.value && !${item.prop}UploadRef.value.isDone()) {
    return callback(new Error('${item.label}还未上传完毕'));
  }
  callback();
}`;
}

/**
 * 生成 ElForm 验证规则代码
 * @param items 表单项数据
 */
export function generateRuleCode(items) {
  const rules = {};
  eachTree(items, (item) => {
    if (
      item.type != null &&
      (viewTypes.includes(item.type) || containerTypes.includes(item.type))
    ) {
      return;
    }
    const itemRules = [];
    if (item.type != null) {
      if (item.required) {
        if (selectTypes.includes(item.type)) {
          itemRules.push({
            required: true,
            message: `请选择${item.label}`,
            trigger: getRuleTrigger(item.type)
          });
        } else if (uploadTypes.includes(item.type)) {
          itemRules.push({
            required: true,
            message: `请上传${item.label}`,
            trigger: getRuleTrigger(item.type)
          });
        } else {
          itemRules.push({
            required: true,
            message: `请输入${item.label}`,
            trigger: getRuleTrigger(item.type)
          });
        }
      }
      if (uploadTypes.includes(item.type)) {
        itemRules.push({
          trigger: getRuleTrigger(item.type),
          validator: new JsVar({ name: getUploadValidatorCode(item) })
        });
      }
      if (itemRules.length) {
        rules[item.prop] = itemRules;
      }
    }
  });
  return obj2Str(rules, false, 2);
}

/**
 * 没有 placeholder 属性的类型
 */
export const noPlaceholderTypes = [
  'radio',
  'radioButton',
  'checkbox',
  'checkboxButton',
  'daterange',
  'datetimerange',
  'timerange',
  'switch',
  'rate',
  'slider',
  'sliderRange',
  'checkCard',
  'multipleCheckCard',
  'editTag',
  'dictRadio',
  'dictCheckbox',
  'imageUpload',
  'fileUpload',
  'editor',
  'text',
  ...viewTypes,
  ...containerTypes
];

/**
 * 获取生成 ElForm 代码时组件的属性
 * @param item 表单项
 */
export function getComponentProps(item) {
  const config = itemTypes.find((d) => d.value === item.type);
  const props = {
    ...(config?.defaultProps || {}),
    ...(item.props || {}),
    ...(config?.reservedProps || {})
  };
  // 添加 v-if 和 v-model 和 placeholder 属性
  if (
    item.type &&
    (viewTypes.includes(item.type) || containerTypes.includes(item.type))
  ) {
    props.vIf = item.vIf;
    if (item.type === 'card' && props.header == null) {
      props.header = item.label;
    }
    if (item.type === 'steps' && props.active == null) {
      props.active = new JsVar({
        name: `form.${item.prop} ?? 0`
      });
    }
    if (item.type === 'tabs') {
      props.vModel = new JsVar({
        name: `form.${item.prop}`
      });
      props.modelValue = void 0;
      props.items = item.children
        ? item.children.map((c) => ({ name: c.prop, label: c.label }))
        : [];
    }
    if (item.type === 'collapse' && props.modelValue == null) {
      props.vModel = new JsVar({
        name: `form.${item.prop}`
      });
      props.modelValue = void 0;
    }
    if (item.type === 'collapseItem') {
      if (props.title == null) {
        props.title = item.label;
      }
      if (props.name == null) {
        props.name = item.prop;
      }
    }
  } else if (item.type && item.type !== 'text') {
    if (props.placeholder == null && !noPlaceholderTypes.includes(item.type)) {
      if (selectTypes.includes(item.type)) {
        props.placeholder = `请选择${item.label}`;
      } else if (uploadTypes.includes(item.type)) {
        props.placeholder = `请上传${item.label}`;
      } else {
        props.placeholder = `请输入${item.label}`;
      }
    }
    props.vModel = `form.${item.prop}`;
  }
  // 需要引用 js 变量的属性
  if (item.type === 'autocomplete') {
    props.fetchSuggestions = new JsVar({
      name: `${item.prop}FetchSuggestions`,
      code: `/** ${item.label || item.prop}选项数据 */
const ${item.prop}FetchSuggestions = (keyword, callback) => {
  console.log('keyword:', keyword);
  callback(${obj2Str(item.options || [], false, 2)});
};`
    });
  } else if (item.type === 'cascader') {
    props.options = new JsVar({
      name: `${item.prop}CascaderOptions`,
      code: `/** ${item.label || item.prop}级联数据 */
const ${item.prop}CascaderOptions = ref(${obj2Str(item.options || [], false, 0)});`
    });
    props.props = new JsVar({
      name: `${item.prop}CascaderProps`,
      code: `/** ${item.label || item.prop}级联配置 */
const ${item.prop}CascaderProps = reactive(${obj2Str((item.props || {}).props || {}, false, 0)});`
    });
  } else if (item.type === 'treeSelect' || item.type === 'treeMultipleSelect') {
    props.data = new JsVar({
      name: `${item.prop}TreeData`,
      code: `/** ${item.label || item.prop}树数据 */
const ${item.prop}TreeData = ref(${obj2Str(item.options || [], false, 0)});`
    });
  } else if (
    item.type === 'virtualTreeSelect' ||
    item.type === 'virtualTreeMultipleSelect'
  ) {
    props.treeProps = new JsVar({
      name: `${item.prop}TreeProps`,
      code: `/** ${item.label || item.prop}树配置 */
const ${item.prop}TreeProps = reactive(${obj2Str((item.props || {}).treeProps || {}, false, 0)});`
    });
  } else if (
    item.type === 'tableSelect' ||
    item.type === 'tableMultipleSelect'
  ) {
    props.tableProps = new JsVar({
      name: `${item.prop}TableProps`,
      code: `/** ${item.label || item.prop}表格配置 */
const ${item.prop}TableProps = reactive(${obj2Str((item.props || {}).tableProps || {}, false, 0)});`
    });
  } else if (item.type === 'checkCard' || item.type === 'multipleCheckCard') {
    props.items = new JsVar({
      name: `${item.prop}CheckCardItems`,
      code: `/** ${item.label || item.prop}选项数据 */
const ${item.prop}CheckCardItems = ref(${obj2Str(item.options || [], false, 0)});`
    });
  } else if (item.type === 'imageUpload' || item.type === 'fileUpload') {
    props.ref = new JsVar({
      name: `${item.prop}UploadRef`,
      code: `/** ${item.label || item.prop}上传组件实例 */
const ${item.prop}UploadRef = ref(null);`
    });
  }
  return props;
}

/**
 * 获取导入代码和变量声明代码
 * @param items 表单项
 * @param formProps 表单其它属性
 */
export function getImportAndVarCode(items, formProps) {
  const imports = new Set([]);
  const codes = new Set([]);
  eachTree(items, (item) => {
    if (item.type === 'imageUpload') {
      imports.add(
        `import ImageUpload from '@/components/ImageUpload/index.vue';`
      );
    } else if (item.type === 'fileUpload') {
      imports.add(
        `import FileUpload from '@/components/FileUpload/index.vue';`
      );
    } else if (item.type === 'regions') {
      imports.add(
        `import RegionsSelect from '@/components/RegionsSelect/index.vue';`
      );
    } else if (item.type === 'editor') {
      imports.add(
        `import TinymceEditor from '@/components/TinymceEditor/index.vue';`
      );
    }
  });
  if (formProps.showSearchExpand) {
    imports.add(`import { ArrowUp } from '@/components/icons';`);
    imports.add(`import { ArrowDown } from '@/components/icons';`);
  }

  const proImports = new Set([]);
  const proCodes = new Set([]);
  JSON.stringify({ items, formProps }, (_jk, jv) => {
    const jsVar = transformJsVar(jv);
    if (jsVar != null) {
      if (jsVar.imports) {
        jsVar.imports.forEach((code) => {
          imports.add(code);
        });
      }
      if (jsVar.code) {
        codes.add(jsVar.code);
      }
      if (jsVar.proImports) {
        jsVar.proImports.forEach((code) => {
          proImports.add(code);
        });
      }
      if (jsVar.proCode) {
        proCodes.add(jsVar.proCode);
      }
    }
    return jv;
  });

  return {
    imports: [
      `import { ref, reactive, nextTick } from 'vue';`,
      `import { useFormData } from '@/utils/use-form-data';`,
      ...imports
    ],
    codes: [...codes],
    proImports: [
      `import { ref } from 'vue';`,
      `import { useFormData } from '@/utils/use-form-data';`,
      `import ProForm from '@/components/ProForm/index.vue';`,
      ...proImports
    ],
    proCodes: [...proCodes]
  };
}
