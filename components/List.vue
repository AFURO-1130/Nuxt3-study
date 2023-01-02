<script lang="ts" setup>
const getJsonData = useGetJsons();
</script>
<template>
  <!-- タイトルと本文を流すようにするか -->
  <div>
    <div v-if="getJsonData">
      <div v-for="getJson in getJsonData" v-bind:key="getJson.title">
        <p>{{ getJson.id }}</p>
        <p>{{ getJson.title }}</p>
      </div>
    </div>
    <p v-else>loading</p>
  </div>
</template>
