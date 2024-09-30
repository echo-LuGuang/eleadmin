<template>
  <Input>
    <Skeleton :style="{ width: '50%' }" />
    <Cursor />
  </Input>
  <Panel>
    <Skeleton size="lg" />
    <Skeleton size="lg" :style="{ marginTop: '8px' }" />
    <Skeleton size="lg" :style="{ marginTop: '8px' }" />
  </Panel>
</template>

<script setup>
  import { Input, Skeleton, Cursor, Panel } from './icons';
</script>
