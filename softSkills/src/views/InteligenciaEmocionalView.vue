<template>
  <div>
    <header>
      <h1 class="titulo">Inteligencia emocional</h1>
      <h2 class="titulo">pilares</h2>

      <div class="pilares">
        <pilar 
          titulo="autoconsciência" 
          imagem="/autoconsciencia.svg" 
          textos="De modo geral, o comportamento de um indivíduo é guiado pelos sentimentos e valores que ele traz consigo. Logo, o domínio das próprias emoções permite reconhecer os sentimentos e agir de maneira mais responsável e consciente.

          Vamos imaginar uma situação de conflito, devido à discussão de discordância sobre o modo de conduzir um projeto. A autoconsciência emocional leva a uma reflexão que estabelece limites para sentimentos como tensão e raiva, impedindo que a exaltação tome proporções irremediáveis.
          
          De forma inteligente, o profissional sabe que precisa recuar para evitar palavras e comportamentos equivocados. Quanto mais desenvolvida a autoconsciência, maiores serão as chances de autocontrole e de sentimentos positivos diante do que desagrada."
        />
        <pilar 
          titulo="autorregulação" 
          imagem="/autorregulacao.png" 
          textos="Ter consciência das próprias emoções é importante, mas não terá efeito para quem não souber controlar seus impulsos a cada ocorrência. Pedir desculpas após acessos de raiva ou discussões acaloradas pode não fazer mais sentido, sobretudo, no ambiente de trabalho.

          A autorregulação é um dos pilares da inteligência emocional que funciona como um sinal de alerta, freando ações intempestivas e, muitas vezes, impensadas. Uma ação agressiva de um lado, gera uma reação de outro, que pode trazer consequências graves.
          
          Considerando o ditado “o meu limite termina onde começa o do outro” é preciso saber recuar, calar ou mudar a direção de uma conduta. A conclusão de um projeto, andamento das atividades e fluidez dos processos de rotina, dependem de cada um saber respeitar o espaço do outro."
        />
        <pilar 
          titulo="automotivação" 
          imagem="/automotivacao.png" 
          textos="Um profissional pode ter o emprego dos sonhos, um salário competitivo e benefícios incríveis, mas nunca se sentirá satisfeito se não for automotivado. A motivação é intrínseca e por mais que uma empresa ou pessoa faça o melhor, não será suficiente se não exalar de dentro para fora.

          Nesse pilar, cada indivíduo deve encontrar as razões pelas quais levanta todos os dias e realizar atividades, pessoais e profissionais. Assim, ir ao trabalho, à academia ou a uma festa, não pode depender de terceiros, mas sim de uma vontade própria de realizar algo positivo e satisfatório.
          
          Uma pessoa automotivada, dentro dos pilares da inteligência emocional, vai sempre enxergar o copo meio cheio e buscar alternativas que levem a um desfecho positivo. Trata-se de alguém que acredita no próprio potencial e consegue com seu otimismo inspirar família e colegas a fazerem o mesmo."
        />
        <pilar 
          titulo="empatia" 
          imagem="/empatia.png"
          textos="O conceito básico da empatia é de se colocar no lugar do outro e refletir como ele se sentiria diante de uma determinada situação. Um princípio é não tratar ninguém como não gostaria de ser tratado, logo, um pilar de grande importância para a vida como um todo.

          É um consolidado dos pilares anteriores, seja pelo lado positivo ou negativo e seu exercício contínuo faz cair por terra condutas de julgamentos precipitados e achismos infundados.
          
          Dentro de um mesmo grupo, as pessoas são diferentes, construídas de valores independentes e muitas vezes, únicos. Um indivíduo empático vai pensar duas vezes antes de uma ação complexa, buscando compreender os porquês que levam o outro a agir de determinada maneira."
        />
      </div>
    </header>

    <div>
      
    </div>
  </div>
</template>

<script lang="ts">
import Pilar from '@/components/Pilar.vue';

export default {
  components: { Pilar }
}
</script>

<style lang="scss" scoped>
.pilares {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15%;
}
</style>