<template>
  <Input
    :style="{ height: '48px', padding: '6px 6px 0 6px', display: 'block' }"
  >
    <Skeleton />
    <div :style="{ display: 'flex', alignItems: 'center', marginTop: '6px' }">
      <Skeleton :style="{ width: '50%' }" />
      <Cursor />
    </div>
  </Input>
</template>

<script setup>
  import { Input, Skeleton, Cursor } from './icons';
</script>
