<template>
  <EleCard
    header="预览"
    shadow="always"
    :bordered="true"
    :headerStyle="{ padding: '10px 10px 10px 22px' }"
    :bodyStyle="{ padding: 0, display: 'flex', flexDirection: 'column' }"
    style="min-height: 100%; display: flex; flex-direction: column"
  >
    <ProForm
      v-bind="proFormProps"
      ref="proFormRef"
      :model="form"
      :items="formItems"
      :validateOnRuleChange="false"
      :submitText="proFormProps.showSearchExpand ? '搜索' : void 0"
      v-model:searchExpand="form.searchExpand"
      @updateValue="setFieldValue"
      @submit="handleSubmit"
      @reset="handleReset"
    />
    <template #extra>
      <div class="header-action-btn" @click="handleExport">
        <ElIcon>
          <DownloadOutlined style="transform: scale(1.1) translateY(-0.4px)" />
        </ElIcon>
        <div>导出</div>
      </div>
      <ElUpload
        action=""
        accept=".json"
        :show-file-list="false"
        :before-upload="handleImport"
        class="header-action-btn"
      >
        <div class="header-action-btn-inner">
          <ElIcon>
            <UploadOutlined style="transform: scale(1.04)" />
          </ElIcon>
          <div>导入</div>
        </div>
      </ElUpload>
    </template>
  </EleCard>
</template>

<script setup>
  import {
    ref,
    onBeforeUnmount,
    onMounted,
    nextTick,
    computed,
    watch
  } from 'vue';
  import { ElMessageBox } from 'element-plus/es';
  import { EleMessage, mapTree } from 'ele-admin-plus/es';
  import { DownloadOutlined, UploadOutlined } from '@/components/icons';
  import { useFormData } from '@/utils/use-form-data';
  import { download } from '@/utils/common';
  import ProForm from '@/components/ProForm/index.vue';
  import { getFormInitValue } from './util';
  import { transformJsVar } from './code-js-var';

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
    },
    /** 表单缓存数据 */
    data: Object
  });

  const emit = defineEmits(['unmount', 'importTemplate']);

  /** 表单实例 */
  const proFormRef = ref(null);

  /** 表单项数据 */
  const formItems = ref([]);

  /** 获取表单初始值 */
  const init = getFormInitValue(props.items);

  /** 表单数据 */
  const [form, resetFields, assignFields, setFieldValue] = useFormData(init);

  /** 表单属性 */
  const proFormProps = computed(() => {
    return transformJsCode(props.formProps || {});
  });

  /** 提交 */
  const handleSubmit = () => {
    EleMessage.success('表单验证通过');
    console.log('form:', JSON.parse(JSON.stringify(form)));
  };

  /** 重置 */
  const handleReset = () => {
    resetFields(void 0, ['searchExpand']);
    nextTick(() => {
      proFormRef.value?.clearValidate?.();
      nextTick(() => {
        proFormRef.value?.clearValidate?.();
      });
    });
  };

  /** 导出 */
  const handleExport = () => {
    const config = {
      ...(props.formProps || {}),
      items: mapTree(props.items || [], (item) => {
        return { ...item, key: void 0 };
      })
    };
    const result = JSON.stringify(config, void 0, 2);
    download(result, `pro-form-${Date.now()}.json`, 'application/json');
  };

  /** 导入 */
  const handleImport = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result;
      if (typeof content === 'string' && content) {
        try {
          const config = JSON.parse(content);
          if (
            config == null ||
            typeof config !== 'object' ||
            Array.isArray(config)
          ) {
            EleMessage.error('导入失败, 请导入正确的内容');
            return;
          }
          let i = 0;
          config.items = mapTree(config.items, (item) => {
            i++;
            return { ...item, key: `${file.name}-item-${i}` };
          });
          ElMessageBox.confirm(
            `确定要导入“${file.name}”吗?<br/>
          <span style="font-size:12px;color:var(--el-color-danger);">* 此操作会覆盖掉当前的全部表单配置</span>`,
            '导入',
            {
              type: 'warning',
              draggable: true,
              closeOnClickModal: false,
              dangerouslyUseHTMLString: true
            }
          )
            .then(() => {
              emit('importTemplate', config);
            })
            .catch(() => {});
        } catch (e) {
          console.error(e);
          EleMessage.error('导入失败, 请导入正确的内容');
        }
      }
    };
    reader.readAsText(file);
    return false;
  };

  /** 转化含代码字符串数据 */
  const transformJsCode = (obj) => {
    return JSON.parse(JSON.stringify(obj), (_jk, jv) => {
      const jsVar = transformJsVar(jv);
      if (jsVar != null && jsVar.jsCode != null) {
        return jsVar.jsCode(
          form,
          formItems,
          props.formProps || {},
          form.searchExpand ?? false
        );
      }
      return jv;
    });
  };

  /** 销毁事件 */
  onBeforeUnmount(() => {
    emit('unmount', form);
  });

  onMounted(() => {
    // 回显缓存数据
    if (props.data != null) {
      assignFields(
        props.data,
        Object.keys(props.data).filter((k) => props.data?.[k] == null)
      );
    }
    // 赋值表单项数据
    formItems.value = transformJsCode(props.items);
  });

  watch(
    [() => props.items, form],
    () => {
      formItems.value = transformJsCode(props.items);
    },
    { deep: true }
  );

  defineExpose({ setFieldValue });
</script>

<style lang="scss" scoped>
  .header-action-btn {
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

  .header-action-btn-inner {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
</style>
