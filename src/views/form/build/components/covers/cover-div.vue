<template>
  <div
    :style="{
      padding: '12px 12px 36px 12px',
      border: '1px solid var(--el-border-color)',
      borderRadius: '4px'
    }"
  >
    <Skeleton />
    <Skeleton :style="{ marginTop: '12px' }" />
    <Skeleton :style="{ marginTop: '12px', width: '50%' }" />
  </div>
</template>

<script setup>
  import { Skeleton } from './icons';
</script>
