<template>
  <EleDrawer
    :size="480"
    title="表单项配置"
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
      <EditFormItem :label="isViewType ? '文本' : '标题'" prop="label">
        <ElInput
          :rows="2"
          type="textarea"
          v-model="form.label"
          placeholder="请输入标题"
        />
      </EditFormItem>
      <EditFormItem
        :label="isViewType || isContainerType ? 'key' : '字段名'"
        prop="prop"
      >
        <ElInput clearable v-model="form.prop" placeholder="请输入字段名" />
      </EditFormItem>
      <EditFormItem v-if="showInitValue" label="初始值" prop="initValue">
        <ElInput
          :rows="2"
          type="textarea"
          v-model="form.initValue"
          placeholder="请输入初始值"
        />
      </EditFormItem>
      <EditFormItem
        v-if="!isViewType && !isContainerType && form.type !== 'text'"
        label="是否必填"
        prop="required"
      >
        <ElRadioGroup v-model="form.required">
          <ElRadio :value="true" label="是" />
          <ElRadio :value="false" label="否" />
        </ElRadioGroup>
      </EditFormItem>
      <EditFormItem
        v-if="!isViewType && !isContainerType"
        label="其它属性"
        prop="itemProps"
        tipText="配置 ElFormItem 组件的其它属性(JSON格式), 如:"
        :tipCode="itemPropsTipCode"
      >
        <ElInput
          :rows="3"
          type="textarea"
          v-model="form.itemProps"
          placeholder="请输入 ElFormItem 属性"
        />
      </EditFormItem>
      <EditFormItem label="组件类型" prop="type">
        <ElSelect
          v-model="form.type"
          placeholder="请选择组件类型"
          :popperOptions="{ strategy: 'fixed' }"
          class="ele-fluid"
          @change="handleTypeChange"
        >
          <ElOption
            v-for="item in typeOptions"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          />
        </ElSelect>
      </EditFormItem>
      <EditFormItem
        label="组件属性"
        prop="props"
        :tipText="'配置 ' + typeComponentName + ' 组件属性(JSON格式), 如:'"
        :tipCode="propsTipCode"
      >
        <ElInput
          :rows="7"
          type="textarea"
          v-model="form.props"
          :placeholder="'请输入 ' + typeComponentName + ' 组件属性'"
        />
      </EditFormItem>
      <EditFormItem label="所占列数" prop="colSpan">
        <ElSelect
          v-model="form.colSpan"
          placeholder="请选择所占列数"
          :popperOptions="{ strategy: 'fixed' }"
          class="ele-fluid"
        >
          <ElOption
            v-for="item in gridOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.value > (grid || 1)"
          />
        </ElSelect>
      </EditFormItem>
      <EditFormItem
        v-if="showOptions"
        label="选项数据"
        prop="options"
        tipText="下拉或单多选等组件的选项数据(JSON格式), 如:"
        :tipCode="optionsTipCode"
      >
        <ElInput
          :rows="7"
          type="textarea"
          v-model="form.options"
          placeholder="请输入选项数据"
        />
      </EditFormItem>
      <EditFormItem
        v-if="isContainerType || isViewType"
        label="子级列数"
        prop="gridNumber"
      >
        <ElSelect
          v-model="form.gridNumber"
          placeholder="请选择子级列数"
          class="ele-fluid"
          :popperOptions="{ strategy: 'fixed' }"
        >
          <ElOption
            v-for="item in gridOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </ElSelect>
      </EditFormItem>
      <EditFormItem
        v-if="(isContainerType || isViewType) && form.gridNumber != 1"
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
      <EditFormItem
        label="显示条件"
        prop="vIf"
        tipText="控制表单项显示的代码, 可用form取表单数据, 如:"
        tipCode="form.f01 == 'a' || from.f02 == 3"
      >
        <ElInput
          clearable
          v-model="form.vIf"
          placeholder="请输入显示条件代码"
        />
      </EditFormItem>
    </ElForm>
    <template #header>
      <span>表单项配置</span>
      <div class="help-tip-icon">
        <ElIcon>
          <QuestionCircleOutlined />
        </ElIcon>
        <div class="help-tip-icon-pop">
          <EleAlert
            type="warning"
            :showIcon="true"
            :closable="false"
            title="如果需要执行 js 代码如 onXxx 属性设置事件可使用 /*__PRO_FORM__*/ 开头写 js 代码字符串，并可读取到 form(表单数据) items(表单项配置) searchExpand(有展开收起按钮时展开状态) 三个变量，以及对其赋值操作等。需要用到图标的地方可使用 __PRO_FORM_ICON__ 开头写已引入但未全局安装的图标名称，如果图标已全局安装可直接写图标名称。"
          />
        </div>
      </div>
    </template>
    <template #footer>
      <ElButton type="primary" class="ele-fluid" @click="save">保存</ElButton>
    </template>
  </EleDrawer>
