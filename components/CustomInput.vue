<template>
  <div
    class="custom-input flex item-center"
    :class="{ 'has-icon': !!$slots.header_icon, error: errorValid }"
  >
    <div class="custom-input__icon">
      <slot name="header_icon" class="header_icon" />
    </div>
    <input
      :type="password && !showPassword ? 'password' : 'text'"
      :placeholder="placeholder"
      :value="inputData"
      @input="
        (event) => {
          passEvent(event.target.value);
          inputData = event.target.value;
        }
      "
      class="custom_input__input-field"
    />
    <EyeIcon
      v-on:click="showPassword = !showPassword"
      v-if="password && showPassword"
    />
    <EyeOffIcon
      v-on:click="showPassword = !showPassword"
      v-if="password && !showPassword"
    />
  </div>
  <span v-if="errorValid" class="validation-text">{{ validationText }}</span>
</template>

<script setup>
import EyeIcon from "@/assets/icons/eye.svg";
import EyeOffIcon from "@/assets/icons/eye-off.svg";

defineProps({
  password: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  validationText: {
    type: String,
    default: "",
  },
  validationFunction: {
    type: Function,
    default: () => false,
  },
});
</script>

<script>
export default {
  data() {
    return {
      showPassword: false,
      inputData: this.value,
      errorValid: false,
    };
  },
  methods: {
    passEvent(value) {
      this.$emit("inputValue", value);
    },
  },
  watch: {
    inputData() {
      this.errorValid = !this.validationFunction(this.inputData);
    },
  },
};
</script>

<style lang="scss">
.custom-input {
  background-color: #f9fafb;
  padding: 4px 16px;
  border-radius: 8px;
  height: 36px;
  border: 1px solid #939db6;
  box-sizing: border-box;
  color: #2e3853;
  position: relative;

  .custom_input__input-field {
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    color: #2e3853;
    font-size: 14px;
  }

  .custom-input__icon {
    position: absolute;
    left: 16px;
  }

  svg {
    cursor: pointer;
  }
}

.has-icon {
  padding-left: 42px;
}

.validation-text {
  color: $sub-300;
}

.error {
  background-color: #fdf2f2;
  border: 1px solid #e53e3e !important;
  color: #c53030;
}
</style>
