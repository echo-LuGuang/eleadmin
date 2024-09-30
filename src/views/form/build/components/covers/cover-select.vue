<template>
  <Input>
    <Skeleton :style="{ width: '50%' }" />
    <ArrowUp :style="{ margin: '0 0 0 auto' }" />
  </Input>
  <Panel>
    <Skeleton size="lg" />
    <Skeleton size="lg" :style="{ marginTop: '8px' }" />
    <Skeleton size="lg" :style="{ marginTop: '8px' }" />
  </Panel>
</template>

<script setup>
  import { Input, Skeleton, ArrowUp, Panel } from './icons';
</script>
