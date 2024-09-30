<template>
  <div
    :style="{
      border: '1px solid var(--el-border-color)',
      borderRadius: '4px'
    }"
  >
    <div
      :style="{
        padding: '12px',
        borderBottom: '1px solid var(--el-border-color)'
      }"
    >
      <Skeleton :style="{ width: '38px' }" />
    </div>
    <div :style="{ padding: '12px 12px 26px 12px' }">
      <Skeleton />
      <Skeleton :style="{ marginTop: '10px', width: '50%' }" />
    </div>
  </div>
</template>

<script setup>
  import { Skeleton } from './icons';
</script>
