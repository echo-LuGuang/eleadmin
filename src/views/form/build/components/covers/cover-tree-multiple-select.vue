<template>
  <Input>
    <Skeleton :style="{ flex: 1, maxWidth: '32px' }" />
    <Skeleton :style="{ flex: 1, maxWidth: '32px', margin: '0 0 0 8px' }" />
    <Skeleton :style="{ flex: 1, maxWidth: '32px', margin: '0 0 0 8px' }" />
    <ArrowUp :style="{ margin: '0 0 0 auto' }" />
  </Input>
  <Panel>
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
  </Panel>
</template>

<script setup>
  import { Input, Skeleton, ArrowUp, Panel, Checkbox, Arrow } from './icons';
</script>
