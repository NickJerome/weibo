<script setup>
import { NCard } from 'naive-ui';

const props = defineProps({
  title: { type: string, required: true },
})
</script>

<template>
  <n-card :title="props.title">
    <template #header-extra>
      #header-extra
    </template>
    卡片内容
    <template #footer>
      #footer
    </template>
    <template #action>
      #action
    </template>
  </n-card>
</template>

<style scoped>
</style>