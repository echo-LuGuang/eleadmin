<template>
  <Input
    :style="{
      color: 'var(--el-text-color-secondary)',
      fontSize: '12px',
      lineHeight: '18px',
      textAlign: 'center'
    }"
  >
    <Skeleton :style="{ width: '32px', height: 'auto' }">男</Skeleton>
    <Skeleton :style="{ width: '32px', height: 'auto', marginLeft: '4px' }">
      女
    </Skeleton>
    <ArrowUp :style="{ margin: '0 0 0 auto' }" />
  </Input>
  <Panel
    :style="{
      color: 'var(--el-text-color-secondary)',
      fontSize: '12px',
      lineHeight: 1
    }"
  >
    <div :style="{ display: 'flex', alignItems: 'center' }">
      <Checkbox :checked="true" />
      <div>男</div>
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', marginTop: '8px' }">
      <Checkbox :checked="true" />
      <div>女</div>
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', marginTop: '8px' }">
      <Checkbox />
      <div>保密</div>
    </div>
  </Panel>
</template>

<script setup>
  import { Input, Skeleton, ArrowUp, Panel, Checkbox } from './icons';
</script>
