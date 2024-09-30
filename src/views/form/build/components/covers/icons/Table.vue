<template>
  <TableRow
    :multiple="multiple"
    :style="{ borderRadius: '4px 4px 0 0', background: 'var(--el-fill-color)' }"
  >
    <div :style="{ flex: 1, marginLeft: '6px' }"></div>
    <div
      :style="{
        flex: 1,
        height: '8px',
        borderLeft: '1px solid var(--el-border-color)',
        borderRight: '1px solid var(--el-border-color)'
      }"
    ></div>
    <div :style="{ flex: 1 }"></div>
  </TableRow>
  <TableRow :multiple="multiple" />
  <TableRow :multiple="multiple" />
  <TableRow :multiple="multiple" />
</template>

<script setup>
  import { TableRow } from './index';

  defineProps({
    multiple: Boolean
  });
</script>
