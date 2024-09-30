<template>
  <Input>
    <Skeleton :style="{ width: '50%' }" />
    <Time :style="{ margin: '0 0 0 auto' }" />
  </Input>
  <Panel>
    <Skeleton size="lg" />
    <Skeleton size="lg" :style="{ marginTop: '8px' }" />
    <Skeleton size="lg" :style="{ marginTop: '8px' }" />
  </Panel>
</template>

<script setup>
  import { Input, Skeleton, Time, Panel } from './icons';
</script>
