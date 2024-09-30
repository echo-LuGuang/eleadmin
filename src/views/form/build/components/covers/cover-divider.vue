<template>
  <div>
    <Skeleton size="sm" :style="{ marginBottom: '14px', width: '33%' }" />
    <div style="border-top: 1px solid var(--el-color-primary)"></div>
    <Skeleton size="sm" :style="{ margin: '14px 0', width: '66%' }" />
    <div style="border-top: 1px dashed var(--el-color-primary)"></div>
    <Skeleton size="sm" :style="{ marginTop: '14px' }" />
  </div>
</template>

<script setup>
  import { Skeleton } from './icons';
</script>
