<template>
  <v-container>
    <div class="text-center rio-branco">
      <v-col cols="6">
        <v-card>
          <v-img :src="dadosAPI[4].imagem" class="grey darken-4"></v-img>
          <v-card-title class="title">
            <span>Nome: {{ dadosAPI[4].nome }}</span>
            <span>Valor: {{ dadosAPI[4].preco }}</span>
            <span>Valor: {{ dadosAPI[4].preco }}</span>
          </v-card-title>

          <v-btn>Comprar</v-btn>
        </v-card>

        <v-card>
          <v-img :src="dadosAPI[5].imagem" class="grey darken-4"></v-img>
          <v-card-title class="title">
            <span>Nome: {{ dadosAPI[5].nome }}</span>
            <span>Valor: {{ dadosAPI[5].preco }}</span>
            <span>Valor: {{ dadosAPI[5].preco }}</span>
          </v-card-title>

          <v-btn>Comprar</v-btn>
        </v-card>

        <v-card>
          <v-img :src="dadosAPI[6].imagem" class="grey darken-4"></v-img>
          <v-card-title class="title">
            <span>Nome: {{ dadosAPI[6].nome }}</span>
            <span>Valor: {{ dadosAPI[6].preco }}</span>s
            <span>Valor: {{ dadosAPI[6].preco }}</span>
          </v-card-title>

          <v-btn>Comprar</v-btn>
        </v-card>
      </v-col>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "RioBranco",
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
