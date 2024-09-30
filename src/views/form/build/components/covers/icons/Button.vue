<template>
  <div
    :style="{
      display: 'flex',
      alignItems: 'center',
      height: '28px',
      padding: '0 10px',
      boxSizing: 'border-box',
      borderRadius: '4px',
      background:
        type === 'primary'
          ? 'var(--el-color-primary)'
          : type === 'bordered'
            ? void 0
            : 'var(--el-fill-color)',
      border: type === 'bordered' ? '1px solid var(--el-border-color)' : void 0
    }"
  >
    <Skeleton
      v-if="!hideSkeleton && (type === 'primary' || type === 'bordered')"
      size="sm"
      :style="{
        flex: 1,
        background: type === 'primary' ? '#fff' : 'var(--el-fill-color)'
      }"
    />
  </div>
</template>

<script setup>
  import { Skeleton } from './index';

  defineProps({
    type: String,
    hideSkeleton: Boolean
  });
</script>
