<!-- eslint-disable vue/no-v-html -->
<template>
  <EleDrawer
    :size="980"
    title="代码预览"
    :appendToBody="true"
    style="max-width: 100%"
    v-model="visible"
    :bodyStyle="{ padding: '8px', height: '100%' }"
    @open="handleOpen"
    @closed="handleClosed"
  >
    <div class="code-view">
      <div class="code-header">
        <div class="code-tabs">
          <div
            v-for="item in tabs"
            :key="item.value"
            :class="['code-tab', { 'is-active': active === item.value }]"
            @click="handleTabClick(item.value)"
          >
            {{ item.label }}
          </div>
        </div>
        <div class="code-tools">
          <EleCopyable
            :text="data.code"
            :iconProps="{ style: { color: '#d6dde3' } }"
            :tooltip="{
              placement: 'bottom',
              bg: '#383838',
              arrowBg: '#383838'
            }"
          />
          <EleTooltip
            content="下载"
            placement="bottom"
            :offset="6"
            bg="#383838"
            arrowBg="#383838"
          >
            <ElIcon class="code-icon-tool" @click="handleDownload">
              <DownloadOutlined />
            </ElIcon>
          </EleTooltip>
        </div>
      </div>
      <div class="code-body">
        <div class="code-line-numbers">
          <div v-for="n in data.lines" :key="n">{{ n }}</div>
        </div>
        <pre v-html="data.html"></pre>
      </div>
    </div>
  </EleDrawer>
</template>

<script setup>
  import { ref } from 'vue';
  import hljs from 'highlight.js';
  import 'highlight.js/styles/github-dark.css';
  import xml from 'highlight.js/lib/languages/xml';
  import { mapTree, pick } from 'ele-admin-plus/es';
  import { DownloadOutlined } from '@/components/icons';
  import { download } from '@/utils/common';
  import { useFormData } from '@/utils/use-form-data';
  import { getFormInitValue } from './util';
  import {
    templateEngine,
    obj2Str,
    addIndentChar,
    generatePropsCode
  } from './code-util';
  import {
    proTemplate,
    formTemplate,
    generateContentCode,
    generateRuleCode,
    getComponentProps,
    getImportAndVarCode
  } from './code-template';
  import { transformProJsVar } from './code-js-var';

  hljs.registerLanguage('vue', xml);

  const props = defineProps({
    /** 表单项 */
    items: {
      type: Array,
      required: true
    },
    /** 表单其它属性 */
    formProps: {
      type: Object,
      required: true
    }
  });

  /** 弹窗是否打开 */
  const visible = defineModel({ type: Boolean });

  /** 数据 */
  const [data, resetData, assignData] = useFormData({
    code: '',
    html: '',
    lines: [1]
  });

  /** 选项卡 */
  const tabs = ref([
    { label: 'ProForm', value: 0 },
    { label: 'ElForm', value: 1 }
  ]);

  /** 选项卡选中 */
  const active = ref(0);

  /** 去掉 items 的多余属性 */
  const getNormalizeItems = (isEl) => {
    let i = 0;
    const items = mapTree(props.items, (d) => {
      i++;
      const k = `item-${String(i).padStart(4, '0')}`;
      const item = { ...d, key: k, initValue: void 0 };
      if (isEl) {
        item.props = getComponentProps(item);
        item.key = void 0;
      }
      return item;
    });
    return JSON.parse(JSON.stringify(items)); // 去掉空值
  };

  /** 组装生成 ProForm 代码需要的模板数据 */
  const getProTemplateData = () => {
    const formProps = props.formProps ? { ...props.formProps } : {};
    const init = getFormInitValue(props.items);
    const items = getNormalizeItems();
    const { proImports, proCodes } = getImportAndVarCode(items, formProps);
    const sfe = formProps.showSearchExpand;
    formProps.submitText = sfe ? '搜索' : void 0;
    const pc = generatePropsCode(formProps, false, 4, false, transformProJsVar);
    return {
      modelCode: obj2Str(init, false, 2, transformProJsVar),
      proFormItemsCode: obj2Str(items, false, 2, transformProJsVar),
      proFormPropsCode: pc,
      proFormImportCode: proImports.join('\n  '),
      proFormVarCode: addIndentChar(proCodes.join('\n\n'), '  '),
      showFooterExpand: sfe
    };
  };

  /** 组装生成 ElForm 代码需要的模板数据 */
  const getElTemplateData = () => {
    const formProps = props.formProps || {};
    const init = getFormInitValue(props.items);
    const items = getNormalizeItems(true);
    const elProps = pick(formProps, ['labelPosition', 'labelWidth', 'style']);
    const { imports, codes } = getImportAndVarCode(items, formProps);
    const sfe = formProps.showSearchExpand;
    const formContentCode = generateContentCode(items, formProps, sfe);
    return {
      modelCode: obj2Str(init, false, 2),
      formContentCode,
      formPropsCode: generatePropsCode(elProps, false, 4, false),
      formRuleCode: generateRuleCode(items),
      formImportCode: imports.join('\n  '),
      formVarCode: addIndentChar(codes.join('\n\n'), '  '),
      showFooter: formProps.footer,
      showFooterExpand: sfe,
      obj2Str
    };
  };

  /** 生成 ProForm 的代码 */
  const getProFormCode = () => {
    return templateEngine(proTemplate, getProTemplateData());
  };

  /** 生成 ElForm 的代码 */
  const getElFormCode = () => {
    return templateEngine(formTemplate, getElTemplateData());
  };

  /** 选项卡点击事件 */
  const handleTabClick = (value, force) => {
    if (!force && active.value === value) {
      return;
    }
    active.value = value;
    const code = active.value === 1 ? getElFormCode() : getProFormCode();
    const html = hljs.highlight(code, { language: 'vue' }).value;
    const lines = html.split('\n').map((_, i) => i + 1);
    assignData({ code, html, lines });
  };

  /** 下载 */
  const handleDownload = () => {
    download(data.code, 'index.vue', 'text/plain;charset=utf-8');
  };

  /** 弹窗关闭事件 */
  const handleClosed = () => {
    resetData();
  };

  /** 弹窗打开事件 */
  const handleOpen = () => {
    handleTabClick(active.value, true);
  };
