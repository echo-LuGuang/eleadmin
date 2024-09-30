<template>
  <Skeleton :style="{ flex: 1 }" />
  <div
    :style="{
      flexShrink: 0,
      width: '8px',
      margin: '0 6px',
      borderTop: '1px solid var(--el-text-color-primary)'
    }"
  ></div>
  <Skeleton :style="{ flex: 1 }" />
</template>

<script setup>
  import { Skeleton } from './index';
</script>
