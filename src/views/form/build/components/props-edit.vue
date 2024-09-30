<template>
  <EleDrawer
    :size="480"
    title="表单更多配置"
    :appendToBody="true"
    style="max-width: 100%"
    v-model="visible"
    :bodyStyle="{ paddingLeft: '10px' }"
    @open="handleOpen"
    @closed="handleClosed"
  >
    <ElForm
      ref="formRef"
      :model="form"
      :rules="rules"
      labelWidth="98px"
      @submit.prevent=""
    >
      <EditFormItem label="标题位置">
        <ElRadioGroup v-model="form.labelPosition">
          <ElRadio value="left" label="left" />
          <ElRadio value="right" label="right" />
          <ElRadio value="top" label="top" />
        </ElRadioGroup>
      </EditFormItem>
      <EditFormItem
        label="表单样式"
        prop="style"
        tipText="配置表单容器的样式(JSON格式), 如:"
        :tipCode="styleTipCode"
      >
        <ElInput
          :rows="6"
          type="textarea"
          v-model="form.style"
          placeholder="请输入表单样式"
        />
      </EditFormItem>
      <EditFormItem
        v-if="form.grid"
        label="栅格属性"
        prop="rowProps"
        tipText="配置 ElRow 组件的其它属性(JSON格式), 如:"
        :tipCode="rowPropsTipCode"
      >
        <ElInput
          :rows="3"
          type="textarea"
          v-model="form.rowProps"
          placeholder="请输入 ElRow 属性"
        />
      </EditFormItem>
      <EditFormItem label="底部按钮栏">
        <ElRadioGroup v-model="form.footer">
          <ElRadio :value="false" label="不需要" />
          <ElRadio :value="true" label="需要" />
          <ElRadio value="expand" label="带展开收起" />
        </ElRadioGroup>
      </EditFormItem>
      <EditFormItem
        v-if="form.footer"
        label="底栏属性"
        prop="footerProps"
        tipText="配置 ElFormItem 组件的其它属性(JSON格式), 如:"
        :tipCode="footerItemPropsTipCode"
      >
        <ElInput
          :rows="4"
          type="textarea"
          v-model="form.footerProps"
          placeholder="请输入底栏 ElFormItem 组件属性"
        />
      </EditFormItem>
      <EditFormItem
        v-if="form.footer"
        label="底栏样式"
        prop="footerStyle"
        tipText="配置底栏的样式(JSON格式), 如:"
        :tipCode="footerStyleTipCode"
      >
        <ElInput
          :rows="5"
          type="textarea"
          v-model="form.footerStyle"
          placeholder="请输入底栏样式"
        />
      </EditFormItem>
      <EditFormItem
        v-if="form.grid && form.footer"
        label="底栏ElCol"
        prop="footerColProps"
        tipText="配置底栏 ElCol 组件属性(JSON格式), 如:"
        :tipCode="footerColPropsTipCode"
      >
        <ElInput
          :rows="3"
          type="textarea"
          v-model="form.footerColProps"
          placeholder="请输入底栏 ElCol 组件属性"
        />
      </EditFormItem>
    </ElForm>
    <template #footer>
      <ElButton type="primary" class="ele-fluid" @click="save">保存</ElButton>
    </template>
  </EleDrawer>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  import { useFormData } from '@/utils/use-form-data';
  import {
    validateJSON,
    styleTipCode,
    rowPropsTipCode,
    footerItemPropsTipCode,
    footerStyleTipCode,
    footerColPropsTipCode
  } from './util';
  import EditFormItem from './edit-form-item.vue';

  const props = defineProps({
    /** 表单更多配置 */
    data: Object
  });

  const emit = defineEmits(['done']);

  /** 弹窗是否打开 */
  const visible = defineModel({ type: Boolean });

  /** 配置项表单 */
  const formRef = ref(null);

  /** 配置项表单数据 */
  const [form, resetFields, assignFields] = useFormData({
    labelPosition: void 0,
    style: '',
    grid: void 0,
    rowProps: '',
    footer: false,
    footerProps: '',
    footerStyle: '',
    footerColProps: ''
  });

  /** 配置项表单验证规则 */
  const rules = reactive({
    style: [
      {
        validator: (_rule, value, callback) => {
          callback(validateJSON(value));
        },
        trigger: 'blur'
      }
    ],
    rowProps: [
      {
        validator: (_rule, value, callback) => {
          callback(validateJSON(value));
        },
        trigger: 'blur'
      }
    ],
    footerProps: [
      {
        validator: (_rule, value, callback) => {
          callback(validateJSON(value));
        },
        trigger: 'blur'
      }
    ],
    footerStyle: [
      {
        validator: (_rule, value, callback) => {
          callback(validateJSON(value));
        },
        trigger: 'blur'
      }
    ],
    footerColProps: [
      {
        validator: (_rule, value, callback) => {
          callback(validateJSON(value));
        },
        trigger: 'blur'
      }
    ]
  });

  /** 保存表单项配置 */
  const save = () => {
    formRef.value?.validate?.((valid) => {
      if (valid) {
        visible.value = false;
        const item = {
          labelPosition: form.labelPosition,
          style: form.style ? JSON.parse(form.style) : void 0,
          rowProps: form.rowProps ? JSON.parse(form.rowProps) : void 0,
          footer: !!form.footer,
          footerProps: form.footerProps ? JSON.parse(form.footerProps) : void 0,
          footerStyle: form.footerStyle ? JSON.parse(form.footerStyle) : void 0,
          footerColProps: form.footerColProps
            ? JSON.parse(form.footerColProps)
            : void 0,
          showSearchExpand: form.footer === 'expand'
        };
        emit('done', item);
      }
    });
  };

  /** 弹窗关闭事件 */
  const handleClosed = () => {
    resetFields();
    formRef.value?.clearValidate?.();
  };

  /** 弹窗打开事件 */
  const handleOpen = () => {
    const options = props.data;
    if (!options) {
      return;
    }
    assignFields({
      labelPosition: options.labelPosition || 'right',
      style: options.style ? JSON.stringify(options.style, void 0, 2) : '',
      grid: options.grid,
      rowProps: options.rowProps
        ? JSON.stringify(options.rowProps, void 0, 2)
        : '',
      footer: options.showSearchExpand ? 'expand' : !!options.footer,
      footerProps: options.footerProps
        ? JSON.stringify(options.footerProps, void 0, 2)
        : '',
      footerStyle: options.footerStyle
        ? JSON.stringify(options.footerStyle, void 0, 2)
        : '',
      footerColProps: options.footerColProps
        ? JSON.stringify(options.footerColProps, void 0, 2)
        : ''
    });
  };
</script>
