<script lang="ts">
import IconHtml from './icons/IconHtml.vue';
import Participante from './Participante.vue';
import IconSass from './icons/IconSass.vue';

import IconVue from './icons/IconVue.vue';

import IconTypeScript from './icons/IconTypeScript.vue';

export default {
    components: { IconHtml, IconSass, IconVue, Participante, IconTypeScript }
}
</script>

<template>
<footer>
    <div class="topo">
        <img src="/Fieb.png" alt="" />
        <h2 class="titulo">inf2bm</h2>
    </div>
    <div class="participantes">
        <Participante :informacoes="[
        {
            chave: 'Numero de chamada',
            valor: '20'
        },
        {
            chave: 'RM',
            valor: '86287'
        },
        {
            chave: 'Responsabilidades',
            valor: 'programação, estrutura e estilização'
        },
        ]" nome="João Lucas Silva Lopes" />
        <participante :informacoes="[
        {
            chave: 'Numero de chamada',
            valor: '19'
        },
        {
            chave: 'RM',
            valor: '86287'
        },
        {
            chave: 'Responsabilidades',
            valor: 'estilização'
        },
        ]" nome="Jhordan Samuel Jesus dos Santos" />
        <participante :informacoes="[
        {
            chave: 'Numero de chamada',
            valor: '05'
        },
        {
            chave: 'RM',
            valor: '86287'
        },
        {
            chave: 'Responsabilidades',
            valor: 'pesquisa'
        },
        ]" nome="Danilo Medeiros de Oliveira" />
    </div>
    <h2 class="titulo ">tecnologias utilizadas no projeto</h2>
    <div class="tecnologias">
        <div class="tecnologia">
        <IconVue />
        <h3>Vue.js</h3>
        </div>
        <div class="tecnologia">
        <IconSass />
        <h3>SASS</h3>
        </div>
        <div class="tecnologia">
            <IconHtml />
            <h3>HTML</h3>
        </div>
        <div class="tecnologia">
            <IconTypeScript />
            <h3>TypeScript</h3>
        </div>
    </div>
</footer>
</template>

<style lang="scss">
.tecnologia{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}



.tecnologias {
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 50px;
  svg {
  
    width: 10vw;
    height: 10vw;
  } 
}

.topo {
    display: flex;
    
    justify-content: center;
    align-items: center;
    gap: 5%;

    h2 {
        font-size: 4rem;
    }
}

footer{
  background-color: $bg-cor2;
  border-top: solid 5px $cor-destaque;
  padding-block: 3%;
  >img{
    width: 50%;
    height: 300px;
  }
}

.participantes{
    padding-left: 10%;
  }
  
</style>