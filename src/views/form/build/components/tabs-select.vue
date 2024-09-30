<template>
  <div class="tabs-select">
    <div class="tabs-select-header" @mouseleave="handleMouseleave">
      <div
        v-for="index in 4"
        :key="index"
        :class="[
          'tabs-select-item',
          { 'is-active': nums && index <= nums },
          { 'is-selected': model && index <= model }
        ]"
        @mouseenter="handleMouseenter(index)"
        @click="handleClick(index)"
      ></div>
    </div>
    <div class="tabs-select-body"></div>
    <div class="tabs-select-text">TabPane x {{ nums || model || 0 }}</div>
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
  .tabs-select {
    position: relative;
  }

  .tabs-select-header {
    display: flex;
    gap: 4px;
    padding: 0 12px 0 0;
  }

  .tabs-select-item {
    flex: 1;
    height: 16px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px solid var(--el-border-color);
    border-bottom: none;
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
      box-shadow: 0 0.8px 0px 0px var(--el-color-primary-light-7);
    }

    &:not(.is-active)::after {
      display: none;
    }
  }

  .tabs-select-body {
    height: 76px;
    border: 1px solid var(--el-border-color);
  }

  .tabs-select-text {
    position: absolute;
    right: 0;
    bottom: -20px;
    opacity: 0.68;
    font-size: 12px;
    pointer-events: none;
  }
</style>
