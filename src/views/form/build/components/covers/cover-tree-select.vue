<template>
  <Input>
    <Skeleton :style="{ width: '50%' }" />
    <ArrowUp :style="{ margin: '0 0 0 auto' }" />
  </Input>
  <Panel>
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
  </Panel>
</template>

<script setup>
  import { Input, Skeleton, ArrowUp, Panel, Arrow } from './icons';
</script>
