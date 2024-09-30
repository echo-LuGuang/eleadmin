<template>
  <div
    :style="{
      width: '46px',
      height: '34px',
      borderRadius: '4px',
      background: 'var(--el-fill-color)',
      position: 'relative',
      overflow: 'hidden'
    }"
  >
    <div
      :style="{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        background: 'var(--el-border-color)',
        position: 'absolute',
        right: '6px',
        top: '6px'
      }"
    ></div>
    <div
      :style="{
        width: '40px',
        height: '40px',
        borderRadius: '6px',
        background: 'var(--el-border-color)',
        transform: 'rotate(45deg)',
        position: 'absolute',
        bottom: '-24px',
        left: '-4px'
      }"
    ></div>
  </div>
</template>
