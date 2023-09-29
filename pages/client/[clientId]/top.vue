<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main">
    <div class="fixed page-title flex item-center">
      {{ client?.info.userId }}
    </div>
    <div class="body-page">
      <div class="page-wrapper">
        <!-- {{ exams }} -->
        <TTable
          v-if="data"
          :data="data"
          :cellWidth="cellWidth"
          :actions="[
            {
              title: '選択',
              handle: (selectedExam, index) => {
                exam = exams[index];
                actions1(exams[index]);
              },
            },
          ]"
          :test="exams ? exams[0].exam_name : undefined"
          activeRow
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Sun Asterisk - ASP 1",
      // data: {
      //   header: ["検査名", "検査種別"],
      //   body: [],
      // },
      // eslint-disable-next-line camelcase
      cellWidth: [65, 20],
    };
  },
  methods: {
    actions1(value) {
      navigateTo(`exam/${value.id}/exam-top`);
    },
  },
};
</script>

<script setup>
const client = useClient();
const exam = useExam();

const exams = ref(null);
const data = ref(null);

async function fetchData() {
  const response = await fetch("http://localhost:3000/exam");
  const realData = await response.json();
  exams.value = realData;
  data.value = {
    header: ["検査名", "検査種別"],
    body: realData.map((exam) => ({
      examName: exam.exam_name,
      examType: exam.recruitment ? "採用用" : "現有社員用"
    })),
  };
}

fetchData();

definePageMeta({
  layout: "default",
  middleware: ["auth"],
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
