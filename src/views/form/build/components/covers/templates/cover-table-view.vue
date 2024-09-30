<template>
  <div
    :style="{
      flex: 1,
      border: '1px solid var(--el-border-color)',
      borderRadius: '4px'
    }"
  >
    <div
      :style="{
        height: '26px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid var(--el-border-color)'
      }"
    >
      <div :style="{ width: '25%', padding: '0 8px', boxSizing: 'border-box' }">
        <Skeleton size="sm" />
      </div>
      <div
        :style="{
          width: '25%',
          height: '100%',
          borderLeft: '1px solid var(--el-border-color)',
          borderRight: '1px solid var(--el-border-color)',
          boxSizing: 'border-box'
        }"
      ></div>
      <div :style="{ width: '25%', padding: '0 8px', boxSizing: 'border-box' }">
        <Skeleton size="sm" />
      </div>
      <div
        :style="{
          width: '25%',
          height: '100%',
          borderLeft: '1px solid var(--el-border-color)',
          boxSizing: 'border-box'
        }"
      ></div>
    </div>
    <div
      :style="{
        height: '26px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid var(--el-border-color)'
      }"
    >
      <div :style="{ width: '25%', padding: '0 8px', boxSizing: 'border-box' }">
        <Skeleton size="sm" />
      </div>
      <div
        :style="{
          width: '25%',
          height: '100%',
          borderLeft: '1px solid var(--el-border-color)',
          borderRight: '1px solid var(--el-border-color)',
          boxSizing: 'border-box'
        }"
      ></div>
      <div :style="{ width: '25%', padding: '0 8px', boxSizing: 'border-box' }">
        <Skeleton size="sm" />
      </div>
      <div
        :style="{
          width: '25%',
          height: '100%',
          borderLeft: '1px solid var(--el-border-color)',
          boxSizing: 'border-box'
        }"
      ></div>
    </div>
    <div
      :style="{
        height: '46px',
        display: 'flex',
        borderBottom: '1px solid var(--el-border-color)'
      }"
    >
      <div
        :style="{
          padding: '6px 12px',
          height: '100%',
          boxSizing: 'border-box',
          borderRight: '1px solid var(--el-border-color)'
        }"
      >
        <Skeleton size="sm" :style="{ width: '6px', height: '100%' }" />
      </div>
    </div>
    <div :style="{ height: '30px', padding: '12px 12px' }">
      <Skeleton size="sm" />
      <Skeleton size="sm" :style="{ marginTop: '10px', width: '60%' }" />
    </div>
  </div>
</template>

<script setup>
  import { Skeleton } from '../icons';
</script>
