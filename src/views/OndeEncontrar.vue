<template>
    <v-container>
        <div class="onde-encontrar">
            h2
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
