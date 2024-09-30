<template>
  <div
    :style="{
      display: 'flex',
      alignItems: 'center',
      gap: '22px',
      marginTop: '8px'
    }"
  >
    <div style="flex: 1">
      <Skeleton />
      <Skeleton :style="{ marginTop: '26px' }" />
      <Skeleton :style="{ marginTop: '26px' }" />
      <Skeleton :style="{ marginTop: '26px' }" />
    </div>
    <div style="flex: 1">
      <Skeleton />
      <Skeleton :style="{ marginTop: '26px' }" />
      <Skeleton :style="{ marginTop: '26px' }" />
      <Skeleton :style="{ marginTop: '26px' }" />
    </div>
  </div>
  <div style="display: flex; align-items: center; gap: 16px; margin-top: 28px">
    <Button type="primary" style="width: 68px; padding: 0 16px" />
    <Button style="width: 68px" />
  </div>
</template>

<script setup>
  import { Skeleton, Button } from '../icons';
</script>
