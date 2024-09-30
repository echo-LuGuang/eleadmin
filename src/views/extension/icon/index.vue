<template>
  <ele-page>
    <demo-basic />
    <demo-advanced />
  </ele-page>
</template>

<script setup>
  import DemoBasic from './components/demo-basic.vue';
  import DemoAdvanced from './components/demo-advanced.vue';

  defineOptions({ name: 'ExtensionIcon' });
</script>
