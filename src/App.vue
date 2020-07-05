<template>
  <div id="app">
    <app-nav/>
    <router-view></router-view>
    <app-footer/>
  </div>
</template>

<script>
    import appFooter from "./components/footer";
    import appNav from "./components/nav";
    export default {
      components: {
        appFooter,
        appNav
      }
    }

</script>
