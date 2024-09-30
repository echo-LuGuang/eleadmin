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
      <Radio />
      <div>男</div>
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', marginTop: '12px' }">
      <Radio :checked="true" />
      <div>女</div>
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', marginTop: '12px' }">
      <Radio />
      <div>保密</div>
    </div>
  </div>
</template>

<script setup>
  import { Radio } from './icons';
</script>
