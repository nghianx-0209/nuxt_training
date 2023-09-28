<template>
  <div class="table-wrapper">
    <table class="t-table">
      <thead>
        <TRow
          :hidden="hidden"
          :data="selectAll ? [' ', ...data.header] : data.header"
          :cellWidth="cellWidth"
          :header="true"
          :actionsSize="actions.length"
        />
      </thead>
      <tbody>
        <TRow
          v-for="(row, index) in data.body"
          v-bind:key="index"
          :data="row"
          :cellWidth="cellWidth"
          :actions="actions"
          :active="activeRow"
          :selectAll="selectAll"
          :selectToggle="(data) => selectToggle(data)"
          :defaultSelect="selectAllStatus"
          :hidden="hidden"
        />
        <TRow
          v-if="data.body.length === 0"
          :data="{ text: noDataText }"
          :cellWidth="[100]"
          :actions="actions"
          :noData="data.header.length + actions.length"
          :hidden="hidden"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
  cellWidth: Array,
  actions: Array,
  activeRow: {
    type: Boolean,
    default: false,
  },
  noDataText: String,
  selectAll: {
    type: Boolean,
    default: false,
  },
  selectAllStatus: {
    type: Boolean,
    default: false,
  },
  hidden: {
    type: Array,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: [],
  },
});
</script>

<script>
export default {
  data() {
    return {
      selectData: [],
    };
  },
  methods: {
    selectToggle(item) {
      if (item.checked) this.selectData.push(item.data);
      else
        this.selectData = this.selectData.filter(
          (data) => data.id !== item.data.id
        );
    },
  },
  computed: {
    selectAllToggle() {
      this.selectData = this.selectAllToggle ? this.data.body : [];
      return this.selectAllToggle ? this.data.body : [];
    },
  },
  watch: {
    selectData() {
      console.log(this.selectData);
    },
    selectAllStatus() {
      this.selectAllToggle;
    },
  },
};
</script>

<style lang="scss">
.table-wrapper {
  border-radius: 16px;
  border: 1px solid $neutral-color-300;
  width: 100%;
  overflow: hidden;
}
.t-table {
  width: 100%;
  box-sizing: border-box;
  border-collapse: collapse;
  border-radius: 16px;

  tbody {
    tr {
      &:nth-child(2n) {
        background-color: #f0f1f5;
      }

      td {
        padding: 16px;
        color: #4f5b79;
      }
    }
  }

  thead {
    height: 40px;
    text-align: start !important;
    color: #4f5b79;
    font-weight: 400;
    background-color: #dae0ee;

    tr {
      td {
        padding: 12px 16px;

        &:first-child {
          border-radius: 16px 0 0;
        }
      }
    }

    td:first-child {
      border-radius: 16px 0 0;
    }

    th {
      padding: 12px 16px;
    }
  }

  tr {
    height: 68px;

    &:last-child {
      td {
        &:last-child {
          border-radius: 0px 0px 16px 0px;
        }
      }
    }
  }
}

// .t-table > tbody > tr:nth-child(2n) {
//   background-color: #f0f1f5;
// }

// .t-table > thead {
//   height: 40px;
//   text-align: start !important;
//   color: #4f5b79;
//   font-weight: 400;
// }

// .t-table > tr {
//   height: 68px;
// }

// .t-table > thead > tr > td {
//   padding: 12px 16px;
// }

// .t-table > tbody > tr > td {
//   padding: 16px;
//   color: #4f5b79;
// }

// .t-table > thead > td:first-child {
//   border-radius: 16px 0 0;
// }

// .t-table > tr > td:last-child {
//   border-radius: 0px 0px 0px 16px;
// }

// .t-table > thead {
//   background-color: #dae0ee;
// }

// .t-table thead th {
//   padding: 12px 16px;
// }
</style>
