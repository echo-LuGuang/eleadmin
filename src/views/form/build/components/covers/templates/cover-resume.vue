<template>
  <CoverResumeView />
  <div
    :style="{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      marginTop: '16px'
    }"
  >
    <Button type="primary" style="width: 68px; padding: 0 16px" />
    <Button style="width: 68px" />
  </div>
</template>

<script setup>
  import { Button } from '../icons';
  import CoverResumeView from './cover-resume-view.vue';
</script>
