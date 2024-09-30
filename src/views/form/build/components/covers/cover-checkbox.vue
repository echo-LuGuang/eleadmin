<template>
  <div :style="{ width: '120px', margin: '0 auto' }">
    <div :style="{ display: 'flex', alignItems: 'center' }">
      <Checkbox size="lg" />
      <Skeleton size="lg" :style="{ flex: 1 }" />
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', marginTop: '12px' }">
      <Checkbox :checked="true" size="lg" />
      <Skeleton size="lg" :style="{ flex: 1 }" />
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', marginTop: '12px' }">
      <Checkbox size="lg" />
      <Skeleton size="lg" :style="{ flex: 1 }" />
    </div>
  </div>
</template>

<script setup>
  import { Skeleton, Checkbox } from './icons';
</script>
