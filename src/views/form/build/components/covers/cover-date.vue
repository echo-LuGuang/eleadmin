<template>
  <Input>
    <Skeleton :style="{ width: '50%' }" />
    <Date :style="{ margin: '0 0 0 auto' }" />
  </Input>
  <Panel :style="{ padding: '1px 0' }">
    <Calendar />
  </Panel>
</template>

<script setup>
  import { Input, Skeleton, Date, Panel, Calendar } from './icons';
</script>
