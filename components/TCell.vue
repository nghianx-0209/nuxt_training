<template>
  <!-- {{ header }} -->
  <th v-if="header" class="t-cell" :style="cssProps" :class="{'action': data.type == 'action'}">
    {{ data.value }}
  </th>
  <td v-else class="t-cell" :style="cssProps" :class="{'action': data.type == 'action'}">
    <span v-if="data.type == 'normal'">{{ data.value }}</span>
    <TButton
      v-if="data.type == 'action'"
      :actions="
        () => {
          exam = { examId: data.examId };
          click(data.url);
        }
      "
      title="選択"
      secondary
    />
  </td>
</template>

<script setup>
const exam = useExam();
defineProps({
  data: {
    type: Object,
    default: undefined,
  },
  cell_w: {
    type: [String, Number],
    required: true,
  },
  header: {
    type: Boolean,
    default: false,
  },
});
</script>

<script>
export default {
  data() {
    return {
      test: 1,
    };
  },
  computed: {
    cssProps() {
      return {
        "--width": `${this.cell_w}%`,
      };
    },
  },
  methods: {
    click(url) {
      if (!this.header) {
        navigateTo(url);
        // console.log(url);
        // this.data.value(this.test);
      }
    },
  },
};
</script>

<style lang="scss">
.t-cell {
  width: var(--width);
  background-color: inherit;
  overflow: auto;
  text-overflow: ellipsis;
  text-align: start;

  &:last-child {
    .action {
      width: 100% !important;
      text-align: end;
    }
  }
}

// .t-cell:last-child {
//   width: 100% !important;
//   text-align: end;
// }
</style>
