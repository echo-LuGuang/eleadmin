<template>
  <EleDrawer
    :size="980"
    title="模板库"
    :appendToBody="true"
    style="max-width: 100%"
    v-model="visible"
    :bodyStyle="{
      height: '100%',
      overflow: 'auto',
      padding: '20px 20px 0 20px',
      background: 'var(--el-bg-color-page)'
    }"
  >
    <ElRow :gutter="20">
      <ElCol v-for="item in items" :key="item.name" :md="8" :sm="12" :xs="24">
        <EleCard
          :body-style="{ padding: '10px 16px 0 16px' }"
          class="library-item"
          @click="handleSelect(item)"
        >
          <div>{{ item.name }}</div>
          <div style="height: 228px; padding-top: 14px; box-sizing: border-box">
            <component :is="item.cover" />
          </div>
        </EleCard>
      </ElCol>
    </ElRow>
  </EleDrawer>
</template>

<script setup>
  import { ElMessageBox } from 'element-plus/es';
  import { mapTree } from 'ele-admin-plus/es';
  import {
    formSingleConfig,
    formMultipleConfig,
    formGroupConfig,
    formQuestionConfig,
    formResumeConfig,
    formResumeViewConfig,
    formTableConfig,
    formTableViewConfig,
    formTabsConfig,
    formSearchConfig,
    formDivProConfig
  } from './template-config';
  import CoverSingle from './covers/templates/cover-single.vue';
  import CoverMultiple from './covers/templates/cover-multiple.vue';
  import CoverGroup from './covers/templates/cover-group.vue';
  import CoverQuestion from './covers/templates/cover-question.vue';
  import CoverResume from './covers/templates/cover-resume.vue';
  import CoverResumeView from './covers/templates/cover-resume-view.vue';
  import CoverTable from './covers/templates/cover-table.vue';
  import CoverTableView from './covers/templates/cover-table-view.vue';
  import CoverTabs from './covers/templates/cover-tabs.vue';
  import CoverSearch from './covers/templates/cover-search.vue';
  import CoverDiv from './covers/templates/cover-div.vue';

  const emit = defineEmits(['select']);

  /** 弹窗是否打开 */
  const visible = defineModel({ type: Boolean });

  /** 数据 */
  const items = [
    {
      name: '单列表单',
      cover: CoverSingle,
      config: formSingleConfig
    },
    {
      name: '多列表单',
      cover: CoverMultiple,
      config: formMultipleConfig
    },
    {
      name: '分组表单',
      cover: CoverGroup,
      config: formGroupConfig
    },
    {
      name: '问卷表单',
      cover: CoverQuestion,
      config: formQuestionConfig
    },
    {
      name: '简历表单',
      cover: CoverResume,
      config: formResumeConfig
    },
    {
      name: '只读简历表单',
      cover: CoverResumeView,
      config: formResumeViewConfig
    },
    {
      name: '表格表单',
      cover: CoverTable,
      config: formTableConfig
    },
    {
      name: '只读表格表单',
      cover: CoverTableView,
      config: formTableViewConfig
    },
    {
      name: '选项卡表单',
      cover: CoverTabs,
      config: formTabsConfig
    },
    {
      name: '搜索表单',
      cover: CoverSearch,
      config: formSearchConfig
    },
    {
      name: 'div高级示例',
      cover: CoverDiv,
      config: formDivProConfig
    }
  ];

  /** 选择模板 */
  const handleSelect = (template, confirm) => {
    const config = JSON.parse(JSON.stringify(template.config));
    let i = 0;
    config.items = mapTree(config.items, (item) => {
      i++;
      return { ...item, key: `${template.name}-item-${i}` };
    });
    if (confirm === false) {
      visible.value = false;
      emit('select', config);
      return;
    }
    ElMessageBox.confirm(
      `确定要加载模板“${template.name}”吗?<br/>
      <span style="font-size:12px;color:var(--el-color-danger);">* 此操作会覆盖掉当前的全部表单配置</span>`,
      '加载模板',
      {
        type: 'warning',
        draggable: true,
        closeOnClickModal: false,
        dangerouslyUseHTMLString: true
      }
    )
      .then(() => {
        visible.value = false;
        emit('select', config);
      })
      .catch(() => {});
  };

  /** 默认加载第一个模板 */
  if (items.length) {
    handleSelect(items[0], false);
  }
</script>

<style lang="scss" scoped>
  .library-item {
    margin: 0 0 20px 0;
    border: 2px solid transparent;
    transition: all 0.24s;
    cursor: pointer;

    &:hover {
      transform: translateY(-8px);
      border-color: var(--el-color-primary);
      box-shadow: var(--el-box-shadow-light);
    }
  }
</style>
