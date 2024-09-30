<template>
  <ElePage :multiCard="false">
    <div class="form-builder">
      <div class="form-builder-side">
        <EleCard
          header="表单配置"
          shadow="always"
          :bordered="true"
          :headerStyle="{ padding: '10px 10px 10px 22px' }"
          :bodyStyle="{ padding: '0 10px 6px 10px', flex: 'auto' }"
          style="min-height: 100%; display: flex; flex-direction: column"
        >
          <template #extra>
            <div class="form-builder-action-btn" @click="handleTemplate">
              <ElIcon>
                <LogOutlined />
              </ElIcon>
              <div>模板库</div>
            </div>
          </template>
          <div class="form-builder-tools">
            <div style="display: flex; align-items: center">
              <div style="flex-shrink: 0; margin: 0 6px 0 0">标题宽度</div>
              <div style="flex: 1">
                <ElSelect v-model="formProps.labelWidth" class="ele-fluid">
                  <ElOption
                    v-for="item in labelWidthOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </ElSelect>
              </div>
              <div style="flex-shrink: 0; margin: 0 6px 0 10px">显示列数</div>
              <div style="flex: 1">
                <ElSelect
                  v-model="gridNumber"
                  class="ele-fluid"
                  @change="handleGridNumberChange"
                >
                  <elOption
                    v-for="item in gridOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </ElSelect>
              </div>
              <EleTooltip
                content="更多配置"
                placement="bottom-end"
                :offset="6"
                :popperOptions="{
                  modifiers: [{ name: 'offset', options: { offset: [10, 6] } }]
                }"
              >
                <ElButton
                  class="ele-btn-icon"
                  :icon="SettingOutlined"
                  style="padding-right: 10px; margin-left: 10px"
                  @click="handleMore"
                />
              </EleTooltip>
            </div>
            <div class="form-builder-actions">
              <ElButton
                type="primary"
                class="ele-btn-icon"
                :icon="PlusOutlined"
                @click="handleAdd()"
              >
                <span>添加</span>
                <span class="hidden-xs-only">表单项</span>
              </ElButton>
              <ElButton
                type="primary"
                class="ele-btn-icon"
                :icon="CodeOutlined"
                @click="handlePreview"
              >
                生成代码
              </ElButton>
              <ElePopconfirm
                :width="220"
                placement="top-end"
                content="确定要清空所有表单项吗？"
                :popperOptions="{
                  modifiers: [{ name: 'offset', options: { offset: [20, 8] } }]
                }"
                @confirm="handleClear"
              >
                <template #reference>
                  <ElButton
                    type="danger"
                    class="ele-btn-icon"
                    :icon="DeleteOutlined"
                  >
                    清空
                  </ElButton>
                </template>
              </ElePopconfirm>
              <ElUpload
                action=""
                accept=".json"
                :show-file-list="false"
                :before-upload="handleImport"
              >
                <ElButton class="ele-btn-icon" :icon="UploadOutlined">
                  导入
                </ElButton>
              </ElUpload>
            </div>
          </div>
          <ItemList
            :items="items"
            @add="handleAdd"
            @edit="handleEdit"
            @copy="handleCopy"
            @export="handleExport"
            @remove="handleRemove"
            @updateItems="handleUpdateItems"
          />
          <ElEmpty
            v-if="!items.length"
            description="请添加表单项"
            :imageSize="80"
            style="padding: 88px 0"
          />
        </EleCard>
      </div>
      <div class="form-builder-body">
        <FormPreview
          ref="formPreviewRef"
          :key="formKey"
          :items="items"
          :formProps="formProps"
          :data="formState"
          @unmount="handleFormUnmount"
          @importTemplate="handleTemplateSelect"
        />
      </div>
    </div>
    <ItemAdd v-model="showAdd" @done="handleAddDone" />
    <ItemEdit
      v-model="showEdit"
      :data="current"
      :grid="currentParent ? getGridNumber(currentParent.grid) : gridNumber"
      @done="handleEditDone"
    />
    <PropsEdit
      v-model="showPropsEdit"
      :data="formProps"
      @done="handlePropsEditDone"
    />
    <CodePreview v-model="showPreview" :items="items" :formProps="formProps" />
    <TemplateLibrary v-model="showTemplate" @select="handleTemplateSelect" />
  </ElePage>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  import { EleMessage, findTree, eachTree, mapTree } from 'ele-admin-plus/es';
  import {
    PlusOutlined,
    CodeOutlined,
    DeleteOutlined,
    SettingOutlined,
    LogOutlined,
    UploadOutlined
  } from '@/components/icons';
  import { download } from '@/utils/common';
  import {
    labelWidthOptions,
    gridOptions,
    getGridNumber,
    getFormGrid,
    updateChildrenColSpan,
    generateItemKey,
    useFormBuildStore
  } from './components/util';
  import { isValidKey } from './components/code-util';
  import ItemAdd from './components/item-add.vue';
  import ItemEdit from './components/item-edit.vue';
  import ItemList from './components/item-list.vue';
  import PropsEdit from './components/props-edit.vue';
  import FormPreview from './components/form-preview.vue';
  import CodePreview from './components/code-preview.vue';
  import TemplateLibrary from './components/template-library.vue';
  const formBuildStore = useFormBuildStore();
  let oldGridNumber = 1;
  let updateFormState = true;

  defineOptions({ name: 'FormBuild' });

  /** 表单项 */
  const items = ref([]);

  /** 表单显示列数 */
  const gridNumber = ref(oldGridNumber);

  /** 表单其它属性 */
  const formProps = reactive({ labelWidth: 80 });

  /** 表单预览组件实例 */
  const formPreviewRef = ref(null);

  /** 用于更新表单预览组件 */
  const formKey = ref(0);

  /** 表单预览组件数据缓存 */
  const formState = ref();

  /** 是否显示添加弹窗 */
  const showAdd = ref(false);

  /** 是否显示配置弹窗 */
  const showEdit = ref(false);

  /** 是否显示表单更多配置弹窗 */
  const showPropsEdit = ref(false);

  /** 是否显示代码预览弹窗 */
  const showPreview = ref(false);

  /** 是否显示模板弹窗 */
  const showTemplate = ref(false);

  /** 当前操作的数据 */
  const current = ref(null);

  /** 当前操作的父级数据 */
  const currentParent = ref(null);

  /** 关闭所有的删除确认 */
  const closeAllDelPop = () => {
    formBuildStore.setShowDelPopKey(null);
  };

  /** 打开添加表单项弹窗 */
  const handleAdd = (parent) => {
    currentParent.value = parent || null;
    showAdd.value = true;
    closeAllDelPop();
  };

  /** 打开配置表单项弹窗 */
  const handleEdit = (item, parent) => {
    current.value = item;
    currentParent.value = parent || null;
    showEdit.value = true;
  };

  /** 复制表单项 */
  const handleCopy = (item, parent) => {
    const key = generateItemKey();
    if (findTree(items.value, (d) => d.key === key) != null) {
      EleMessage.error('复制失败, 请重试');
      return;
    }
    const newItem = JSON.parse(JSON.stringify(item));
    newItem.key = key;
    if (newItem.children?.length) {
      let i = 0;
      newItem.children = mapTree(newItem.children, (d) => {
        i++;
        return { ...d, key: `${key}-${i}` };
      });
    }
    if (parent == null) {
      const index = items.value.indexOf(item);
      if (index !== -1) {
        items.value.splice(index, 0, newItem);
        EleMessage.success('复制成功');
      }
    } else if (parent.children != null) {
      const index = parent.children.indexOf(item);
      if (index !== -1) {
        parent.children.splice(index, 0, newItem);
        EleMessage.success('复制成功');
      }
    }
  };

  /** 导出表单项 */
  const handleExport = (item) => {
    const items = mapTree([item], (item) => {
      return { ...item, key: void 0 };
    });
    const result = JSON.stringify(items, void 0, 2);
    download(result, `pro-form-items-${Date.now()}.json`, 'application/json');
  };

  /** 移除表单项 */
  const handleRemove = (item, parent) => {
    if (!parent) {
      const index = items.value.indexOf(item);
      items.value.splice(index, 1);
    } else if (parent.children?.length) {
      const i = parent.children.indexOf(item);
      parent.children.splice(i, 1);
    }
    formKey.value++;
  };

  /** 清空表单项 */
  const handleClear = () => {
    updateFormState = false;
    formState.value = void 0;
    items.value = [];
    formKey.value++;
    closeAllDelPop();
  };

  /** 添加表单项 */
  const handleAddDone = (data) => {
    if (!data.prop || !isValidKey(data.prop)) {
      EleMessage.error(`字段名${data.prop}不合法`);
      return;
    }
    if (findTree(items.value, (d) => d.key === data.key)) {
      EleMessage.error('添加失败, 请重试');
      return;
    }
    if (currentParent.value == null) {
      items.value.push(data);
    } else if (currentParent.value.children == null) {
      currentParent.value.children = [data];
    } else {
      currentParent.value.children.push(data);
    }
    showAdd.value = false;
    formKey.value++;
  };

  /** 保存表单项配置 */
  const handleEditDone = (data) => {
    if (current.value == null) {
      return;
    }
    updateChildrenColSpan(
      current.value.children,
      getGridNumber(current.value.grid),
      getGridNumber(data.grid)
    );
    formPreviewRef.value?.setFieldValue?.(data.prop, void 0);
    Object.assign(current.value, data);
    showEdit.value = false;
    formKey.value++;
  };

  /** 表单项数据拖拽排序改变事件 */
  const handleUpdateItems = (data, parent) => {
    if (!parent) {
      items.value = data;
      formKey.value++;
      return;
    }
    parent.children = data;
    formKey.value++;
  };

  /** 打开表单更多配置弹窗 */
  const handleMore = () => {
    showPropsEdit.value = true;
    closeAllDelPop();
  };

  /** 打开生成代码弹窗 */
  const handlePreview = () => {
    showPreview.value = true;
    closeAllDelPop();
  };

  /** 打开模板弹窗 */
  const handleTemplate = () => {
    showTemplate.value = true;
    closeAllDelPop();
  };

  /** 导入 */
  const handleImport = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result;
      if (typeof content === 'string' && content) {
        try {
          const result = JSON.parse(content);
          if (result == null || !Array.isArray(result)) {
            EleMessage.error('导入失败, 请导入正确的内容');
            return;
          }
          const key = generateItemKey();
          let i = 0;
          const importItems = mapTree(result, (item) => {
            i++;
            return { ...item, key: `${key}-${i}` };
          });
          importItems.forEach((newItem) => {
            items.value.push(newItem);
          });
          EleMessage.success('导入成功');
        } catch (e) {
          console.error(e);
          EleMessage.error('导入失败, 请导入正确的内容');
        }
      }
    };
    reader.readAsText(file);
    return false;
  };

  /** 加载模板 */
  const handleTemplateSelect = (config) => {
    const oldKeys = [];
    let errorKey;
    eachTree(config.items, (d) => {
      if (oldKeys.includes(d.key)) {
        errorKey = d.key;
        return false;
      }
      oldKeys.push(d.key);
    });
    if (errorKey) {
      EleMessage.error('解析失败, 请重试');
      return;
    }
    updateFormState = false;
    formState.value = void 0;
    gridNumber.value = getGridNumber(config.grid);
    oldGridNumber = gridNumber.value;
    formProps.labelPosition = config.labelPosition;
    formProps.labelWidth = config.labelWidth ?? 80;
    formProps.grid = config.grid;
    formProps.rowProps = config.rowProps;
    formProps.footer = config.footer;
    formProps.footerProps = config.footerProps;
    formProps.footerStyle = config.footerStyle;
    formProps.footerColProps = config.footerColProps;
    formProps.showSearchExpand = config.showSearchExpand;
    formProps.style = config.style;
    items.value = config.items;
    formKey.value++;
  };

  /** 保存表单更多配置 */
  const handlePropsEditDone = (data) => {
    formProps.labelPosition = data.labelPosition;
    formProps.rowProps = data.rowProps;
    formProps.footer = data.footer;
    formProps.footerProps = data.footerProps;
    formProps.footerStyle = data.footerStyle;
    formProps.footerColProps = data.footerColProps;
    formProps.showSearchExpand = data.showSearchExpand;
    formProps.style = data.style;
  };

  /** 表单预览组件销毁事件 */
  const handleFormUnmount = (form) => {
    if (!updateFormState) {
      updateFormState = true;
      return;
    }
    formState.value = form;
  };

  /** 显示列数下拉选择改变事件 */
  const handleGridNumberChange = () => {
    formProps.grid = getFormGrid(gridNumber.value);
    updateChildrenColSpan(items.value, oldGridNumber, gridNumber.value);
    oldGridNumber = gridNumber.value;
  };
