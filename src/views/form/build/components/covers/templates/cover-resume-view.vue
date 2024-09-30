<template>
  <Skeleton size="sm" :style="{ width: '48px', margin: '0 auto' }" />
  <div :style="{ display: 'flex', gap: '18px', marginTop: '16px' }">
    <div :style="{ flex: 1 }">
      <Skeleton size="sm" />
      <Skeleton size="sm" :style="{ marginTop: '12px' }" />
      <Skeleton size="sm" :style="{ marginTop: '12px' }" />
    </div>
    <div :style="{ flex: 1 }">
      <Skeleton size="sm" />
      <Skeleton size="sm" :style="{ marginTop: '12px' }" />
      <Skeleton size="sm" :style="{ marginTop: '12px' }" />
    </div>
    <div
      :style="{
        flexShrink: 0,
        width: '32px',
        height: '40px',
        border: '1px solid var(--el-border-color-light)',
        borderRadius: '3px',
        overflow: 'hidden'
      }"
    >
      <Skeleton
        :style="{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          margin: '10px auto 0 auto'
        }"
      />
      <Skeleton
        :style="{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          margin: '2px auto 0 auto'
        }"
      />
    </div>
  </div>
  <Skeleton size="sm" :style="{ marginTop: '20px' }" />
  <Skeleton size="sm" :style="{ width: '50%', marginTop: '16px' }" />
  <Skeleton size="sm" :style="{ marginTop: '16px' }" />
  <Skeleton size="sm" :style="{ width: '50%', marginTop: '16px' }" />
</template>

<script setup>
  import { Skeleton } from '../icons';
</script>
