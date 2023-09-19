<template>
  <button
    :class="{ primary: primary, secondary: secondary, warning: warning }"
    v-on:click="clickHandle"
  >
    <slot />{{ title }}
  </button>
</template>

<script setup>
const props = defineProps({
  title: String,
  primary: Boolean,
  secondary: Boolean,
  warning: Boolean,
  actions: Function,
});
</script>

<script>
export default {
  methods: {
    clickHandle() {
      this.actions();
    },
  },
};
</script>

<style lang="scss">
button {
  color: #fff;
  height: 36px;
  padding: 8px 12px;
  border-radius: 12px;
  margin-right: 16px;
  transition: background-color 0.25s ease;
  min-width: 90px;

  svg {
    margin-right: 4px;
    font-size: large;
  }

  &:nth-child(2) {
    width: 140px;
  }
}

// button:nth-child(2) {
//   width: 140px;
// }

// button > svg {
//   margin-right: 4px;
//   font-size: large;
// }

.primary {
  background-color: $main-green-500;

  &:hover {
    background-color: #36898d;
  }
}

// .primary:hover {
//   background-color: #36898d;
// }

.secondary {
  background-color: $secondary-400;

  &:hover {
    background-color: #4f5b79;
  }
}

// .secondary:hover {
//   background-color: #4f5b79;
// }

.warning {
  background-color: $sub-600;

  &:hover {
    background-color: $sub-700;
  }
}

// .warning:hover {
//   background-color: $sub-700;
// }
</style>
