<template>
  <Input :style="{ fontSize: '12px', color: 'var(--el-text-color-secondary)' }">
    <Text>湖北省 / 武汉市 / 江汉区</Text>
    <ArrowUp />
  </Input>
  <Panel
    :style="{
      fontSize: '12px',
      lineHeight: '18px',
      color: 'var(--el-text-color-secondary)',
      textAlign: 'center',
      padding: '5px 6px'
    }"
  >
    <div :style="{ display: 'flex', alignItems: 'center' }">
      <Text>湖北省</Text>
      <Arrow :style="{ margin: '0 0 0 4px' }" />
      <Text>武汉市</Text>
      <Arrow :style="{ margin: '0 0 0 4px' }" />
      <Text>江汉区</Text>
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', marginTop: '2px' }">
      <Text>湖南省</Text>
      <Arrow :style="{ margin: '0 0 0 4px' }" />
      <Text>宜昌市</Text>
      <Arrow :style="{ margin: '0 0 0 4px' }" />
      <Text>武昌区</Text>
    </div>
    <div :style="{ display: 'flex', alignItems: 'center', marginTop: '2px' }">
      <Text>广东省</Text>
      <Arrow :style="{ margin: '0 0 0 4px' }" />
      <Text>襄阳市</Text>
      <Arrow :style="{ margin: '0 0 0 4px' }" />
      <Text>洪山区</Text>
    </div>
  </Panel>
</template>

<script setup>
  import { Input, ArrowUp, Panel, Arrow, Text } from './icons';
</script>
