<template>
  <div
    :style="{
      display: 'flex',
      gap: '8px',
      padding: '0 52px 0 0'
    }"
  >
    <div
      v-for="i in 3"
      :key="i"
      :style="{
        flex: 1,
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',
        border: '1px solid var(--el-border-color)',
        borderBottom: 'none',
        padding: '10px 16px'
      }"
    >
      <Skeleton size="sm" />
    </div>
  </div>
  <div
    :style="{
      padding: '22px 16px 32px 16px',
      border: '1px solid var(--el-border-color)'
    }"
  >
    <Skeleton />
    <Skeleton :style="{ marginTop: '22px' }" />
    <Skeleton :style="{ marginTop: '22px', width: '60%' }" />
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
