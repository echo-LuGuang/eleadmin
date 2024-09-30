<template>
  <div class="grid-select" @mouseleave="handleMouseleave">
    <div v-for="i in 8" :key="i" class="grid-select-tr">
      <div
        v-for="j in 8"
        :key="i + '-' + j"
        :class="[
          'grid-select-td',
          { 'is-active': grid && i <= (grid[0] || 0) && j <= (grid[1] || 0) },
          {
            'is-selected': model && i <= (model[0] || 0) && j <= (model[1] || 0)
          }
        ]"
        @mouseenter="handleMouseenter(i, j)"
        @click="handleClick(i, j)"
      ></div>
    </div>
    <div class="grid-select-text">
      {{ (grid || model || []).join(' x ') }}
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const model = defineModel({ type: Array });

  const grid = ref();

  const handleMouseenter = (i, j) => {
    grid.value = [i, j];
  };

  const handleMouseleave = () => {
    grid.value = void 0;
  };

  const handleClick = (i, j) => {
    model.value = [i, j];
  };
</script>

<style lang="scss" scoped>
  .grid-select {
    position: relative;
  }

  .grid-select-tr {
    display: flex;
  }

  .grid-select > .grid-select-tr:first-child > .grid-select-td {
    border-top: 1px solid var(--el-border-color);
  }

  .grid-select-tr > .grid-select-td:first-child {
    border-left: 1px solid var(--el-border-color);
  }

  .grid-select .grid-select-tr .grid-select-td {
    flex: 1;
    height: 12px;
    border-right: 1px solid var(--el-border-color);
    border-bottom: 1px solid var(--el-border-color);
    position: relative;
    overflow: hidden;

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

  .grid-select-text {
    position: absolute;
    right: 0;
    bottom: -18px;
    opacity: 0.68;
    font-size: 12px;
    pointer-events: none;
  }
</style>
