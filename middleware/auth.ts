export default defineNuxtRouteMiddleware((to, from) => {
  const client = useClient();

  if (!client.value) {
    if (from.fullPath !== "/client/login" && to.fullPath !== "/client/login") {
      return navigateTo("/client/login");
    }
  } else {
    if (to.fullPath === "/client/login") {
      return navigateTo(`/client/${client.value.info.clientId}/top`);
    }
  }
});
