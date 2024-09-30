<template>
  <div :style="{ width: '88px', margin: '0 auto', position: 'relative' }">
    <Card :checked="true" />
    <Card :style="{ margin: '6px 0 0 0' }" />
    <Card :style="{ margin: '6px 0 0 0' }" />
  </div>
</template>

<script setup>
  import { Card } from './icons';
</script>
