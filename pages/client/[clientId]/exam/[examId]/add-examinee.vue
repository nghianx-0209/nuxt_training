<template>nn</template>

<script setup>
import router1 from "~/routes/router1";
const breakcrumb = useBreakcrumb();
const route = useRoute();
const currentPage = '/' + route.path.split('/').slice(-1)[0];

const parentItem = router1.find(route => route.url === currentPage || route.childs?.some(child => child.url === currentPage));
const subItem = parentItem.childs?.find(child => child.url === currentPage);


breakcrumb.value[0] = "Sun Asterisk - ASP 1";
breakcrumb.value[1] = parentItem.name;
breakcrumb.value[2] = subItem?.name;

console.log(breakcrumb)

definePageMeta({
  layout: "exam-top",
});
</script>
