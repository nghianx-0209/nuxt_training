<template>
  <div class="header-container fixed flex">
    <div class="flex item-center">
      <img src="/img/logo.png" />
      <div class="breakcrumb">
        <Breakcrumb :data="breakcrumb" />
      </div>
    </div>
    <div class="flex item-center header-right-column">
      <div class="seperate-line-v" />
      <div class="active">FAQ</div>
      <div class="seperate-line-v" />
      <div class="active">新着情報</div>
      <div class="seperate-line-v" />
      <div class="active flex item-center" @click="show_dropdown = !show_dropdown">
        {{ userId }}
        <img class="dropdown-btn" src="/img/down_arrow.png" />
      </div>
      <div v-if="show_dropdown" class="dropdown-menu" ref="collabsibles" v-on:focusout="seeChange">
        <div class="dropdown-item active">パスワード変更</div>
        <div class="dropdown-item active">ログアウト</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const breakcrumb = useBreakcrumb(route.path.split("/").slice(1));
</script>

<script>
export default {
  data() {
    return {
      userId: "Sun Asterisk",
      show_dropdown: false,
    };
  },
  method: {
    onClickOutside(event) {
      console.log(event);
      const { collabsibles } = this.$refs;
      if (collabsibles == event.target) return;
      console.log("out");
    },
    seeChange(event) {
        console.log(event);
    }
  },
  mounted() {
    document.addEventListener("click", this.onClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.onClickOutside);
  },
};
</script>

<style lang="scss">
.header-container {
  width: 100%;
  height: 72px;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: $logo-main;
  padding: 8px 24px 8px 24px;
  box-sizing: border-box;
  justify-content: space-between;
}

.header-right-column {
  position: relative;
  color: $neutral-color-500 !important;
}

.dropdown-menu {
  position: absolute;
  right: 0;
  border-radius: 6px;
  box-shadow: 1px 2px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #eff1f6;
  min-width: max-content;
  padding: 4px 0px;
  top: 3rem;
  background: #fff;
}

.dropdown-item {
  padding: 8px 16px;
}

.dropdown-item:hover {
  background-color: #f3f4f6;
  color: $main-green-500;
}

.header-right-column:nth-child(even) {
  color: $main-green-500;
}

.seperate-line-v {
  height: 52px;
  width: 2px;
  background-color: $neutral-color-200;
  margin: 0px 23px;
}

.dropdown-btn {
  margin: 0px 10px;
}
</style>
