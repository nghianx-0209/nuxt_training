<template>Section setting</template>

<script setup>
import router1 from "~/routes/router1";

const breakcrumb = useBreakcrumb();
const client = useClient();
const route = useRoute();
const exam = useExam();
const currentPage = route.path.split("/").slice(-1)[0];
const parentItem = router1.find(route => route.url === currentPage || route.childs?.some(child => child.url === currentPage));
const subItem = parentItem.childs?.find(child => child.url === currentPage);

breakcrumb.value[0] = {
  title: client.value.info.userId,
  url: `/client/${client.value.info.clientId}/top`
};
breakcrumb.value[1] = {
  title: exam.value.examId,
  url: undefined
};
breakcrumb.value[2] = {
  title: parentItem.name,
  url: undefined
};
if (subItem) breakcrumb.value[3] = {
  title: subItem.name,
  url: undefined
};

definePageMeta({
  layout: "exam-top",
  middleware: [
    "auth"
  ]
});
</script>
