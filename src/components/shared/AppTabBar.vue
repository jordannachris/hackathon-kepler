<template>
  <div class="app-tab-bar">
    <v-bottom-navigation v-model="value">
      <v-btn value="home" color="transparent">
        <span>Início</span>

        <v-icon color="#989899">mdi-home</v-icon>
      </v-btn>

      <v-btn value="sobre" color="transparent">
        <span>Sobre</span>

        <v-icon color="#989899">mdi-information</v-icon>
      </v-btn>

      <v-btn value="onde-encontrar" color="transparent">
        <span>Nearby</span>

        <v-icon color="#989899">mdi-cart</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
  


<script>
export default {
  name: "AppTabBar",
  data: () => ({ value: "recent" }),
};
</script>


<style scoped>
.app-tap-bar {
  text-decoration: none;
}

</style>