<script lang="ts">
interface obra {
    imagem: string,
    descricao: string,
    titulo: string
} 
export default {
    props: {
        obras:  {
            type:Object as ()=> obra[],
            required: true 
        }
    }
}
</script>
<template>
<div class="obras">
    <div v-for="obra in obras">
        <img :src="obra.imagem"  :alt="obra.descricao">
        <h4 class="titulo">{{ obra.titulo }}</h4>
    </div>
</div>
</template>
<style lang="scss">
.obras {
    display: grid;
    grid-template-columns: repeat(5, 15%);
    font-size: .8rem;
    justify-content: center;
    gap: 20px;

    div {
        display: flex;
        flex-direction: column;
        
    }

    img {
        height: 100%;
        width: 100%;
        
    }
}
</style>