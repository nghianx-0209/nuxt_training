<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header-container fixed flex">
    <div class="flex item-center">
      <img src="/img/logo.png" v-on:click="navigateTo('/client/login')" />
      <div class="breakcrumb">
        <!-- {{ breakcrumb }} -->
        <Breakcrumb :data="breakcrumb" />
      </div>
    </div>
    <div class="flex item-center header-right-column">
      <div class="active">FAQ</div>
      <div class="seperate-line-v" />
      <div class="active">新着情報</div>
      <div class="seperate-line-v" v-if="!!client" />
      <div
      v-if="!!client"
        class="active flex item-center"
        @click="showDropdown = !showDropdown"
      >
        {{ client?.info.userId }}
        <img v-if="!!client" class="dropdown-btn" src="/img/down_arrow.png" />
      </div>
      <div
        v-if="showDropdown"
        class="dropdown-menu"
        ref="collabsibles"
        v-on:focusout="seeChange"
      >
        <div class="dropdown-item active">パスワード変更</div>
        <div class="dropdown-item active" @click="() => {
          client = undefined;
          breakcrumb = [];
          showDropdown = false;
          navigateTo('/');
        }">ログアウト</div>
      </div>
    </div>
  </header>
</template>

<script setup>
const breakcrumb = useBreakcrumb();
const client = useClient();
</script>

<script>
export default {
  data() {
    return {
      userId: "Sun Asterisk - ASP 1 QA - ASP1様",
      showDropdown: false,
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
    },
  }
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
  background-color: #fff;
  z-index: 50;
  top: 0;
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

  .dropdown-item {
    padding: 8px 16px;

    &:hover {
      background-color: #f3f4f6;
      color: $main-green-500;
    }
  }
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
