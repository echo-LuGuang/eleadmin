<template>
  <Input>
    <RangeSkeleton />
    <Time :style="{ margin: '0 0 0 8px' }" />
  </Input>
  <Panel :style="{ padding: '1px 0' }">
    <Calendar />
  </Panel>
</template>

<script setup>
  import { Input, RangeSkeleton, Time, Panel, Calendar } from './icons';
</script>
