<template>
  <tr class="t-row" :class="{'active': active}" >
    <TCell
      v-for="(cell, index) in r_data"
      :data="cell"
      :cell_w="cell_w[index]"
      :header="header"
    />
  </tr>
</template>

<script setup>
defineProps({
  data: Object | Array,
  cell_w: Array,
  header: {
    type: Boolean,
    default: false,
  },
  actions: Array,
  actions_size: Number,
  active: {
    type: Boolean,
    default: false
  }
});
</script>

<script>
export default {
  data() {
    return {
      r_data: [],
      test: 1,
    };
  },
  mounted() {
    if (!this.header) {
      this.r_data = Object.values(this.data).map((item) => ({
        value: item,
        type: "normal",
      }));
      this.actions.forEach((action) => {
        this.r_data.push({
          type: "action",
          value: (value) => action(value),
        });
      });
    } else {
      this.r_data = this.data.map((item) => ({ value: item }));
      for (let i = 0; i < this.actions_size; ++i) this.r_data.push("");
    }
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
  width: 100% !important;
  text-align: end;
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
