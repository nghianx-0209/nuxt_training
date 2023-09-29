<template>
  <tr class="t-row" :class="{ active: active }">
    <!-- {{ data }} -->
    <TCell
      v-for="(cell, index) in rowData"
      :data="cell"
      :cellWidth="cellWidth[index]"
      :header="header"
      :key="index"
      :noData="noData"
      :selectToggle="
        (checked) => selectToggle({ checked: checked, data: data })
      "
      :defaultSelect="defaultSelect"
    />
  </tr>
</template>

<script setup>
defineProps({
  data: Object || Array,
  cellWidth: Array,
  header: {
    type: Boolean,
    default: false,
  },
  actions: Array,
  actionsSize: Number,
  active: {
    type: Boolean,
    default: false,
  },
  noData: {
    type: Number,
    default: 1,
  },
  selectAll: {
    type: Boolean,
    default: false,
  },
  selectToggle: {
    type: Function,
    default: () => {},
  },
  defaultSelect: {
    type: Boolean,
    default: false,
  },
});
</script>

<script>
export default {
  data() {
    return {
      rowData: [],
      test: 1,
      select: false,
    };
  },
  mounted() {
    if (!this.header) {
      if (this.selectAll) {
        this.rowData[0] = {
          type: "checkbox",
          value: undefined,
        };
      }

      this.rowData = [
        ...this.rowData,
        ...Object.values(this.data).map((item) => ({
          value: item,
          type: "normal",
        })),
      ];

      if (this.noData === 1) {
        this.actions.forEach((action, index) => {
          this.rowData.push({
            type: "action",
            value: () => action.handle(this.data, index),
            title: action.title,
          });
        });
      }
    } else {
      this.rowData = this.data.map((item) => ({ value: item }));
      for (let i = 0; i < this.actionsSize; ++i) this.rowData.push("");
    }
  },
  computed: {
    cssProps() {
      return {
        "--width": `${this.cellWidth}%`,
      };
    },
  },
  watch: {
    data: {
      handler(oldValue) {
        this.rowData = [];
        if (this.selectAll) {
          this.rowData[0] = {
            type: "checkbox",
            value: undefined,
          };
        }
        this.rowData = [
          ...this.rowData,
          ...Object.values(oldValue).map((item) => ({
            value: item,
            type: "normal",
          })),
        ];

        if (this.noData === 1) {
          this.actions?.forEach((action) => {
            this.rowData.push({
              type: "action",
              value: (value) => action.handle(value),
              url: `exam/${this.data["a"]}/exam-top`,
              examId: this.data["a"],
              title: "詳細",
            });
          });
        }

        if (this.header) {
          this.rowData = this.data.map((item) => ({ value: item }));
          for (let i = 0; i < this.actionsSize; ++i) this.rowData.push("");
        }
      },
      deep: true,
    }
  },
};
</script>

<style lang="scss">
.t-row {
  width: 100%;
}

.header {
  font-weight: bold;
  color: #4f5b79;
}

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

.active {
  cursor: pointer;
}
</style>
