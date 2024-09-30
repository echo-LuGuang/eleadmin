<template>
  <div
    :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center' }"
  >
    <div
      :style="{
        width: '24px',
        height: '24px',
        borderRadius: '4px',
        background: 'var(--el-fill-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }"
    >
      <div
        :style="{
          width: '8px',
          borderTop: '2px solid var(--el-text-color-placeholder)'
        }"
      ></div>
    </div>
    <div
      :style="{
        color: 'var(--el-text-color-secondary)',
        padding: '0 14px',
        fontSize: '18px',
        lineHeight: 1
      }"
    >
      999
    </div>
    <Plus
      :style="{
        width: '24px',
        height: '24px',
        borderRadius: '4px',
        background: 'var(--el-fill-color)',
        color: 'var(--el-text-color-placeholder)',
        fontSize: '12px'
      }"
    />
  </div>
</template>

<script setup>
  import { Plus } from './icons';
</script>
