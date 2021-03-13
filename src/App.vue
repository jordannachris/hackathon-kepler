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
  name: 'Home',
  components: { Home },

  data: () => ({
    //
  }),
};
</script>

<style scoped>

</style>
