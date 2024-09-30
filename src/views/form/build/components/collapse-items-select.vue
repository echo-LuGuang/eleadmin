<template>
  <div class="collapse-items-select">
    <div class="collapse-items-select-body" @mouseleave="handleMouseleave">
      <div
        v-for="index in 3"
        :key="index"
        :class="[
          'collapse-items-select-item',
          { 'is-active': nums && index <= nums },
          { 'is-selected': model && index <= model }
        ]"
        @mouseenter="handleMouseenter(index)"
        @click="handleClick(index)"
      >
        <Icon
          v-if="index === 1"
          name="ArrowDown"
          class="collapse-items-select-item-icon"
        />
        <Icon
          v-else
          name="ArrowRight"
          class="collapse-items-select-item-icon"
        />
      </div>
    </div>
    <div class="collapse-items-select-text">
      CollapseItem x {{ nums || model || 0 }}
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { Icon } from './covers/icons';

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
  .collapse-items-select {
    position: relative;
  }

  .collapse-items-select-body {
    display: flex;
    flex-direction: column;
    gap: 6px;
    box-sizing: border-box;
  }

  .collapse-items-select-item {
    height: 17px;
    border-radius: 3px;
    border: 1px solid var(--el-border-color);
    position: relative;
    overflow: hidden;
    z-index: 8;

    .collapse-items-select-item-icon {
      position: absolute;
      right: 3px;
      top: 2px;
      font-size: 12px !important;
      color: var(--el-text-color-placeholder) !important;
      transform: scale(0.8);
    }

    &:first-child {
      height: auto;
      padding-top: 16px;

      &::before {
        content: '';
        height: 34px;
        display: block;
        background: var(--el-bg-color);
        border-top: 1px solid var(--el-color-primary-light-7);
      }

      .collapse-items-select-item-icon {
        color: var(--el-color-primary) !important;
        transform: scale(0.88);
      }
    }

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

  .collapse-items-select-text {
    position: absolute;
    right: 0;
    bottom: -20px;
    opacity: 0.68;
    font-size: 12px;
    pointer-events: none;
  }
</style>
