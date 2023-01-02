<template>
  <div>
    <p>
      {{ count }}
      <button @click="downCount">-</button>
      <button @click="upCount">+</button>
      <button @click="setCount(0)">reset</button>
    </p>
    <p>自在に数字入力(終わったらエンター押してね)</p>
    <input type="number" v-model.number="currentCount" />
    <button @click="customNumber(currentCount)">任意の数字入力</button>
  </div>
</template>

<script setup lang="ts">
const { count, downCount, upCount, setCount } = useCounter();
const currentCount = ref<number>(0);
// todo:下記の関数をもっとスマートにできそう
const customNumber = (count: number) => {
  setCount(count);
  currentCount.value = 0;
};
</script>

<style></style>
