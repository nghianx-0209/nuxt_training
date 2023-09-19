<template>
    <Header />
    <div class="page-content flex">
      <SideBar />
      <slot />
    </div>
</template>

<script>
import HomeSVG from '@/assets/icons/home.svg';
export default {
  components: {
    HomeSVG
  }
}
</script>

<style lang="scss">
    .page-content {
        width: 100%;
        height: 100vh;
    }
</style>