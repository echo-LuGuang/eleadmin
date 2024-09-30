<template>
  <div
    :style="{
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid var(--el-border-color)',
      boxSizing: 'border-box',
      padding: '0 12px 0 6px',
      height: '15px'
    }"
  >
    <Checkbox v-if="multiple" size="sm" :style="{ margin: '0' }" />
    <slot>
      <Skeleton size="sm" :style="{ flex: 1, marginLeft: '6px' }" />
      <Skeleton size="sm" :style="{ flex: 1, marginLeft: '12px' }" />
      <Skeleton size="sm" :style="{ flex: 1, marginLeft: '12px' }" />
    </slot>
  </div>
</template>

<script setup>
  import { Skeleton, Checkbox } from './index';

  defineProps({
    multiple: Boolean
  });
</script>
