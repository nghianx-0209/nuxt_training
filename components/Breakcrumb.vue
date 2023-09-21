<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex">
    <!-- {{ data }} -->
    <ul class="breakcrumb-holder flex">
      <li
        v-for="(item, index) in breakcrumb"
        v-bind:key="index"
        class="breakcrumb-item flex item-center"
        :class="{
          active: (index === 0 || index === 1) && breakcrumb.length > 2,
          'breakcrumb-wraper': data.length == 1 && index == 0,
          normal: index > 1,
        }"
        @click="
          () => {
            if (item.url) {
              breakcrumb = breakcrumb.slice(0, index + 1);
              if (index == 0) exam = undefined;
              console.log(breakcrumb);
              navigateTo(item.url);
            }
          }
        "
      >
        <img v-if="index != 0 && data.length > 1" src="/img/right_arrow.png" />
        <!-- <img v-if="index == 0 && data.length > 1" src="/img/home.svg" /> -->
        <HomeSVG v-if="index == 0 && data.length > 1" />
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const breakcrumb = useBreakcrumb();
const exam = useExam();
defineProps({
  data: Array,
});
</script>

<script>
import HomeSVG from "@/assets/icons/home.svg";
export default {
  data() {
    return {
      active: true,
    };
  },
};
</script>

<style lang="scss">
.breakcrumb-holder {
  list-style-type: none;

  li {
    color: $main-green-500;

    img {
      width: 15px;
      margin: 0px 7px;
    }
  }

  li:nth-child(1) {
    fill: $main-green-500;
  }

  .breakcrumb-item {
    cursor: default;
  }

  .normal {
    color: $neutral-color-500;
  }
}

// .breakcrumb-holder > li {
//   color: $main-green-500;
// }

// .breakcrumb-holder > li:nth-child(1) {
//   fill: $main-green-500;
// }

.active {
  cursor: pointer !important;
}

.breakcrumb-arrow {
  width: 24px;
  display: inline-block;
  text-align: center;
}

// .breakcrumb-holder > li > img {
//   width: 15px;
//   margin: 0px 7px;
// }

.breakcrumb-wraper {
  // border: 1px solid $neutral-color-200;
  background-color: #e6e9ef;
  border-radius: 8px;
  padding: 4px;
  color: $secondary-400 !important;
  font-weight: 800;
  font-size: 14px;
}
</style>
