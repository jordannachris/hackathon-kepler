<template>
  <v-app>  
    <v-main>
      <router-view></router-view>
    </v-main>
    <AppTabBar/>
  </v-app>
</template>

<script>
import AppTabBar from './components/shared/AppTabBar'

export default {

  name: 'App',

  components: {
    AppTabBar
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
</style>