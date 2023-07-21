<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconHome from './components/icons/IconHome.vue'
import IconInteligenciaEmocional from './components/icons/IconInteligenciaEmocional.vue'
import IconSoftSkills from './components/icons/IconSoftSkills.vue'
import IconLogo from './components/icons/IconLogo.vue'
import IconVue from './components/icons/IconVue.vue'
import IconSass from './components/icons/IconSass.vue'
import IconNest from './components/icons/IconNest.vue'
import IconHtml from './components/icons/IconHtml.vue'


import Participante from './components/Participante.vue'
import InputNome from './components/InputNome.vue'

import InputEmail from './components/InputEmail.vue'
import MainMenu from './components/MainMenu.vue'

import InputRadios from './components/InputRadios.vue'

import TextArea from './components/TextArea.vue'

import Formulario from './components/Formulario.vue'

import Rodape from './components/Rodape.vue'
export default {
  components: { IconHome, IconSoftSkills, IconInteligenciaEmocional, IconLogo, IconVue, IconSass, InputNome, IconNest, IconHtml, Participante, InputEmail, MainMenu, InputRadios, TextArea, Formulario, Rodape },
  data() {
    return {
      progresso: '0%',
      nomeValor: "",
      nomeErro: "",
      emailValor: "",
      emailErro: "",
      assuntoValor: "",
      assuntoErro: "",
      telefoneValor: "",
      telefoneErro: "",
      mensagemTextarea: "",
      mensagemErro: ""
    }
  },
  
}
</script>

<template>
  <div class="base">
    <main-menu />
    <div>
      <div id="topo"></div>
      <RouterView />

      <Formulario/>

      <Rodape/>
      
    </div>
  </div>
</template>

<style scoped lang="scss">
.base {
  display: flex;
  min-height: 100vh;

  > div {
    max-width: calc(100% - 5vw);
    min-width: calc(100% - 10vw);
    width: 100%;
  }
}


</style>