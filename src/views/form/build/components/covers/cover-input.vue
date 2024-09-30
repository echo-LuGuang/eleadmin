<template>
  <Input>
    <Skeleton :style="{ width: '50%' }" />
    <Cursor />
  </Input>
</template>

<script setup>
  import { Input, Skeleton, Cursor } from './icons';
</script>
