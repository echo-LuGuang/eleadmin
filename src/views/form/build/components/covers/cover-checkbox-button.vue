<template>
  <div
    :style="{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto',
      width: '150px'
    }"
  >
    <RadioButton :type="1" checked :style="{ borderRight: '1px solid #fff' }" />
    <RadioButton :type="2" checked />
    <RadioButton :type="3" />
  </div>
</template>

<script setup>
  import { RadioButton } from './icons';
</script>
