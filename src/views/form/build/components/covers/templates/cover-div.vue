<template>
  <Skeleton size="sm" :style="{ width: '30%' }" />
  <Skeleton size="sm" :style="{ marginTop: '16px' }" />
  <Skeleton size="sm" :style="{ marginTop: '16px' }" />
  <Skeleton size="sm" :style="{ width: '30%', margin: '26px 0 12px 0' }" />
  <div
    :style="{
      padding: '16px',
      border: '1px solid var(--el-border-color)',
      borderRadius: '4px'
    }"
  >
    <Skeleton size="sm" />
    <Skeleton size="sm" :style="{ marginTop: '16px', width: '60%' }" />
  </div>
  <div
    :style="{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      marginTop: '16px'
    }"
  >
    <Button type="primary" style="width: 68px; padding: 0 16px" />
    <Button style="width: 68px" />
  </div>
</template>

<script setup>
  import { Skeleton, Button } from '../icons';
</script>
