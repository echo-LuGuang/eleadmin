<template>
  <Input>
    <Skeleton :style="{ width: '50%' }" />
    <Time :style="{ margin: '0 0 0 auto' }" />
  </Input>
  <Panel :style="{ display: 'flex', alignItems: 'flex-start' }">
    <div :style="{ flex: 1 }">
      <Skeleton size="lg" />
      <Skeleton size="lg" :style="{ marginTop: '8px' }" />
      <Skeleton size="lg" :style="{ marginTop: '8px' }" />
    </div>
    <div :style="{ flex: 1, marginLeft: '8px' }">
      <Skeleton size="lg" />
      <Skeleton size="lg" :style="{ marginTop: '8px' }" />
      <Skeleton size="lg" :style="{ marginTop: '8px' }" />
    </div>
    <div :style="{ flex: 1, marginLeft: '8px' }">
      <Skeleton size="lg" />
      <Skeleton size="lg" :style="{ marginTop: '8px' }" />
      <Skeleton size="lg" :style="{ marginTop: '8px' }" />
    </div>
  </Panel>
</template>

<script setup>
  import { Input, Skeleton, Time, Panel } from './icons';
</script>
