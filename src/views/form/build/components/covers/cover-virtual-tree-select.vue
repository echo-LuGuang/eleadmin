<template>
  <Input>
    <Skeleton :style="{ width: '50%' }" />
    <ArrowUp :style="{ margin: '0 0 0 auto' }" />
  </Input>
  <Panel :style="{ padding: '8px 10px 8px 8px', position: 'relative' }">
    <div :style="{ display: 'flex', alignItems: 'center' }">
      <Arrow />
      <Skeleton size="lg" :style="{ flex: 1 }" />
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', marginTop: '8px' }">
      <Arrow />
      <Skeleton size="lg" :style="{ flex: 1 }" />
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', marginTop: '8px' }">
      <Arrow />
      <Skeleton size="lg" :style="{ flex: 1 }" />
    </div>
    <div
      :style="{
        width: '4px',
        height: '18px',
        borderRadius: '2px',
        background: 'var(--el-border-color)',
        position: 'absolute',
        top: '4px',
        right: '3px'
      }"
    ></div>
  </Panel>
</template>

<script setup>
  import { Input, Skeleton, ArrowUp, Panel, Arrow } from './icons';
</script>
