<template>
  <div :style="{ width: '120px', margin: '0 auto' }">
    <div :style="{ display: 'flex', alignItems: 'center' }">
      <Radio />
      <Skeleton size="lg" :style="{ flex: 1 }" />
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', marginTop: '12px' }">
      <Radio :checked="true" />
      <Skeleton size="lg" :style="{ flex: 1 }" />
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', marginTop: '12px' }">
      <Radio />
      <Skeleton size="lg" :style="{ flex: 1 }" />
    </div>
  </div>
</template>

<script setup>
  import { Skeleton, Radio } from './icons';
</script>
