<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login-screen">
    <LoginPanel
      :loginHandle="
        (value) => {
          const result = loginHandle(value);
          if (result.status) {
            client = { ...value, ...client };
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
definePageMeta({
  layout: "login",
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
          value.userId === "nguyen.xuan.nghia@sun-asterisk.com" &&
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
