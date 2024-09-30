<template>
  <Input>
    <Skeleton :style="{ flex: 1, maxWidth: '32px' }" />
    <Skeleton :style="{ flex: 1, maxWidth: '32px', margin: '0 0 0 8px' }" />
    <Skeleton :style="{ flex: 1, maxWidth: '32px', margin: '0 0 0 8px' }" />
    <Cursor :style="{ margin: '0 0 0 8px' }" />
  </Input>
</template>

<script setup>
  import { Input, Skeleton, Cursor } from './icons';
</script>
