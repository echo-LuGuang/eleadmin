<template>
  <div :style="{ display: 'flex', alignItems: 'center' }">
    <div
      :style="{
        flexShrink: 0,
        width: '52px',
        height: '6px',
        borderRadius: '6px',
        background: 'var(--el-color-primary)'
      }"
    ></div>
    <div
      :style="{
        flexShrink: 0,
        width: '17px',
        height: '17px',
        margin: '0 -6px',
        background: '#fff',
        borderRadius: '50%',
        border: '3px solid var(--el-color-primary)',
        boxShadow: '0 0 0 1px rgba(255,255,255,.4)',
        boxSizing: 'border-box',
        position: 'relative',
        zIndex: 2
      }"
    ></div>
    <div
      :style="{
        flex: 1,
        height: '6px',
        borderRadius: '6px',
        background: 'var(--el-fill-color)'
      }"
    ></div>
  </div>
</template>
