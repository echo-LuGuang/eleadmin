<template>
  <div
    :style="{
      width: size === 'large' ? '22px' : '14px',
      height: size === 'large' ? '22px' : '14px',
      lineHeight: size === 'large' ? '22px' : '14px',
      borderRadius: '50%',
      textAlign: 'center',
      color: 'var(--el-text-color-secondary)',
      border: checked
        ? '4px solid var(--el-color-primary)'
        : '1px solid var(--el-border-color)',
      background: checked ? '#fff' : 'none',
      fontSize: '12px',
      boxSizing: 'border-box',
      margin: '0 8px 0 0'
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
  defineProps({
    checked: Boolean,
    size: String
  });
</script>
