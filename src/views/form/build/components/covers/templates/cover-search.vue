<template>
  <div
    :style="{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginTop: '32px'
    }"
  >
    <div style="flex: 1">
      <Skeleton />
      <Skeleton :style="{ marginTop: '26px' }" />
      <Skeleton :style="{ marginTop: '26px' }" />
    </div>
    <div style="flex: 1">
      <Skeleton />
      <Skeleton :style="{ marginTop: '26px' }" />
      <Skeleton :style="{ marginTop: '26px' }" />
    </div>
    <div style="flex: 1">
      <Skeleton />
      <Skeleton :style="{ marginTop: '26px' }" />
      <div
        style="display: flex; align-items: center; gap: 6px; margin-top: 20px"
      >
        <Button
          type="primary"
          :hideSkeleton="true"
          style="flex: 1; height: 20px"
        />
        <Button style="flex: 1; height: 20px" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { Skeleton, Button } from '../icons';
</script>
