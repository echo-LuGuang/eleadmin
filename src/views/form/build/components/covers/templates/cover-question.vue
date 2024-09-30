<template>
  <Skeleton size="sm" :style="{ width: '100px', margin: '0 auto' }" />
  <Skeleton size="sm" :style="{ marginTop: '16px' }" />
  <Skeleton size="sm" :style="{ width: '70%', marginTop: '16px' }" />
  <Skeleton size="sm" :style="{ width: '50%', marginTop: '28px' }" />
  <Skeleton size="sm" :style="{ width: '90%', marginTop: '16px' }" />
  <Skeleton size="sm" :style="{ width: '90%', marginTop: '16px' }" />
  <Skeleton size="sm" :style="{ width: '50%', marginTop: '16px' }" />
  <div
    :style="{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      marginTop: '20px'
    }"
  >
    <Button type="primary" style="width: 68px; padding: 0 16px" />
    <Button style="width: 68px" />
  </div>
</template>

<script setup>
  import { Skeleton, Button } from '../icons';
</script>