</script>

<style lang="scss" scoped>
  .code-view {
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid #000;
    background: #1e1e1e;
    border-radius: 8px;
    overflow: hidden;
  }

  .code-body {
    flex: 1;
    color: #e6edf3;
    box-sizing: border-box;
    overflow: auto;
    display: flex;
    align-items: flex-start;
    --ele-scrollbar-color: #5e5e5e;
    --ele-scrollbar-hover-color: #707070;

    & > pre {
      flex: 1;
      margin: 0;
      padding: 12px;
      box-sizing: border-box;
      font-family: monospace;
    }
  }

  .code-line-numbers {
    flex-shrink: 0;
    color: #8b949e;
    font-family: monospace;
    padding: 12px 0;
    min-width: 38px;
    background: #1e1e1e;
    border-right: 1px solid #000;
    box-sizing: border-box;
    text-align: center;
    user-select: none;
    position: sticky;
    left: 0;

    & > div {
      max-height: 100%;
    }
  }

  .code-header {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #000;
    box-sizing: border-box;
  }

  .code-tools {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 6px 16px 6px 0;

    & > .ele-copyable {
      border-radius: 4px;
      background: #444444;
      transition: background-color 0.2s;

      :deep(.ele-copyable-icon) {
        padding: 4px;
        margin: 0;
      }

      &:hover {
        background: #707070;
      }
    }
  }

  .code-icon-tool {
    width: auto;
    height: auto;
    font-size: 15px;
    color: #d6dde3;
    background: #444444;
    padding: 4px;
    margin-left: 8px;
    border-radius: 4px;
    box-sizing: border-box;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background: #707070;
    }
  }

  .code-tabs {
    flex: 1;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .code-tab {
    height: 35px;
    line-height: 35px;
    color: #e6edf3;
    font-weight: bold;
    font-family: monospace;
    padding: 0 2px;
    margin: 0 0 0 16px;
    border-bottom: 2px solid transparent;
    transition: all 0.2s;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
      color: var(--el-color-primary);
    }

    &.is-active {
      color: var(--el-color-primary);
      border-bottom-color: var(--el-color-primary);
    }
  }
</style>
