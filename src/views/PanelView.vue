<script setup>
import { NGrid, NGi } from 'naive-ui';
import TopicCard from '../components/TopicCard.vue';

const items = [
  {
    title: "#现在的你会考虑买房吗#",
    counts: {
      read: 1112323141,
      discuss: 2391745917,
      creater: 156,
    },
    detail: "https://weibo.com/test1"
  },
  {
    title: "#90后为什么不喝星巴克了#",
    counts: {
      read: 9031289478,
      discuss: 3665,
      creater: 1625,
    },
    detail: "https://weibo.com/test2"
  },
];
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