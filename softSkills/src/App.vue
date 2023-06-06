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

export default {
  components: { IconHome, IconSoftSkills, IconInteligenciaEmocional, IconLogo, IconVue, IconSass, IconNest, IconHtml },
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
  methods: {
    pegarProgresso() {
      let porcento =
        (document.documentElement.scrollTop /
          (document.documentElement.scrollHeight - document.documentElement.clientHeight)) *
        100
      this.progresso = porcento + '%'
    }, 
    validarNome(): boolean {
      const inicio = `senhor(a), por favor, `
      let mensagem

      if (this.nomeValor == "") {
        mensagem = "informe seu nome"
      }

      else if (this.nomeValor.trim() == "") {
        mensagem = "preencha corretamente seu nome, espaços em bancos não são validos"
      }

      else if (isNaN(parseFloat(this.nomeValor)) == false ) {
        mensagem = "digite um nome valido, não números"
      }

      else if (this.nomeValor.length < 3) {
        mensagem = "digite um nome com no mínimo 3 letras"
      }

      else {
        this.nomeErro = "valido"
        return true
      }

      this.nomeErro = inicio + mensagem
      return false
      
    },
    validarEmail(): boolean {
      const inicio = `senhor(a)${(this.nomeErro == "valido") ? " " + this.nomeValor.trim() : "" }, por favor, `
      let mensagem

      const invalidos: string[] = [
        "!",
        "?",
        "*",
        "$",
        "#",
        "[",
        "]",
        "{",
        "}",
        "(",
        ")",
        "/",
        "\\",
        "|",
        "+",
        "%",
        "º",
        "ª",
        "´",
        "~",
        "^",
        '"',
        "'"
      ]
      let invalidoEncontrado = ""
      

      for (const invalido of invalidos) {
        if (this.emailValor.includes(invalido)) {
          invalidoEncontrado = invalido
          break;
        }
        continue
      }

      if (this.emailValor == "") {
        mensagem = "informe seu email"
      }

      else if (this.emailValor.trim() == "") {
        mensagem = "preencha corretamente seu email, espaços em brancos não são validos"
      }

      else if (this.emailValor.indexOf("@") == -1) {
        mensagem = "coloque o arroba"
      }

      else if (this.emailValor.indexOf("@") == 0) {
        mensagem = "informe o nome de seu email"
      }

      else if (this.emailValor.indexOf("@") == this.emailValor.length - 1) {
        mensagem = "especifique o seu domínio de email"
      }

      else if (this.emailValor.indexOf("@.") != -0) {
        mensagem = "escreva corretamente o domínio de seu email"
      }

      else if (this.emailValor.indexOf(".") == this.emailValor.length - 1) {
        mensagem = "termine de especificar o seu domínio de email"
      }

      else if (invalidoEncontrado != "") {
        mensagem = "remova o caractere invalido, " + invalidoEncontrado
      }

      else {
        this.emailErro = "valido"
        return true
      }


      this.emailErro = inicio + mensagem
      return false
    },
    validarAssunto(): boolean {
      return true
    },
    validarTelefone(): boolean {
      return true
    },
    validarMensagem(): boolean {
      const inicio = `senhor(a)${(this.nomeErro == "valido") ? " " + this.nomeValor.trim() : "" }, por favor, `
      let mensagem

      if (this.mensagemTextarea == "") {
        mensagem = "informe seu nome"
      }

      else if (this.mensagemTextarea.trim() == "") {
        mensagem = "preencha corretamente seu nome, espaços em brancos não são validos"
      }

      else if (this.mensagemTextarea.length < 5) {
        mensagem = "sua mensagem deve ter no mínimo 5 caracteres"
      }

      else {
        this.mensagemErro = "valido"
        return true
      }

      this.mensagemErro = inicio + mensagem
      return false
    },
    validarTodos(): boolean {
      let validacao: number = Number(this.validarNome()) + Number(this.validarEmail()) +  Number(this.validarAssunto()) + Number(this.validarTelefone()) + Number(this.validarMensagem())

      console.log(validacao);
      
      if (validacao == 5) {
        return true
      }

      else {
        return false
      }

    }, 
    submit() {
      if (this.validarTodos()) {
        this.$emit("submit", this.nomeValor,this.emailValor, this.assuntoValor, this.telefoneValor, this.mensagemTextarea)
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.pegarProgresso)
  }
}
</script>

<template>
  <div class="base">
    <nav>
      <icon-logo/>
      <router-link to="/">
        <icon-home />
        <h4>home</h4>
      </router-link>
      <router-link to="/soft-skills/">
        <icon-soft-skills />
        <h4>soft skills</h4>
      </router-link>
      <router-link to="/inteligencia-emocional/">
        <icon-inteligencia-emocional />
        <h4>inteligencia emocional</h4>
      </router-link>
    </nav>
    <div>
      <div class="barra">
        <div class="progresso" :style="`width: ${progresso}`"></div>
      </div>
      <div id="topo"></div>
      <RouterView />

      
      <form @submit.prevent="submit()" action="mailto:" method="post" novalidate>
        <h2 class="titulo">entre em contato</h2>
        <img src="/public/contato.svg" alt="">
        <div class="barra">
          <div class="progresso"></div>
        </div>
        <div>
          <label for="input-nome">nome</label><input @input="validarNome()" v-model="nomeValor" id="input-nome" type="text">
          <p>{{ nomeErro }}</p>
        </div>
        <div>
          <label for="input-email">email</label><input @input="validarEmail()" v-model="emailValor" id="input-email" type="text">
          <p>{{ emailErro }}</p>
        </div>
        <div>
          <label for="input-assunto">assunto</label><input @input="validarAssunto()" v-model="assuntoValor" id="input-assunto" type="text">
          <p>{{ assuntoValor }}</p>
        </div>
        <div>
          <label for="input-telefone">telefone</label><input @input="validarTelefone()" v-model="telefoneValor" optional id="input-telefone" type="tel">
          <p>{{ telefoneValor }}</p>
        </div>
        <div>
          <label for="textarea-mensagem">mensagem</label><textarea @input="validarMensagem()" v-model="mensagemTextarea" name="" id="textarea-mensagem" cols="30" rows="10"></textarea>
          <p>{{ mensagemErro }}</p>
        </div>
        <button type="submit">enviar</button>
      </form>

      <footer>
        <img src="/public/Fieb.png" alt="" />
        <h3>inf2bm</h3>
        <div class="participantes">
          <div>
            <h3>João</h3>
          </div>
          <div>
            <h3>Jhordan</h3>
          </div>
          <div>
            <h3>Danilo</h3>
          </div>
        </div>

        <div class="tecnologias">
          <icon-vue />
          <h3>Vue.js</h3>
          <icon-nest />
          <h3>Nest.js</h3>
          <icon-sass />
          <h3>SASS</h3>
          <icon-html />
          <h3>HTML</h3>
        </div>
      </footer>
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


.tecnologias {
  svg {
    width: 10vw;
    height: 10vw;
  } 
}
.barra {
  z-index: 5;
  width: 100%;
  height: 0.7rem;
  position: sticky;
  top: 0%;
  background-color: transparent;

  .progresso {
    background-color: rgba(0, 189, 126, 1);
    height: 100%;
    transition: all 100ms ease-in-out;
    width: 0%;
  }
}
nav {
  background-color: var(--color-background-soft);
  width: 5vw;
  height: 100vh;
  font-size: 1rem;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  position: sticky;
  top: 0%;
  padding-top: 10px;
  border-right: rgba(0, 189, 126, 1) solid 1px;

  &:hover {
    width: 10vw;
  }

  > svg {
    width: 100%;
    fill: rgba(0, 189, 126, 1);
    //filter: drop-shadow(0px 5px 2px rgba(0, 189, 126, 1));
    margin-bottom: 20px;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    border-bottom: 1px solid var(--color-border);
    text-align: center;

    svg {
      fill: var(--color-text);
      width: 3rem;
      height: 3rem;
    }

    h4 {
      text-transform: capitalize;
    }

    &.router-link-exact-active {
      color: rgba(0, 189, 126, 1);
      border-color: rgba(0, 189, 126, 1);

      svg {
        fill: rgba(0, 189, 126, 1); 
      }
    }
  }
}
</style>