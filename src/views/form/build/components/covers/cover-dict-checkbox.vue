<template>
  <div
    :style="{
      width: '100px',
      margin: '0 auto',
      fontSize: '12px',
      color: 'var(--el-text-color-secondary)'
    }"
  >
    <div :style="{ display: 'flex', alignItems: 'center' }">
      <Checkbox size="lg" />
      <div>男</div>
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', marginTop: '12px' }">
      <Checkbox :checked="true" size="lg" />
      <div>女</div>
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', marginTop: '12px' }">
      <Checkbox size="lg" />
      <div>保密</div>
    </div>
  </div>
</template>

<script setup>
  import { Checkbox } from './icons';
</script>
