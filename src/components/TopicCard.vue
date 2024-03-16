<script setup>
import { NCard, NRow, NCol, NStatistic, NButton } from 'naive-ui';

const props = defineProps(['obj']);

function formatCompactNumber(number) {
  const formatter = Intl.NumberFormat("zh-cn", { notation: "compact" });
  return formatter.format(number);
}
</script>

<template>
  <n-card :title="props.obj.title">
    <n-row>
      <n-col :span="8">
        <n-statistic 
          label="阅读次数" 
          :value="formatCompactNumber(props.obj.counts.read)">
        </n-statistic>
      </n-col>
      <n-col :span="8">
        <n-statistic 
          label="讨论次数" 
          :value="formatCompactNumber(props.obj.counts.discuss)">
        </n-statistic>
      </n-col>
      <n-col :span="8">
        <n-statistic 
          label="原创人数" 
          :value="formatCompactNumber(props.obj.counts.creater)">
        </n-statistic>
      </n-col>
    </n-row>
    <template #action>
      <n-button
        tag="a"
        :href="props.obj.detail"
        target="_blank"
      >详情</n-button>
    </template>
  </n-card>
</template>

<style scoped>
</style>