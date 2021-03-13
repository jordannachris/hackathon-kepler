<template>
  <v-container>
    <div class="text-center macapa">
      <v-col cols="6">
        <v-card>
          <v-img :src="dadosAPI[7].imagem" class="grey darken-4"></v-img>
          <v-card-title class="title">
            <span>Nome: {{ dadosAPI[7].nome }}</span>
            <span>Valor: {{ dadosAPI[7].preco }}</span>
            <span>Valor: {{ dadosAPI[7].preco }}</span>
          </v-card-title>

          <v-btn>Comprar</v-btn>
        </v-card>

        <v-card>
          <v-img :src="dadosAPI[8].imagem" class="grey darken-4"></v-img>
          <v-card-title class="title">
            <span>Nome: {{ dadosAPI[8].nome }}</span>
            <span>Valor: {{ dadosAPI[8].preco }}</span>
            <span>Valor: {{ dadosAPI[8].preco }}</span>
          </v-card-title>

          <v-btn>Comprar</v-btn>
        </v-card>

        <v-card>
          <v-img :src="dadosAPI[9].imagem" class="grey darken-4"></v-img>
          <v-card-title class="title">
            <span>Nome: {{ dadosAPI[9].nome }}</span>
            <span>Valor: {{ dadosAPI[9].preco }}</span>s
            <span>Valor: {{ dadosAPI[9].preco }}</span>
          </v-card-title>

          <v-btn>Comprar</v-btn>
        </v-card>
      </v-col>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Macapa",
  data() {
    return {
      dadosAPI: [],
    };
  },
  created() {
    fetch("https://it3kjy-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.dadosAPI = json;
        // console.log(this.dadosAPI);
      });
  },
};
</script>

<style scoped>
</style>
