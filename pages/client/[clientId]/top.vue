<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main">
    <div class="fixed page-title flex item-center">{{ client?.info.userId }}</div>
    <div class="body-page">
      <div class="page-wrapper">
        <TTable :data="data" :cellWidth="cellWidth" :actions="[actions1]" activeRow />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      title: "Sun Asterisk - ASP 1",
      data: {
        header: ["検査名", "検査種別"],
        body: [
          { a: 1, b: 2 },
          { a: 2, b: 5 },
          { a: 3, b: 5 },
          { a: 4, b: 5 },
          { a: 5, b: 5 },
          { a: 6, b: 5 },
          { a: 7, b: 5 },
          { a: 8, b: 5 },
          { a: 9, b: 5 },
          { a: 10, b: 5 },
          { a: 11, b: 5 },
          { a: 12, b: 5 },
          { a: 13, b: 5 },
          { a: 14, b: 5 },
          { a: 15, b: 5 },
        ],
      },
      // eslint-disable-next-line camelcase
      cellWidth: [65, 20],
    };
  },
  methods: {
    actions1(value: Number) {
      console.log(value)
    },
  },
};
</script>

<script setup lang="ts">
const client = useClient();
definePageMeta({
  layout: "default",
  middleware: [
    "auth"
  ]
});
</script>

<style lang="scss">
.page-title {
  background-color: #fff;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding: 16px 48px;
  box-shadow: 0 4px 8px 0 rgba(129, 138, 160, 0.1);
  color: $main-green-500;
  font-size: 1.125rem;
  font-weight: 600;
}

.body-page {
  padding: 0px 24px;
  padding-top: 88px;
}

.page-wrapper {
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
}
</style>
