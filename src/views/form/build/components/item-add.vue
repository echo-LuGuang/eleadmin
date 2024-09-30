<template>
  <EleDrawer
    :size="980"
    title="添加表单项"
    :appendToBody="true"
    style="max-width: 100%"
    v-model="visible"
    :bodyStyle="{
      padding: 0,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }"
    @open="handleOpen"
    @closed="handleClosed"
  >
    <div class="cover-wrapper">
      <div class="item-group-label">表单类型组件</div>
      <EleCheckCard
        :items="items"
        v-model="form.type"
        :row="{ gutter: 20 }"
        itemClass="item-cover-wrap"
        :style="{ padding: '0 20px' }"
      >
        <template #item="{ item }">
          <div class="item-cover">
            <component :is="item.cover" />
          </div>
          <div>{{ item.label }}</div>
        </template>
      </EleCheckCard>
      <div class="item-group-label">展示类型组件</div>
      <EleCheckCard
        :items="viewItems"
        v-model="form.type"
        :row="{ gutter: 20 }"
        itemClass="item-cover-wrap"
        :style="{ padding: '0 20px' }"
      >
        <template #item="{ item }">
          <div class="item-cover">
            <component :is="item.cover" />
          </div>
          <div>{{ item.label }}</div>
        </template>
      </EleCheckCard>
      <div class="item-group-label">容器类型组件</div>
      <EleCheckCard
        :items="containerItems"
        v-model="form.type"
        :row="{ gutter: 20 }"
        itemClass="item-cover-wrap"
        :style="{ padding: '0 20px' }"
      >
        <template #item="{ item }">
          <div class="item-cover">
            <GridSelect v-model="tableGrid" v-if="item.value === 'table'" />
            <TabsSelect v-model="tabSize" v-else-if="item.value === 'tabs'" />
            <ColsSelect v-model="rowCols" v-else-if="item.value === 'row'" />
            <CollapseItemsSelect
              v-model="collapseItems"
              v-else-if="item.value === 'collapse'"
            />
            <component v-else :is="item.cover" />
          </div>
          <div>{{ item.label }}</div>
        </template>
      </EleCheckCard>
    </div>
    <div class="footer-bar">
      <div style="flex-shrink: 0">
        {{ form.type && viewTypes.includes(form.type) ? '文本：' : '标题：' }}
      </div>
      <div style="flex: 1">
        <ElInput
          clearable
          v-model="form.label"
          placeholder="请输入标题"
          :disabled="!!(form.type && ['tabs', 'table'].includes(form.type))"
        />
      </div>
      <div style="flex-shrink: 0; width: 70px; text-align: right">
        {{
          form.type &&
          (viewTypes.includes(form.type) ||
            containerTypes.includes(form.type) ||
            form.type === 'table')
            ? 'key：'
            : '字段名：'
        }}
      </div>
      <div style="flex: 1">
        <ElInput clearable v-model="form.prop" placeholder="请输入字段名" />
      </div>
    </div>
    <template #footer>
      <ElButton @click="handleCancel">取消</ElButton>
      <ElButton type="primary" @click="save">确定</ElButton>
    </template>
  </EleDrawer>
</template>

