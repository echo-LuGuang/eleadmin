<template>
  <div
    :style="{
      flexShrink: 0,
      height:
        size === 'xl'
          ? '18px'
          : size === 'lg'
            ? '12px'
            : size === 'sm'
              ? '6px'
              : '10px',
      borderRadius: size === 'sm' ? '3px' : '4px',
      background: 'var(--el-fill-color)'
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
  defineProps({
    size: String
  });
</script>
