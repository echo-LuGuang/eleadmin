<template>
  <div
    :style="{
      flex: 1,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    }"
  >
    <slot></slot>
  </div>
</template>
