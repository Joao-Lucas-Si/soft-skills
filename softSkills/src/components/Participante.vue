<template>
<div class="integrante">
    <h3>{{ nome }}</h3>
    <div>
        <h3>informações</h3>
        <dl>
            <div v-for="informacao in informacoes" class="informacao">
                <dt>{{informacao.chave}}</dt>
                <dd>{{ informacao.valor }}</dd>
            </div>
        </dl>
    </div>
</div>
</template>

<script lang="ts">
interface informacaoInterface {
    chave: string,
    valor: string
}
export default {
    props: {
        nome: String,
        informacoes: Object as () => informacaoInterface[]
    }
}
</script>

<style lang="scss" scoped>

</style>