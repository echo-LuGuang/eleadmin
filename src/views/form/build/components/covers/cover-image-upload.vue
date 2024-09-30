<template>
  <div
    :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center' }"
  >
    <div
      :style="{
        width: '60px',
        height: '60px',
        padding: '0 4px',
        boxSizing: 'border-box',
        border: '1px solid var(--el-border-color)',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }"
    >
      <Image :style="{ width: '100%', height: '38px' }" />
    </div>
    <Plus
      :style="{
        width: '60px',
        height: '60px',
        margin: '0 0 0 8px',
        border: '1px solid var(--el-border-color)',
        borderRadius: '4px',
        fontSize: '24px',
        color: 'var(--el-text-color-placeholder)'
      }"
      :iconStyle="{ strokeWidth: 3 }"
    />
  </div>
</template>

<script setup>
  import { Image, Plus } from './icons';
</script>
