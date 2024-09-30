<template>
  <VueDraggable
    itemKey="key"
    :modelValue="items"
    group="formItemList"
    :forceFallback="true"
    :setData="() => void 0"
    handle=".list-item-handle"
    :componentData="{ class: 'list-wrapper' }"
    @update:modelValue="updateModelValue"
  >
    <template #item="{ element }">
      <div class="list-item">
        <div class="list-item-body">
          <EleText
            size="sm"
            :icon="DragOutlined"
            type="placeholder"
            class="list-item-handle"
          />
          <div
            class="list-item-content"
            :title="`${element.prop} ${element.label}`"
          >
            <div class="list-item-prop">{{ element.prop }}</div>
            <EleText v-if="element.label" class="list-item-label" size="xs">
              {{ element.label }}
            </EleText>
          </div>
          <EleText
            v-if="isContainerType(element) || isViewType(element)"
            class="list-item-tool"
            type="primary"
            :icon="PlusOutlined"
            title="添加子级"
            @click="addItem(element)"
          />
          <EleText
            class="list-item-tool"
            type="primary"
            :icon="EditOutlined"
            title="修改配置"
            @click="editItem(element)"
          />
          <EleText
            class="list-item-tool"
            type="primary"
            :icon="CopyOutlined"
            :iconStyle="{ transform: 'scale(0.92)' }"
            title="复制此项"
            @click="copyItem(element)"
          />
          <EleText
            class="list-item-tool"
            type="primary"
            :icon="DownloadOutlined"
            :iconStyle="{ transform: 'scale(1.1) translateY(-0.6px)' }"
            title="导出此项"
            @click="exportItem(element)"
          />
          <EleText
            class="list-item-tool"
            type="danger"
            :icon="DeleteOutlined"
            title="删除此项"
            @click="setShowDelPopKey(element.key)"
          />
          <div v-if="showDelPopKey === element.key" class="list-item-del-pop">
            <div class="list-item-btn" @click="setShowDelPopKey(null)">
              取消
            </div>
            <div class="list-item-btn is-danger" @click="removeItem(element)">
              确认删除
            </div>
          </div>
        </div>
        <ItemList
          v-if="isContainerType(element) || isViewType(element)"
          :items="element.children || []"
          :parent="element"
          @updateItems="handleUpdateItems"
          @add="handleAdd"
          @edit="handleEdit"
          @copy="handleCopy"
          @export="handleExport"
          @remove="handleRemove"
        />
      </div>
    </template>
  </VueDraggable>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  import VueDraggable from 'vuedraggable';
  import {
    DragOutlined,
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    CopyOutlined,
    DownloadOutlined
  } from '@/components/icons';
  import {
    defaultTypes,
    containerTypes,
    viewTypes
  } from '@/components/ProForm/util';
  import { useFormBuildStore } from './util';

  /** 属性 */
  const props = defineProps({
    /** 数据 */
    items: {
      type: Array,
      required: true
    },
    /** 父级数据 */
    parent: Object
  });

  /** 事件 */
  const emit = defineEmits([
    'updateItems',
    'add',
    'edit',
    'copy',
    'export',
    'remove'
  ]);

  /** 判断是否是容器类型 */
  const isContainerType = (item) => {
    if (!item?.type) {
      return false;
    }
    if (containerTypes.includes(item.type)) {
      return true;
    }
    return item.itemType === 'container' && !defaultTypes.includes(item.type);
  };

  /** 判断是否是展示类型 */
  const isViewType = (item) => {
    if (!item?.type) {
      return false;
    }
    if (viewTypes.includes(item.type)) {
      return true;
    }
    return item.itemType === 'view' && !defaultTypes.includes(item.type);
  };

  /** 排序更新数据 */
  const updateModelValue = (data) => {
    handleUpdateItems(data, props.parent);
  };

  /** 添加按钮点击 */
  const addItem = (item) => {
    handleAdd(item ?? props.parent);
  };

  /** 编辑按钮点击 */
  const editItem = (item) => {
    handleEdit(item, props.parent);
  };

  /** 复制按钮点击 */
  const copyItem = (item) => {
    handleCopy(item, props.parent);
  };

  /** 导出按钮点击 */
  const exportItem = (item) => {
    handleExport(item, props.parent);
  };

  /** 移除按钮点击 */
  const removeItem = (item) => {
    handleRemove(item, props.parent);
  };

  /** 排序更新事件 */
  const handleUpdateItems = (data, parent) => {
    setShowDelPopKey(null);
    emit('updateItems', data, parent);
  };

  /** 添加事件 */
  const handleAdd = (parent) => {
    setShowDelPopKey(null);
    emit('add', parent);
  };

  /** 编辑事件 */
  const handleEdit = (item, parent) => {
    setShowDelPopKey(null);
    emit('edit', item, parent);
  };

  /** 复制事件 */
  const handleCopy = (item, parent) => {
    setShowDelPopKey(null);
    emit('copy', item, parent);
  };

  /** 导出事件 */
  const handleExport = (item, parent) => {
    setShowDelPopKey(null);
    emit('export', item, parent);
  };

  /** 移除事件 */
  const handleRemove = (item, parent) => {
    setShowDelPopKey(null);
    emit('remove', item, parent);
  };

  /** 当前显示的删除确认 */
  const formBuildStore = useFormBuildStore();
  const { showDelPopKey } = storeToRefs(formBuildStore);

  /** 设置当前显示的删除确认 */
  const setShowDelPopKey = (key) => {
    formBuildStore.setShowDelPopKey(key);
  };
