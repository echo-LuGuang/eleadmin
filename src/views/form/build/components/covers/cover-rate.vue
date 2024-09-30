<template>
  <div
    :style="{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px'
    }"
  >
    <Star :style="{ color: '#f7ba2a', fontSize: '28px' }" />
    <Star :style="{ color: '#f7ba2a', fontSize: '28px' }" />
    <Star :style="{ color: '#f7ba2a', fontSize: '28px' }" />
    <Star :style="{ color: 'var(--el-fill-color)', fontSize: '28px' }" />
  </div>
</template>

<script setup>
  import { Star } from './icons';
</script>
