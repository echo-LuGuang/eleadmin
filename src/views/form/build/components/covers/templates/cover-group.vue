<template>
  <div :style="{ display: 'flex', gap: '12px' }">
    <div
      :style="{
        flex: 1,
        border: '1px solid var(--el-border-color)',
        borderRadius: '4px'
      }"
    >
      <div
        :style="{
          padding: '14px 16px',
          borderBottom: '1px solid var(--el-border-color)'
        }"
      >
        <Skeleton size="sm" :style="{ width: '60%' }" />
      </div>
      <div :style="{ padding: '22px 16px' }">
        <Skeleton />
        <Skeleton :style="{ marginTop: '22px' }" />
        <Skeleton :style="{ marginTop: '22px' }" />
      </div>
    </div>
    <div
      :style="{
        flex: 1,
        border: '1px solid var(--el-border-color)',
        borderRadius: '4px'
      }"
    >
      <div
        :style="{
          padding: '14px 16px',
          borderBottom: '1px solid var(--el-border-color)'
        }"
      >
        <Skeleton size="sm" :style="{ width: '60%' }" />
      </div>
      <div :style="{ padding: '22px 16px' }">
        <Skeleton />
        <Skeleton :style="{ marginTop: '22px' }" />
        <Skeleton :style="{ marginTop: '22px' }" />
      </div>
    </div>
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
