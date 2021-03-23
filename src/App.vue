<template>
  <div id="app">
    <app-navBar />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style lang="scss">
html,
body {
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
  }
}
#app {
  #nav {
    width: 100%;
    height: 100vh;
  }
}
</style>
