<template>
  <div class="fixed footer">
    <div class="flex item-center flex-start">
      <TButton :title="buttonTitle1" primary>
        <HomeSVG />
      </TButton>
      <TButton :title="buttonTitle2" secondary>
        <UserSVG />
      </TButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeSVG from "~/assets/icons/plus.svg";
import UserSVG from "~/assets/icons/users.svg";
</script>

<script lang="ts">
export default {
  data() {
    return {
      buttonTitle1: "新しい検査を登録する",
      buttonTitle2: "ユーザ設定",
    };
  },
};
</script>

<style lang="scss">
.footer {
  width: 100%;
  bottom: 0;
  padding: 8px 48px;
  height: 52px;
  border-top: 1px solid $neutral-color-200;
  box-sizing: border-box;
  justify-content: space-between;
  background-color: #FFF;
}
</style>
