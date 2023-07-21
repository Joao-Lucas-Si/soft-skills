<template>
  <div>
    <h1 class="titulo">home</h1>
    <header>
      <h2 class="titulo">noticias</h2>
      <div>
        <button v-if="noticiaAtual != 1" @click="mudarNoticia('esquerda')"><icon-seta-esquerda style="height: 100%; width:100%" fillCor="#00bd7e" /></button>
        <span v-else></span>
        <div class="noticias">
          <noticia
            img="https://www.atribuna.com.br/storage/Variedades/Domingo_Mais/img1000677510643.webp"
            titulo=" Soft skills: Estudo mostra o porque essas atividades são tão importantes "
            :posicao="1"
            url="https://www.atribuna.com.br/variedades/domingo-mais/soft-skills-estudo-mostra-o-porque-essas-atividades-sao-tao-importantes"
            fonteLogo="https://www.atribuna.com.br/assets/img/Home/logoat.svg"
            :noticia-atual="noticiaAtual"
            fonteUrl="https://valor.globo.com/"
            cor="#282828"
          />
          <noticia
            img="https://s2.glbimg.com/oxZiAwMEu-x_jxdy-y8lLLQZETg=/0x0:1500x989/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2023/i/t/kFDv7OSZ6Su6O0AyLIhg/d5ff58ee-860b-4edf-87f6-c3317455eb6b.jpg"
            titulo="Mercado de trabalho: “soft skills” ganham espaço"
            :posicao="2"
            url="https://valor.globo.com/patrocinado/dino/noticia/2023/02/15/mercado-de-trabalho-soft-skills-ganham-espaco.ghtml"
            fonteLogo="https://s3.glbimg.com/v1/AUTH_1b264e8ce06649ae85acee5d38e32f34/images/novo_logo_valor_economico.png"
            :noticia-atual="noticiaAtual"
            fonteUrl="https://valor.globo.com/"
            cor="#282828"
          />
          <noticia
            img="https://img.olhardigital.com.br/wp-content/uploads/2023/01/soft_skills-1536x864.jpg"
            titulo="A urgência das soft skills no mercado tecnológico pós-pandêmico"
            :posicao="3"
            url="https://olhardigital.com.br/2023/01/23/colunistas/a-urgencia-das-soft-skills-no-mercado-tecnologico-pos-pandemico/"
            fonteLogo="https://olhardigital.com.br/wp-content/themes/olhardigital/views/default/assets/images/header-logo.webp"
            :noticia-atual="noticiaAtual"
            fonteUrl=""
            cor="#282828"
          />
        </div>
        <button v-if="noticiaAtual != 3" @click="mudarNoticia('direita')"><icon-seta-direita style="height: 100%; width:100%" fillCor="#00bd7e" /> </button>
        <span></span>
      </div>
    </header>

    <h2 class="titulo">Integrantes</h2>

    <div class="integrantes-info">
      <integrante nome="João Lucas Silva Lopes" foto="logo.png" :idade="17" :skills="['criatividade', 'proatividade']"  />
      <integrante nome="Jhordan Samuel Jesus dos Santos" foto="jhordan.png" :idade="16" :skills="['lidar com pressão', 'trabalho em equipe']" />
      <integrante nome="Danilo Medeiros de Oliveira" foto="danilo.png" :idade="17" :skills="['comunicação', 'trabalho em equipe', 'proatividade']" />
    </div>
  </div>
</template>

<script lang="ts">
import IconSetaDireita from '../components/icons/IconSetaDireita.vue';
import IconSetaEsquerda from '../components/icons/IconSetaEsquerda.vue';
import Integrante from '../components/Integrante.vue'
import Noticia from '../components/Noticia.vue'
export default {
  components: { Noticia, Integrante, IconSetaEsquerda, IconSetaDireita },
  data() {
    return {
      noticiaAtual: 1,
      numeroNoticias: 1,
      direcao: "esquerda",
    }
  },
  beforeMount() {
     document.title = "inteligência emocional"
  },
  methods: {
    mudarNoticia(direcao:string): void {
      this.direcao = direcao
      if (direcao == "esquerda"){
        
        (this.noticiaAtual != 1) ? this.noticiaAtual = this.noticiaAtual - 1 : ""
      }
      else {
        (this.noticiaAtual < 3) ? this.noticiaAtual = this.noticiaAtual + 1 : ""
      }
      
    }
  },
}
</script>

<style lang="scss" scoped>
.integrantes-info {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-content: center;
  text-align: center;
  margin-block: 5vh;

}
header {
  overflow: hidden;
  border-block: solid var(--cor-destaque) 4px;
  background-color: var(--color-background-mute);

  > div {
    display: grid;
    grid-template-columns: 5% 90% 5%;

    button, span {
      z-index: 2;
      width: 100%;
      height: 100%;
      background-color: var(--color-background-mute);
      border: none
    }
  }
}

.noticias{
  display: flex;
  border: solid $cor-destaque 5px ;
  border-bottom: none;
}

</style>