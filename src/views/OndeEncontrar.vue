<template>
  <v-container>
    <div class="text-center ondeencontrar--botaocidades">
      <!-- <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Selecione a cidade &#9660;
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item of itens" :key="item.id">
            <v-list-item-title @click="getCidade">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list> -->
      <!-- <v-list>
          <v-list-item v-for="dado of dadosAPI" :key="dado.id">
            <v-list-item-title>{{ dado.local.endereco }}</v-list-item-title>
          </v-list-item>
        </v-list> -->
      <!-- </v-menu> -->

      <!-- <tr v-for="dado of dadosAPI" :key="dado.id">
        <td>
          <v-avatar>
            <img :src="dado.imagem" alt="Ovo" />
          </v-avatar>
          <span>{{ dado.nome }}</span>
          <span>{{ dado.preco }}</span>
        </td>
      </tr> -->

      <!-- <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Imagem
              </th>
              <th class="text-left">
                Informações
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="img-ovo"><img :src="dado[].imagem" /></td>
              <td>{{ dado.nome }}</td>

              <td class="img-ovo"><img :src="dado.imagem" /></td>
              <td>{{ dado.nome }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table> -->

      <v-col cols="6">
        <v-card>
          <v-img :src="dadosAPI[0].imagem" class="grey darken-4"></v-img>
          <v-card-title class="title">
            <span>Nome: {{ dadosAPI[0].nome }}</span>
            <span>Valor: {{ dadosAPI[0].preco }}</span>
            <span>Valor: {{ dadosAPI[0].preco }}</span>
          </v-card-title>

          <v-btn>Comprar</v-btn>
        </v-card>

        <v-card>
          <v-img :src="dadosAPI[1].imagem" class="grey darken-4"></v-img>
          <v-card-title class="title">
            <span>Nome: {{ dadosAPI[1].nome }}</span>
            <span>Valor: {{ dadosAPI[1].preco }}</span>
            <span>Valor: {{ dadosAPI[1].preco }}</span>
          </v-card-title>

          <v-btn>Comprar</v-btn>
        </v-card>

        <v-card>
          <v-img :src="dadosAPI[2].imagem" class="grey darken-4"></v-img>
          <v-card-title class="title">
            <span>Nome: {{ dadosAPI[2].nome }}</span>
            <span>Valor: {{ dadosAPI[2].preco }}</span>s
            <span>Valor: {{ dadosAPI[2].preco }}</span>
          </v-card-title>

          <v-btn>Comprar</v-btn>
        </v-card>
      </v-col>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "OndeEncontrar",
  data() {
    return {
      dadosAPI: [],
      // variavel:
      itens: [
        { title: "Manaus" },
        { title: "Rio Branco" },
        { title: "Macapá" },
      ],
    };
  },
  //   computed: {
  //       endereco() {
  //           const possui = this.dadosAPI[0].local.endereco[1];
  //           console.log(possui);
  //       }
  //   },
  created() {
    fetch("https://it3kjy-default-rtdb.firebaseio.com/ovosPascoa.json")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.dadosAPI = json;
        // console.log(this.dadosAPI);
      });
  },
  //   methods: {
  //     getCidade() {
  //         this.cidade = item.title;
  //         console.log(this.cidade);
  //     },
  //   },
};
</script>

<style scoped>
.img-ovo {
}
</style>
