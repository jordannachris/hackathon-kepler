<template>
  <div class="app-tab-bar">
    <v-bottom-navigation v-model="value">
      <v-btn value="recent">
        <span>Início</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Sobre</span>

        <v-icon>mdi-information</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Nearby</span>

        <v-icon>mdi-rabbit</v-icon>
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
</style>