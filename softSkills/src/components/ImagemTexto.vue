<template>
<article :class="(reverso) ? 'reverso': ''">
        <h2 v-if="nivel == 2" class="titulo">{{ titulo }}</h2>
        <h3 v-else-if="nivel == 3" class="titulo">{{ titulo }}</h3>
        <div class="conteudo">
            <div class="textos">
                <p v-for="texto in textos">{{ texto }}</p>
            </div>
            <div class="imagem">
                <span></span>
                <img :src="imagem" alt="">
            </div>
            
        </div>
</article>
</template>
<script lang="ts">
export default {
    props: {
        titulo: String,
        textoOriginal: String,
        imagem: String,
        nivel: {
            type: Number,
            default: 2
        },
        reverso:  {
            type: Boolean,
            default: false
        }
    },
    computed: {
        textos() {
            return this.textoOriginal?.split("/n")
        }
    }
}
</script>

<style lang="scss" scoped>

.conteudo {
    margin-block: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: 5%;
    gap: 4%;

    .textos {
        padding: 0;
        width: 60%;
    }

    .imagem {
        width: 40%;
    }
}



.imagem {
    
    position: relative;
    span  {
        position: absolute;
        left: 0%;
        width: 30%;
        height: 100%;
        background: linear-gradient(90deg, var(--color-background), transparent) ;
    }
}

.reverso {
    .conteudo {
        flex-direction: row-reverse;
    }

    span {
        left: 100%;
        transform: translateX(-100%);
        background: linear-gradient(270deg, var(--color-background), transparent) ;
    }
}

img {
    width: 100%;
    height: 100%;
}
</style>