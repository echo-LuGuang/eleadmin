<template>
  <Input>
    <RangeSkeleton />
    <Date :style="{ margin: '0 0 0 8px' }" />
  </Input>
  <Panel :style="{ padding: '1px 0' }">
    <Calendar />
  </Panel>
</template>

<script setup>
  import { Input, RangeSkeleton, Date, Panel, Calendar } from './icons';
</script>
