<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login-screen">
    <LoginPanel
      :loginHandle="
        (value) => {
          const result = loginHandle(value);
          if (result.status) {
            client = { ...result };
            breakcrumb[0] = {
              title: client.info.userId,
              url: undefined
            };
            navigateTo(`/client/${result.info.clientId}/top`);
          } else {
            console.log('shiet');
          }
        }
      "
    />
  </div>
</template>

<script setup>
const client = useClient();
const breakcrumb = useBreakcrumb();
definePageMeta({
  layout: "login",
  middleware: ["auth"]
});
</script>

<script>
export default {
  data() {
    return {
      loginInfo: undefined,
    };
  },
  methods: {
    loginHandle(value) {
      return {
        info: {...value, clientId: "000023"},
        status:
          value.userId === "nghia.com" &&
          value.password === "mjwFOG68",
      };
    },
  },
};
</script>

<style lang="scss">
.login-screen {
  width: 100%;
  padding-top: 136px;
}
</style>
