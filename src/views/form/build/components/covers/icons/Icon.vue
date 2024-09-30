<template>
  <div
    :style="{
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--el-color-primary)',
      fontSize: '16px'
    }"
  >
    <slot>
      <component :is="name" width="1em" height="1em" :style="iconStyle" />
    </slot>
  </div>
</template>

<script setup>
  import {
    ArrowUp,
    ArrowDown,
    ArrowRight,
    CheckOutlined,
    CalendarOutlined,
    PlusOutlined,
    StarFilled,
    ClockCircleOutlined
  } from '@/components/icons';

  defineOptions({
    components: {
      ArrowUp,
      ArrowDown,
      ArrowRight,
      CheckOutlined,
      CalendarOutlined,
      PlusOutlined,
      StarFilled,
      ClockCircleOutlined
    }
  });

  defineProps({
    name: String,
    iconStyle: Object
  });
</script>
