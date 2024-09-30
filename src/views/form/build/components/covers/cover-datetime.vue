<template>
  <Input>
    <Skeleton :style="{ width: '50%' }" />
    <Time :style="{ margin: '0 0 0 auto' }" />
  </Input>
  <Panel :style="{ padding: '1px 0' }">
    <Calendar />
  </Panel>
</template>

<script setup>
  import { Input, Skeleton, Time, Panel, Calendar } from './icons';
</script>
