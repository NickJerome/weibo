<script setup>
import TopicCard from '../components/TopicCard.vue';

const items = [
  { title: "nihao" },
  { title: "test" },
]
</script>

<template>
  <TopicCard v-for="item in items"
    :title="item.title">
  </TopicCard>
</template>

<style scoped>
</style>