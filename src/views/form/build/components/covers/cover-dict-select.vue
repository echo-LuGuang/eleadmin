<template>
  <Input
    :style="{
      color: 'var(--el-text-color-secondary)',
      fontSize: '12px',
      lineHeight: '18px',
      textAlign: 'center'
    }"
  >
    <div>女</div>
    <ArrowUp :style="{ margin: '0 0 0 auto' }" />
  </Input>
  <Panel
    :style="{
      padding: '4px 8px',
      color: 'var(--el-text-color-secondary)',
      fontSize: '12px',
      lineHeight: '20px'
    }"
  >
    <div>男</div>
    <div>女</div>
    <div>保密</div>
  </Panel>
</template>

<script setup>
  import { Input, ArrowUp, Panel } from './icons';
</script>
