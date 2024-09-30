<template>
  <ElFormItem :prop="prop" :label="showTips ? void 0 : label">
    <slot></slot>
    <template v-if="showTips" #label>
      <EleTooltip
        placement="top-start"
        :popperOptions="{
          modifiers: [{ name: 'offset', options: { offset: [-12, 10] } }]
        }"
      >
        <ElIcon class="tips-icon">
          <QuestionCircleOutlined />
        </ElIcon>
        <template #content>
          <div v-if="tipText">{{ tipText }}</div>
          <pre v-if="tipCode" class="tips-pre">{{ tipCode }}</pre>
        </template>
      </EleTooltip>
      <div>{{ label }}</div>
    </template>
  </ElFormItem>
</template>

<script setup>
  import { computed } from 'vue';
  import { QuestionCircleOutlined } from '@/components/icons';

  const props = defineProps({
    prop: String,
    label: String,
    tipText: String,
    tipCode: String
  });

  const showTips = computed(() => !!props.tipText || !!props.tipCode);
</script>

<style lang="scss" scoped>
  .tips-icon {
    font-size: 15px;
    align-self: center;
    margin-right: 4px;
    cursor: help;
    opacity: 0.6;
  }

  .tips-pre {
    margin: 0;
    line-height: 16px;
    font-family: monospace;
  }
</style>
