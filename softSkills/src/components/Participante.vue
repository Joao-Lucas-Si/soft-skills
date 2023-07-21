<template>


<div class="participante">
    <div>
        <Details-Summary :titulo="nome">
            <dl>
                <div v-for="informacao in informacoes" class="informacao">
                    <dt>{{informacao.chave}}</dt>
                    <dd>{{ informacao.valor }}</dd>
                </div>
            </dl>
        </Details-Summary> 
       
    </div>
</div>
</template>

<script lang="ts">
import DetailsSummary from './DetailsSummary.vue';
interface informacaoInterface {
    chave: string,
    valor: string
}
export default {
    props: {
        nome: {
            type:String,
            required: true  
        },
        informacoes: Object as () => informacaoInterface[]
    },
    components: { DetailsSummary }
}
</script>

<style lang="scss" scoped>

.informacao{
    display:flex;
    gap:10px;
}


dt::after{
    content: ":";
    color: $cor-destaque;
}
</style>