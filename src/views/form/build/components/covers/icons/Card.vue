<template>
  <div
    :style="{
      padding: '10px',
      borderRadius: '4px',
      border: checked
        ? '1px solid var(--el-color-primary)'
        : '1px solid var(--el-border-color)',
      position: 'relative'
    }"
  >
    <Skeleton size="sm" />
    <div
      v-if="checked"
      :style="{
        borderRadius: '2px',
        border: '4px solid var(--el-color-primary)',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        position: 'absolute',
        right: '4px',
        top: '4px'
      }"
    ></div>
  </div>
</template>

<script setup>
  import { Skeleton } from './index';

  defineProps({
    checked: Boolean
  });
</script>
