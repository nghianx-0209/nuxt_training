<template>
  <!-- {{ header }} -->
  <th v-if="header" class="t-cell" :style="cssProps" :class="{'action': data.type == 'action'}">
    {{ data.value }}
  </th>
  <td v-else class="t-cell" :style="cssProps" :class="{'action': data.type == 'action'}" :colspan="noData" >
    <span v-if="data.type == 'normal'">{{ data.value || '-' }}</span>
    <input v-if="data.type == 'checkbox'" type="checkbox" :checked="defaultSelect" v-on:change="event => selectToggle(event.target.checked)" />
    <TButton
      v-if="data.type == 'action'"
      :actions="() => data.value()"
      :title="data.title"
      secondary
    />
  </td>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    default: undefined,
  },
  cellWidth: {
    type: [String, Number],
    required: true,
  },
  header: {
    type: Boolean,
    default: false,
  },
  noData: {
    type: Number,
    default: 1
  },
  selectToggle: {
    type: Function,
    default: () => {}
  },
  defaultSelect: {
    type: Boolean,
    default: false
  }
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
        "--width": `${this.cellWidth}%`,
      };
    },
  }
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
