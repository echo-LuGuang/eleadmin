<template>
  <div :style="{ width: '120px', margin: '0 auto' }">
    <div
      :style="{
        display: 'flex',
        alignItems: 'flex-start',
        position: 'relative'
      }"
    >
      <Radio
        size="large"
        :style="{
          color: 'var(--el-color-primary)',
          background: 'var(--el-color-primary-light-9)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }"
      >
        <Icon name="CheckOutlined" :style="{ fontSize: '12px' }" />
      </Radio>
      <div :style="{ flex: 1, paddingTop: '3px' }">
        <Skeleton size="md" />
        <Skeleton size="sm" :style="{ marginTop: '8px', width: '60%' }" />
      </div>
      <div
        :style="{
          borderLeft: '1px solid var(--el-color-primary)',
          height: '9px',
          position: 'absolute',
          top: '26px',
          left: '11px'
        }"
      ></div>
    </div>
    <div
      :style="{
        display: 'flex',
        alignItems: 'flex-start',
        marginTop: '12px',
        position: 'relative'
      }"
    >
      <Radio
        size="large"
        :style="{
          color: '#fff',
          background: 'var(--el-color-primary)',
          border: 'none'
        }"
      >
        2
      </Radio>
      <div :style="{ flex: 1, paddingTop: '3px' }">
        <Skeleton size="md" />
        <Skeleton size="sm" :style="{ marginTop: '8px', width: '60%' }" />
      </div>
      <div
        :style="{
          borderLeft: '1px solid var(--el-border-color)',
          height: '9px',
          position: 'absolute',
          top: '26px',
          left: '11px'
        }"
      ></div>
    </div>
    <div
      :style="{ display: 'flex', alignItems: 'flex-start', marginTop: '12px' }"
    >
      <Radio
        size="large"
        :style="{ background: 'var(--el-fill-color-light)', border: 'none' }"
      >
        3
      </Radio>
      <div :style="{ flex: 1, paddingTop: '3px' }">
        <Skeleton size="md" />
        <Skeleton size="sm" :style="{ marginTop: '8px', width: '60%' }" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { Skeleton, Radio, Icon } from './icons';
</script>
