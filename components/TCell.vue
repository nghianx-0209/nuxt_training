<template>
  <!-- {{ header }} -->
  <th v-if="header" class="t-cell" :style="cssProps">
    {{ data.value }}
  </th>
  <td v-else class="t-cell" :style="cssProps">
    <span v-if="data.type == 'normal'">{{ data.value }}</span>
    <TButton
      v-if="data.type == 'action'"
      :actions="click"
      title="選択"
      secondary
    />
  </td>
</template>

<script setup>
const props = defineProps({
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
    click() {
      if (!this.header) {
        this.data.value(this.test);
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
  width: 100% !important;
  text-align: end;
}
}

// .t-cell:last-child {
//   width: 100% !important;
//   text-align: end;
// }
</style>