</script>

<style lang="scss" scoped>
  /* 列表容器 */
  .list-wrapper {
    padding: 6px 0;
    box-sizing: border-box;
    user-select: none;
  }

  /* item */
  .list-item {
    border-radius: 6px;
    border: 1px solid var(--el-border-color);
    transition: (color 0.2s, border-color 0.2s, background-color 0.2s);
    position: relative;
    z-index: 4;

    & + .list-item {
      margin-top: 6px;
    }

    /* 子级容器 */
    & > .list-wrapper {
      padding-left: 16px;
      padding-right: 6px;
      border-top: 1px solid var(--el-border-color);
      transition: border-color 0.2s;
    }
  }

  /* item 拖拽时样式 */
  .list-item.sortable-ghost {
    border-style: dashed;
    border-color: var(--el-color-primary);
    cursor: move;

    & > .list-item-body {
      visibility: hidden;
    }
  }

  .list-item.sortable-fallback {
    background: var(--el-color-primary-light-8);
    border-color: var(--el-color-primary-light-5);

    & > .list-item-body .list-item-tool,
    & > .list-item-body .list-item-del-pop {
      display: none;
    }
  }

  /* 拖拽时隐藏子级层次结构 */
  .list-item.sortable-ghost > .list-wrapper,
  .list-item.sortable-fallback > .list-wrapper {
    visibility: hidden;
  }

  /* item body */
  .list-item-body {
    display: flex;
    align-items: center;
    height: 32px;
    padding: 0 6px;
    box-sizing: border-box;
    position: relative;
  }

  /* body hover 时高亮 item 边框 */
  .list-item:has(> .list-item-body:hover) {
    border-color: var(--el-color-primary-light-5);

    & > .list-wrapper {
      border-color: var(--el-color-primary-light-5);
    }
  }

  /* 拖拽手柄 */
  .list-item-handle {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 4px 0 0;
    position: static;

    /* 增大拖拽手柄触发面积为整个 item body */
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      cursor: move;
      z-index: 3;
    }
  }

  /* 属性名和字段名 */
  .list-item-content {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    word-break: break-all;
    text-overflow: ellipsis;
  }

  .list-item-prop {
    margin-right: 4px;
  }

  .list-item-prop,
  .list-item-label {
    display: inline;
  }

  /* 操作按钮 */
  .list-item-tool {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    font-size: 12px;
    border-radius: 4px;
    transition: all 0.2s;
    position: relative;
    z-index: 4;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    display: none;

    &:hover {
      background: var(--el-fill-color);
    }
  }

  /* item body hover 时才显示操作按钮 */
  .list-item-body:hover {
    .list-item-tool {
      display: flex;
    }
  }

  /* 没有子级时弱化容器 */
  .list-item > .list-wrapper:not(:has(> .list-item:not(.sortable-fallback))) {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    padding-top: 15px;
    padding-bottom: 15px;
    border-color: transparent;
  }

  /* 删除确认框 */
  .list-item-del-pop {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-left: 6px;
    background: var(--el-bg-color);
    border-radius: 6px;
    z-index: 5;
  }

  .list-item-btn {
    height: 20px;
    padding: 0 4px;
    margin-right: 6px;
    border-radius: 4px;
    border: 1px solid var(--el-border-color);
    transition: (color 0.2s, border-color 0.2s, background-color 0.2s);
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
      color: var(--el-color-primary);
      border-color: var(--el-color-primary);
    }

    &.is-danger {
      color: #fff;
      border-color: var(--el-color-danger);
      background: var(--el-color-danger);

      &:hover {
        border-color: var(--el-color-danger-light-3);
        background: var(--el-color-danger-light-3);
      }
    }
  }

  /* 拖拽移动时让光标始终为 move */
  .list-wrapper:has(.list-item.sortable-ghost) {
    cursor: move;

    .list-item-body {
      pointer-events: none;
    }

    /* 隐藏操作按钮 */
    .list-item-body .list-item-tool,
    .list-item-body .list-item-del-pop {
      display: none;
    }
  }
</style>
