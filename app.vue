<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const layout = "exam-top";
const route = useRoute();
// console.log(route.path);
</script>

<script>
export default {
  mounted() {
    const route = useRoute();
    console.log(route.path);
  },
};
</script>
