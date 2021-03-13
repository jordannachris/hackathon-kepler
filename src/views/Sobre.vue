<template>
    <v-container>
        <div class="mx-10 sobre--caixa">
            <h2 class="display-1">Sobre</h2>
            <p class="mt-4 text-justify">Durante a pandemia da Covid-19 varias familias tiveram que diversificar na hora de compor e recuperar a renda se adaptando ao 'novo normal'.</p>
            <p class="text-justify">Pensando nisso, nós do { nome.app }, decidimos possibilitar a todos que querem adocicar a vida nesse período tão difícil. </p>
        </div>

        <v-img class="mx-10"
            src="../assets/feliz-pascoa.png"
        ></v-img>
    </v-container>
</template>

<script>
export default {
    name: 'Sobre',
}
</script>

<style scoped>
    .sobre--caixa {
        padding-top: 100px;
    }

</style>