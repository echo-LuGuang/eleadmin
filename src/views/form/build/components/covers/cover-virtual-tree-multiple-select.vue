<template>
  <Input>
    <Skeleton :style="{ flex: 1, maxWidth: '32px' }" />
    <Skeleton :style="{ flex: 1, maxWidth: '32px', margin: '0 0 0 8px' }" />
    <Skeleton :style="{ flex: 1, maxWidth: '32px', margin: '0 0 0 8px' }" />
    <ArrowUp :style="{ margin: '0 0 0 auto' }" />
  </Input>
  <Panel :style="{ padding: '8px 10px 8px 8px', position: 'relative' }">
    <div :style="{ display: 'flex', alignItems: 'center' }">
      <Arrow />
      <Checkbox />
      <Skeleton size="lg" :style="{ flex: 1 }" />
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', marginTop: '8px' }">
      <Arrow />
      <Checkbox />
      <Skeleton size="lg" :style="{ flex: 1 }" />
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', marginTop: '8px' }">
      <Arrow />
      <Checkbox />
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
  import { Input, Skeleton, ArrowUp, Panel, Checkbox, Arrow } from './icons';
</script>
