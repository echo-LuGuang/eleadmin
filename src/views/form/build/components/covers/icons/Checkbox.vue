<template>
  <div
    :style="{
      width: size === 'lg' ? '14px' : size === 'sm' ? '8px' : '12px',
      height: size === 'lg' ? '14px' : size === 'sm' ? '8px' : '12px',
      borderRadius: size === 'sm' ? '2px' : '3px',
      border: checked ? 'none' : '1px solid var(--el-border-color)',
      background: checked ? 'var(--el-color-primary)' : 'var(--el-bg-color)',
      boxSizing: 'border-box',
      margin: '0 8px 0 0'
    }"
  >
    <Icon
      v-if="checked"
      name="CheckOutlined"
      :iconStyle="{ 'stroke-width': 8, transform: 'scale(0.9)' }"
      :style="{
        color: '#fff',
        fontSize: '12px',
        width: '100%',
        height: '100%'
      }"
    />
  </div>
</template>

<script setup>
  import { Icon } from './index';

  defineProps({
    size: String,
    checked: Boolean
  });
</script>
