<template>
  <div class="cols-select">
    <div class="cols-select-body" @mouseleave="handleMouseleave">
      <div
        v-for="index in 6"
        :key="index"
        :class="[
          'cols-select-item',
          { 'is-active': nums && index <= nums },
          { 'is-selected': model && index <= model }
        ]"
        @mouseenter="handleMouseenter(index)"
        @click="handleClick(index)"
      ></div>
    </div>
    <div class="cols-select-text">Col x {{ nums || model || 0 }}</div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const model = defineModel({ type: Number });

  const nums = ref();

  const handleMouseenter = (size) => {
    nums.value = size;
  };

  const handleMouseleave = () => {
    nums.value = void 0;
  };

  const handleClick = (size) => {
    model.value = size;
  };
</script>

<style lang="scss" scoped>
  .cols-select {
    position: relative;
  }

  .cols-select-body {
    display: grid;
    grid-gap: 12px 8px;
    grid-template-columns: repeat(3, 1fr);
    box-sizing: border-box;
  }

  .cols-select-item {
    height: 24px;
    border-radius: 4px;
    border: 1px solid var(--el-border-color);
    position: relative;
    overflow: hidden;
    z-index: 8;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: hsla(0, 0%, 52%, 0.08);
    }

    &.is-selected {
      background: var(--el-color-primary-light-9);
      border-color: var(--el-color-primary-light-7);
    }

    &:not(.is-active)::after {
      display: none;
    }
  }

  .cols-select-text {
    position: absolute;
    right: 0;
    bottom: -26px;
    opacity: 0.68;
    font-size: 12px;
    pointer-events: none;
  }
</style>