</template>

<script setup>
  import { ref, reactive, computed } from 'vue';
  import { QuestionCircleOutlined } from '@/components/icons';
  import { useFormData } from '@/utils/use-form-data';
  import {
    viewTypes,
    containerTypes,
    optionsTypes
  } from '@/components/ProForm/util';
  import { itemTypes } from './item-types';
  import {
    gridOptions,
    getOptionsAndProps,
    getFormGrid,
    getGridNumber,
    getColProps,
    getColSpan,
    getStrValOrJsonVal,
    itemPropsTipCode,
    propsTipCode,
    optionsTipCode,
    rowPropsTipCode,
    validateJSON
  } from './util';
  import EditFormItem from './edit-form-item.vue';

  const props = defineProps({
    /** 修改回显的数据 */
    data: Object,
    /** 父级显示列数 */
    grid: Number
  });

  const emit = defineEmits(['done']);

  /** 弹窗是否打开 */
  const visible = defineModel({ type: Boolean });

  /** 配置项表单 */
  const formRef = ref(null);

  /** 配置项表单数据 */
  const [form, resetFields, assignFields] = useFormData({
    key: void 0,
    label: '',
    prop: '',
    required: false,
    itemProps: '',
    type: void 0,
    props: '',
    //colProps: '',
    options: '',
    colSpan: 1,
    gridNumber: 1,
    rowProps: '',
    vIf: '',
    initValue: ''
  });

  /** 配置项表单验证规则 */
  const rules = reactive({
    prop: [
      {
        required: true,
        type: 'string',
        message: '请输入字段名',
        trigger: 'blur'
      }
    ],
    itemProps: [
      {
        validator: (_rule, value, callback) => {
          callback(validateJSON(value));
        },
        trigger: 'blur'
      }
    ],
    props: [
      {
        validator: (_rule, value, callback) => {
          callback(validateJSON(value));
        },
        trigger: 'blur'
      }
    ],
    colProps: [
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
          if (
            (!isContainerType.value && !isViewType.value) ||
            form.gridNumber == 1
          ) {
            callback();
            return;
          }
          callback(validateJSON(value));
        },
        trigger: 'blur'
      }
    ]
  });

  /** 是否是展示类型 */
  const isViewType = computed(() => {
    return form.type && viewTypes.includes(form.type);
  });

  /** 是否是容器类型 */
  const isContainerType = computed(() => {
    return form.type && containerTypes.includes(form.type);
  });

  /** 是否显示初始值输入框 */
  const showInitValue = computed(() => {
    return (
      form.type === 'text' ||
      form.type === 'editTag' ||
      form.type === 'rate' ||
      form.type === 'imageUpload' ||
      form.type === 'fileUpload' ||
      form.type === 'sliderRange'
    );
  });

  /** 是否显示选项数据输入框 */
  const showOptions = computed(() => {
    return form.type && optionsTypes.includes(form.type);
  });

  /** 组件类型下拉数据 */
  const typeOptions = computed(() => {
    const types = itemTypes.map((d) => {
      return { ...d, label: `${d.label}(${d.value})` };
    });
    if (isContainerType.value) {
      return types.filter((t) => containerTypes.includes(t.value));
    }
    if (isViewType.value) {
      return types.filter((t) => viewTypes.includes(t.value));
    }
    return types.filter(
      (t) => !containerTypes.includes(t.value) && !viewTypes.includes(t.value)
    );
  });

  /** 组件属性输入框placeholder */
  const typeComponentName = computed(() => {
    return itemTypes.find((t) => t.value === form.type)?.component || '';
  });

  /** 组件类型选择改变 */
  const handleTypeChange = (type) => {
    const { options, props } = getOptionsAndProps(type);
    form.props = props;
    form.options = options;
  };

  /** 保存表单项配置 */
  const save = () => {
    formRef.value?.validate?.((valid) => {
      if (valid) {
        const item = {
          key: form.key,
          label: form.label,
          prop: form.prop,
          type: form.type,
          required: form.required ? true : void 0,
          itemProps: form.itemProps ? JSON.parse(form.itemProps) : void 0,
          props: form.props ? JSON.parse(form.props) : void 0,
          //colProps: form.colProps ? JSON.parse(form.colProps) : void 0,
          colProps: getColProps(props.grid || 1, form.colSpan),
          options: form.options ? JSON.parse(form.options) : void 0,
          grid:
            isContainerType.value || isViewType.value
              ? getFormGrid(form.gridNumber)
              : void 0,
          rowProps: form.rowProps ? JSON.parse(form.rowProps) : void 0,
          vIf: getStrValOrJsonVal(form.vIf),
          initValue: form.initValue ? form.initValue : void 0
        };
        if (form.type === 'text') {
          item.required = void 0;
        }
        if (isViewType.value || isContainerType.value) {
          item.required = void 0;
          item.itemProps = void 0;
        }
        if (!showOptions.value) {
          item.options = void 0;
        }
        if (
          (!isContainerType.value && !isViewType.value) ||
          form.gridNumber == 1
        ) {
          item.rowProps = void 0;
        }
        if (form.type === 'sliderRange') {
          const initValue = getStrValOrJsonVal(item.initValue);
          if (
            Array.isArray(initValue) &&
            initValue.length == 2 &&
            typeof initValue[0] === 'number' &&
            typeof initValue[1] === 'number'
          ) {
            item.initValue = initValue;
          } else {
            item.initValue = void 0;
          }
        }
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
    const item = props.data;
    if (!item) {
      return;
    }
    assignFields({
      key: item.key,
      label: item.label,
      prop: item.prop,
      required: !!item.required,
      type: item.type,
      itemProps: item.itemProps
        ? JSON.stringify(item.itemProps, void 0, 2)
        : '',
      props: item.props ? JSON.stringify(item.props, void 0, 2) : '',
      //colProps: item.colProps ? JSON.stringify(item.colProps, void 0, 2) : '',
      options: item.options ? JSON.stringify(item.options, void 0, 2) : '',
      colSpan: getColSpan(props.grid || 1, item.colProps?.span),
      gridNumber: getGridNumber(item.grid),
      rowProps: item.rowProps ? JSON.stringify(item.rowProps, void 0, 2) : '',
      vIf:
        typeof item.vIf === 'string'
          ? item.vIf
          : item.vIf != null
            ? JSON.stringify(item.vIf)
            : '',
      initValue:
        typeof item.initValue === 'string'
          ? item.initValue
          : item.initValue != null
            ? JSON.stringify(item.initValue, void 0, 2)
            : ''
    });
  };
</script>

<style lang="scss" scoped>
  .help-tip-icon {
    position: relative;
    display: inline-flex;
    vertical-align: -2px;
    margin-left: 6px;
    cursor: help;

    & > .el-icon {
      font-size: 15px;
      opacity: 0.6;
    }

    .help-tip-icon-pop {
      position: absolute;
      top: 100%;
      left: -88px;
      padding-top: 6px;
      width: 442px;
      max-width: calc(100vw - 40px);
      transition: all 0.3s;
      z-index: 9;
      cursor: default;

      & > .ele-alert {
        box-shadow: var(--el-box-shadow-light);
      }
    }

    &:not(:hover) .help-tip-icon-pop {
      opacity: 0;
      transform: translateY(-80%);
      pointer-events: none;
      visibility: collapse;
    }
  }
</style>
