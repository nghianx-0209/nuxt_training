<template>
    <Header />
    <div class="page-content flex">
      <SideBar />
      <slot />
    </div>
</template>

<style lang="scss">
    .page-content {
        width: 100%;
        height: 100vh;
    }
</style>