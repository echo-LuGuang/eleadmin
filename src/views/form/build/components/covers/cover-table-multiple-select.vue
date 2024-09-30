<template>
  <Input>
    <Skeleton :style="{ flex: 1, maxWidth: '32px' }" />
    <Skeleton :style="{ flex: 1, maxWidth: '32px', margin: '0 0 0 8px' }" />
    <Skeleton :style="{ flex: 1, maxWidth: '32px', margin: '0 0 0 8px' }" />
    <ArrowUp :style="{ margin: '0 0 0 auto' }" />
  </Input>
  <Panel :style="{ padding: '6px 8px 8px 8px' }">
    <Table :multiple="true" />
  </Panel>
</template>

<script setup>
  import { Input, Skeleton, ArrowUp, Panel, Table } from './icons';
</script>