<script setup>
  import { ref } from 'vue';
  import { useFormData } from '@/utils/use-form-data';
  import { viewTypes, containerTypes } from '@/components/ProForm/util';
  import { itemTypes } from './item-types';
  import { getOptionsAndProps, generateItemKey } from './util';
  import { covers } from './covers';
  import GridSelect from './grid-select.vue';
  import TabsSelect from './tabs-select.vue';
  import ColsSelect from './cols-select.vue';
  import CollapseItemsSelect from './collapse-items-select.vue';
  let id = 1;

  const emit = defineEmits(['done']);

  /** 弹窗是否打开 */
  const visible = defineModel({ type: Boolean });

  /** 获取卡片数据 */
  function getCardItems(items) {
    return items.map((d) => {
      return {
        ...d,
        col: { md: 6, sm: 8, xs: 12 },
        cover: covers[d.value]
      };
    });
  }

  /** 表单类型组件列表 */
  const items = getCardItems(
    itemTypes.filter(
      (d) => !viewTypes.includes(d.value) && !containerTypes.includes(d.value)
    )
  );

  /** 展示类型组件列表 */
  const viewItems = getCardItems(
    itemTypes.filter((d) => viewTypes.includes(d.value))
  );

  /** 容器类型组件列表 */
  const containerItems = getCardItems(
    itemTypes.filter(
      (d) =>
        containerTypes.includes(d.value) &&
        !['collapseItem', 'col'].includes(d.value)
    )
  );

  /** 配置项表单数据 */
  const [form, resetFields, assignFields] = useFormData({
    key: void 0,
    label: '',
    prop: '',
    type: void 0
  });

  /** 表格添加的行列数 */
  const tableGrid = ref([1, 1]);

  /** 选项卡添加的数量 */
  const tabSize = ref(1);

  /** 栅格添加的数量 */
  const rowCols = ref(1);

  /** 折叠面板添加的数量 */
  const collapseItems = ref(1);

  /** 关闭弹窗 */
  const handleCancel = () => {
    visible.value = false;
  };

  /** 获取字段名和标题 */
  const getItemPropAndLabel = () => {
    const no = String(id).padStart(4, '0');
    return [`f${no}`, `字段${no}`];
  };

  /** 保存表单项配置 */
  const save = () => {
    id++;
    const prop = form.prop || getItemPropAndLabel()[0];
    const { options, props } = getOptionsAndProps(form.type);
    const isView = form.type != null && viewTypes.includes(form.type);
    const isContainer = form.type != null && containerTypes.includes(form.type);
    const item = {
      ...form,
      prop,
      props: props ? JSON.parse(props) : void 0,
      options: options ? JSON.parse(options) : void 0,
      required: isView || isContainer || form.type === 'text' ? void 0 : true
    };
    // 步骤条添加子级
    if (item.type === 'steps') {
      item.label = '';
      item.props = { finishStatus: 'success' };
      item.props.items = Array.from({ length: 3 }).map((_, i) => {
        const cId = String(i + 1).padStart(2, '0');
        return { title: `步骤${cId}`, description: `步骤${cId}的描述内容` };
      });
    } else if (item.type === 'collapse') {
      // 折叠面板添加子级
      item.label = '';
      item.props = { accordion: true };
      item.children = Array.from({ length: collapseItems.value || 0 }).map(
        (_, i) => {
          const cId = String(i + 1).padStart(2, '0');
          const key = '_item_' + cId;
          const child = {
            key: item.key + key,
            label: `折叠面板${cId}`,
            prop: prop + key,
            type: 'collapseItem',
            children: [
              {
                key: item.key + key + '_content',
                label: `内容${cId}`,
                prop: prop + key + '_content',
                type: 'div'
              }
            ]
          };
          return child;
        }
      );
    } else if (item.type === 'row') {
      // 栅格添加子级
      item.label = '';
      item.props = { gutter: 16 };
      item.children = Array.from({ length: rowCols.value || 0 }).map((_, i) => {
        const cId = String(i + 1).padStart(2, '0');
        const key = '_col_' + cId;
        const child = {
          key: item.key + key,
          label: '',
          prop: prop + key,
          type: 'col',
          props: { span: 12 },
          children: [
            {
              key: item.key + key + '_content',
              label: `内容${cId}`,
              prop: prop + key + '_content',
              type: 'div',
              props: { style: { marginBottom: '16px' } }
            }
          ]
        };
        return child;
      });
    } else if (item.type === 'tabs') {
      // 选项卡添加子级
      item.label = '';
      item.children = Array.from({ length: tabSize.value || 0 }).map((_, i) => {
        const cId = String(i + 1).padStart(2, '0');
        const key = '_tab_' + cId;
        const child = {
          key: item.key + key,
          label: `选项卡${cId}`,
          prop: prop + key,
          type: 'div'
        };
        return child;
      });
    } else if (item.type === 'table') {
      // 添加表格子级
      item.label = '';
      item.props = {
        border: true,
        hasHeader: false,
        style: { tableLayout: 'fixed' }
      };
      item.children = Array.from({ length: tableGrid.value[0] || 0 }).map(
        (_, i) => {
          const iId = String(i + 1).padStart(2, '0');
          const childs = Array.from({ length: tableGrid.value[1] || 0 }).map(
            (_, j) => {
              const k = '_td_' + iId + '_' + String(j + 1).padStart(2, '0');
              const child = {
                key: item.key + k,
                label: '',
                prop: prop + k,
                type: 'div',
                props: { is: 'td' }
              };
              return child;
            }
          );
          const key = '_tr_' + iId;
          const childItem = {
            key: item.key + key,
            label: '',
            prop: prop + key,
            type: 'div',
            props: { is: 'tr' },
            children: childs
          };
          return childItem;
        }
      );
    }
    emit('done', item);
    form.prop = getItemPropAndLabel()[0];
    form.key = generateItemKey();
  };

  /** 弹窗关闭事件 */
  const handleClosed = () => {
    resetFields();
  };

  /** 弹窗打开事件 */
  const handleOpen = () => {
    const key = generateItemKey();
    const [prop, label] = getItemPropAndLabel();
    assignFields({ key, prop, label, type: 'input' });
  };
</script>

<style lang="scss" scoped>
  .cover-wrapper {
    flex: 1;
    overflow: auto;
    padding-top: 12px;
    background: var(--el-bg-color-page);

    :deep(.ele-check-card-group .item-cover-wrap.ele-check-card) {
      font-size: 13px;
      padding: 6px 12px;
      margin: 0 0 20px 0;
      background: var(--el-bg-color);
      border: 2px solid transparent;
      transition: all 0.24s;

      &:hover {
        transform: translateY(-8px);
        box-shadow: var(--el-box-shadow-light);
      }

      &.is-checked {
        border-color: var(--el-color-primary);
      }
    }

    .item-cover {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 174px;
      height: 120px;
      margin: 0 auto;
    }
  }

  .footer-bar {
    display: flex;
    align-items: center;
    padding: 16px 20px;
    box-sizing: border-box;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.08);
    position: relative;
    z-index: 6;
  }

  .item-group-label {
    font-size: 12px;
    font-weight: 600;
    color: var(--el-color-primary);
    padding: 0 0 12px 22px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 10px;
      top: 50%;
      width: 4px;
      height: 12px;
      margin-top: -12px;
      border-radius: 2px;
      background: var(--el-color-primary);
    }
  }
</style>
