<template>
    <v-container>
            <div class="text-center ondeencontrar--botaocidades">
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        >
                        Selecione a cidade &#9660;
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                        >
                        <v-list-item-title>{{ item.local[1] }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
    </v-container>
</template>

<script>
export default {
    name: 'OndeEncontrar',
    data() {
        return{
            dadosAPI: [],
        }
    },
    created() {
        fetch("https://it3kjy-default-rtdb.firebaseio.com/ovosPascoa.json")
            .then((resposta) => resposta.json())
            .then((json) => {
                this.dadosAPI = json;
                console.log(this.dadosAPI);
            });
    },
}
</script>

<style scoped>

</style>
