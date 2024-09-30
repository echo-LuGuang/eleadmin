<template>
  <Input>
    <Skeleton :style="{ width: '50%' }" />
    <ArrowUp :style="{ margin: '0 0 0 auto' }" />
  </Input>
  <Panel :style="{ padding: '6px 8px 8px 8px' }">
    <Table />
  </Panel>
</template>

<script setup>
  import { Input, Skeleton, ArrowUp, Panel, Table } from './icons';
</script>
