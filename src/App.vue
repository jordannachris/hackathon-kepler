<template>
  <v-app>
    <Home/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home'

export default {
  components: { Home },
  name: 'App',
  name: 'Home',

  data: () => ({
    //
  }),
};
</script>

<style scoped>

</style>