</script>

<style lang="scss" scoped>
  .form-builder {
    display: flex;
    min-height: 486px;
  }

  .form-builder-side {
    flex-shrink: 0;
    width: 369px;

    .ele-btn-icon {
      padding-left: 10px;
      padding-right: 8px;
      margin: 0;
    }

    .form-builder-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 12px 0 0 0;
    }

    .form-builder-action-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      color: var(--el-color-primary);
      font-size: 14px;
      font-weight: normal;
      cursor: pointer;
      padding: 4px 8px;
      border-radius: 6px;
      box-sizing: border-box;
      transition: all 0.2s;
      user-select: none;

      &:hover {
        background: var(--el-fill-color-light);
      }
    }
  }

  .form-builder-body {
    flex: 1;
    margin-left: 16px;
    overflow: hidden;
  }

  .form-builder-body :deep(> .ele-card) {
    & > .ele-card-body,
    & > .ele-card-body > .el-form {
      flex: auto;
      box-sizing: border-box;
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }
  }

  .form-builder-tools {
    position: sticky;
    top: 0;
    z-index: 101;
    background: var(--el-bg-color);
    padding: 12px 0 6px 0;

    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: -8px;
      width: 8px;
      background: var(--el-bg-color);
      z-index: -1;
    }

    &::before {
      left: auto;
      right: -8px;
    }
  }

  @media screen and (max-width: 1200px) {
    .form-builder {
      display: block;
    }

    .form-builder-side {
      width: 100%;
      margin-bottom: 16px;
    }

    .form-builder-body {
      margin-left: 0;
    }
  }
</style>
