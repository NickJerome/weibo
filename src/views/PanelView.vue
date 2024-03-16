<script setup>
import { NGrid, NGi } from 'naive-ui';
import TopicCard from '../components/TopicCard.vue';
import 

const topics = ref<Topic[]>([])

onMount(() => {
  
})
</script>

<template>
  <n-grid x-gap="12" :cols="4">
    <n-gi v-for="item in items">
      <TopicCard :obj="item"></TopicCard>
    </n-gi>
  </n-grid>
</template>

<style scoped>
</style>