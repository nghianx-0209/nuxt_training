<template>Section setting</template>

<script setup>
import router1 from "~/routes/router1";
const breakcrumb = useBreakcrumb();
const route = useRoute();
const currentPage = '/' + route.path.split('/').slice(-1)[0];

console.log(router1.find(route => route.url === currentPage || route.childs?.some(child => child.url === currentPage)));
definePageMeta({
  layout: "exam-top",
});
</script>
