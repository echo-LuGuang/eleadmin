<template>
  <div
    :style="{
      display: 'flex',
      alignItems: 'center',
      height: '26px',
      padding: '0 6px',
      boxSizing: 'border-box',
      border: '1px solid var(--el-color-primary)',
      boxShadow: '0 0 0 2px var(--el-color-primary-light-8)',
      borderRadius: '4px'
    }"
  >
    <slot></slot>
  </div>
</template>
