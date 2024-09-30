<template>
  <Skeleton :style="{ marginTop: '8px' }" />
  <Skeleton :style="{ marginTop: '26px' }" />
  <Skeleton :style="{ marginTop: '26px' }" />
  <Skeleton :style="{ marginTop: '26px' }" />
  <div style="display: flex; align-items: center; gap: 16px; margin-top: 29px">
    <Button type="primary" style="width: 68px; padding: 0 16px" />
    <Button style="width: 68px" />
  </div>
</template>

<script setup>
  import { Skeleton, Button } from '../icons';
</script>
