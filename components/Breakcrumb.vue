<template>
  <div class="flex">
    <ul class="breakcrumb-holder flex">
      <li
        v-for="(item, index) in data"
        class="breakcrumb-item flex item-center"
        :class="{ 'active': index != data.length - 1 }"
      >
        <img v-if="index != 0" src="/img/right_arrow.png" />
        <img v-if="index == 0" src="/img/home.svg" />
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  data: String,
});

</script>

<script>

export default {
  data() {
    return {
      active: true,
    };
  }
};
</script>

<style lang="scss">
.breakcrumb-holder {
  list-style-type: none;
}

.breakcrumb-holder > li {
  color: $main-green-500;
}

.breakcrumb-holder > li:nth-child(1) {
    fill: $main-green-500;
}

.active {
  cursor: pointer;
}

.breakcrumb-arrow {
  width: 24px;
  display: inline-block;
  text-align: center;
}

.breakcrumb-holder > li > img {
  width: 15px;
  margin: 0px 7px;
}
</style>
