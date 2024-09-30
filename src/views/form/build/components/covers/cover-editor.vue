<template>
  <Input :style="{ height: 'auto', padding: '8px 6px', display: 'block' }">
    <div :style="{ display: 'flex', alignItems: 'center' }">
      <Image />
      <div :style="{ flex: 1, marginLeft: '12px' }">
        <Skeleton />
        <Skeleton :style="{ marginTop: '8px' }" />
      </div>
    </div>
    <Skeleton :style="{ marginTop: '8px' }" />
    <div :style="{ display: 'flex', alignItems: 'center', marginTop: '6px' }">
      <Skeleton :style="{ width: '50%' }" />
      <Cursor />
    </div>
  </Input>
</template>

<script setup>
  import { Input, Skeleton, Cursor, Image } from './icons';
</script>
