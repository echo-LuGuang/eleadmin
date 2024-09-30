<template>
  <div :style="{ width: '120px', margin: '0 auto' }">
    <div
      :style="{
        padding: '4px 8px',
        borderRadius: '4px',
        border: '1px solid var(--el-border-color)',
        boxSizing: 'border-box'
      }"
    >
      <Skeleton size="sm" />
    </div>
    <div
      :style="{
        padding: '4px 8px',
        borderRadius: '4px',
        border: '1px solid var(--el-border-color)',
        boxSizing: 'border-box',
        margin: '6px 0 0 0'
      }"
    >
      <Skeleton size="sm" />
    </div>
    <div
      :style="{
        padding: '4px 8px',
        borderRadius: '4px',
        border: '1px solid var(--el-border-color)',
        boxSizing: 'border-box',
        margin: '6px 0 0 0'
      }"
    >
      <Skeleton size="sm" />
    </div>
    <Plus
      :style="{
        height: '15px',
        borderRadius: '4px',
        border: '1px solid var(--el-border-color)',
        boxSizing: 'border-box',
        margin: '6px 0 0 0',
        fontSize: '12px',
        color: 'var(--el-text-color-placeholder)'
      }"
    />
  </div>
</template>

<script setup>
  import { Skeleton, Plus } from './icons';
</script>
