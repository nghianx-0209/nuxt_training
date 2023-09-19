<template>
  <div class="table-wrapper">
    <table class="t-table">
      <thead>
        <TRow
          :data="data.header"
          :cell_w="cell_w"
          :header="true"
          :actions_size="actions.length"
        />
      </thead>
      <tbody>
        <TRow
          v-for="(row, index) in data.body"
          v-bind:key="index"
          :data="row"
          :cell_w="cell_w"
          :actions="actions"
          :active="activeRow"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
  cell_w: Array,
  actions: Array,
  activeRow: {
    type: Boolean,
    default: false,
  },
});
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
