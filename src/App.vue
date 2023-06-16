<template>
  <main>
    <app-header />
    <main class="content">
      <router-view />
    </main>
  </main>
</template>

<script>
import AppHeader from "./components/Header.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style lang="sass">
@import './styles/default.sass'

.content
  position: absolute
  margin-top: 3rem
</style>
