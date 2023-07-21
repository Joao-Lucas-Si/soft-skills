<template>
  <div class="SoftSkills">
    <h1 class="titulo">soft Skills</h1>
    <player-audio capa="/soft-skills/audio_capa.webp" audio="/soft-skills/audio.mp3" titulo="O que são 'soft skills', habilidades comportamentais cada vez mais buscadas por empregadores" />
    <article>


      <h2 class="titulo">O que é Soft Skills</h2>

      <div class="textos">
        <p><strong>soft skills</strong> podem ser definidas como um conjunto de <strong>habilidades e competências relacionadas ao comportamento humano</strong>. Ou seja: são habilidades que utilizamos no dia a dia para resolver problemas e alcançar resultados com outras pessoas e partir de outras pessoas.</p>

        <p>desmembrado o significado do termo importada da língua inglesa, o termo <strong>“soft”</strong> significa macio. Mas, neste caso, faz referência a <strong>“interpessoal”</strong>, ou seja, algo que vem de dentro das pessoa, da maneira de ser de alguém. Já <strong>“skill”</strong> pode traduzida de uma maneira literal, no caso, habilidade. Sendo assim, o termo <strong>“soft skills” pode ser definido como habilidades interpessoais.</strong></p>

        <p>De certa forma, <strong>soft skills são competências que criamos a partir da nossa experiência</strong>, não somente profissional, ao lidar com o mundo à nossa volta. Se somos engenheiros, médicos ou advogados, nesse caso, não importa: qualquer pessoa pode ser uma especialista quando o tema são soft skills.</p>
      </div>
    </article>

    <article>
      <h2 class="titulo">Como desenvolvê-las?</h2>

      <div class="textos">
        <p>Para desenvolver as soft skills, os profissionais devem começar tendo a mente aberta para refletir sobre quais são os pontos de melhora da sua personalidade. Uma pessoa que é muito impulsiva pode tentar ponderar as situações com mais calma e avaliar todas as possibilidades previsíveis antes de tomar decisões.</p>

        <p>Alguém que é muito individualista pode começar reconhecendo essa característica para se esforçar mais em ser colaborativo quando for colocado em projetos que demandam o trabalho em equipe.</p>

        <p>Além disso, é importante solicitar feedbacks de colegas e superiores. Conversar com alguém da equipe de Recursos Humanos da empresa pode fazer com que novas descobertas e oportunidades surjam para o desenvolvimento das soft skills.</p>

        <h3 class="titulo">Vantagens</h3>

        <p>No mercado de trabalho, as soft skills contam muitos pontos para ser escolhido para uma vaga de trabalho – e, o mais importante, para permanecer nessa vaga, com possibilidades de promoção e reconhecimento da empresa.</p>

        <p>Quem desenvolve soft skills relacionadas à comunicação, trabalho em equipe, liderança, flexibilidade, resiliência, proatividade, ética, otimismo, empatia e inteligência emocional, por exemplo, tende a ser um ativo de valor inestimável para as empresas em que atuam.</p>

        <p>
          Além disso, as pessoas que possuem boas soft skills podem não só conseguir boas oportunidades na carreira, mas também ter uma qualidade de vida melhor em relação à família, amigos, relacionamentos e muitas outras áreas.
        </p>
      </div>
    </article>

    <multi-player :videos="[
      {
        indice: 1,
        video: '/videos/soft-skills-programador.mp4',
        capa: '/videos/capa/programador-soft-skills.png',
        titulo: 'A Soft Skill que TODO Programador Precisa Desenvolver // Vlog #136'
      },
      {
        indice: 2,
        video: '/videos/soft-skills-mercado.mp4',
        capa: '/videos/capa/mercado-soft-skills.png',
        titulo: 'Conheça as 6 SOFT SKILLS mais requisitadas no mercado! 🏆'
      },
      {
        indice: 3,
        video: '/videos/soft-skills-carreira.mp4',
        capa: '/videos/capa/carreira-soft-skills.png',
        titulo: 'O que são Soft Skills e como utilizá-las na carreira?'
      }
    ]" />

    <article>
      <h2 class="titulo">soft skills mais utilizadas e requeridas nas empresas</h2>
      <div class="textos">
        <p>
        As habilidades sociais e emocionais, conhecidas como soft skills, têm se tornado cada vez mais importantes nas empresas, pois complementam as habilidades técnicas dos profissionais. Embora a importância de cada soft skill possa variar de acordo com o setor e o contexto específico, aqui estão cinco soft skills amplamente utilizadas nas empresas:

      </p>

      <ol>
        <li>
          <details-summary 
            texto="A capacidade de se expressar de forma clara e concisa, tanto verbalmente quanto por escrito, é essencial em qualquer ambiente de trabalho. A comunicação eficaz inclui habilidades de escuta ativa, assertividade, capacidade de adaptação ao público-alvo e uso adequado de tecnologias de comunicação." 
            titulo="Comunicação eficaz"
          />
        </li>
        <li>
          <details-summary 
            texto="A capacidade de trabalhar bem com os outros, compartilhar ideias, ouvir diferentes perspectivas e resolver problemas em conjunto é altamente valorizada pelas empresas. Isso envolve habilidades de negociação, empatia, flexibilidade e respeito à diversidade de opiniões." 
            titulo="Trabalho em equipe e colaboração:"
          />
        </li>
        <li>
          <details-summary 
            texto="As empresas buscam profissionais capazes de analisar situações complexas, tomar decisões embasadas em evidências, identificar e resolver problemas de forma eficiente. O pensamento crítico envolve habilidades como análise de dados, criatividade, tomada de decisões ponderadas e resolução de conflitos." 
            titulo="Pensamento crítico e solução de problemas: "
          />
        </li>
        <li>
          <details-summary 
            texto="A inteligência emocional é a capacidade de reconhecer e gerenciar as emoções próprias e dos outros. Ela abrange habilidades como autoconsciência, autorregulação emocional, empatia e habilidades interpessoais. Profissionais com alta inteligência emocional tendem a ser mais resilientes, adaptáveis e eficazes na gestão de relacionamentos." 
            titulo="Inteligência emocional: "
          />
        </li>
        <li>
          <details-summary 
            texto="Mesmo que você não ocupe um cargo de liderança formal, as habilidades de liderança são valorizadas em diversos níveis. Isso inclui a capacidade de influenciar e motivar os outros, delegar tarefas, tomar decisões assertivas e inspirar confiança. A liderança também envolve habilidades de comunicação, resolução de problemas e pensamento estratégico." 
            titulo="Liderança: "
          />
        </li>
      </ol>
      <p>
        É importante ressaltar que as soft skills não são apenas características inatas, mas podem ser desenvolvidas e aprimoradas ao longo do tempo. As empresas reconhecem a importância dessas habilidades e muitas vezes procuram por candidatos que possuam uma combinação equilibrada de habilidades técnicas e soft skills para promover um ambiente de trabalho produtivo e colaborativo.
      </p>
    </div>
  </article>
  <article>
    <h2 class="titulo">Como a tecnologia pode ajudar a demanda de soft skills nas empresas</h2>
    <div class="textos">
      <p>A tecnologia desempenha um papel fundamental em ajudar a atender à demanda por soft skills nas empresas. Aqui estão algumas maneiras pelas quais a tecnologia pode ser utilizada nesse contexto:</p>
    </div>

    <imagem-texto 
      :nivel="3" 
      texto="A tecnologia permite o acesso a uma ampla variedade de recursos de aprendizagem online, como cursos, tutoriais em vídeo e conteúdos interativos. Essas plataformas podem oferecer treinamentos específicos para desenvolver habilidades sociais e emocionais, permitindo que os funcionários aprendam no seu próprio ritmo e de acordo com suas necessidades individuais." 
      titulo="E-learning e plataformas de treinamento: " 
      imagem="/soft-skills/e-learning.jpeg" 
    />

    <imagem-texto :nivel="3" :reverso="true" texto="A tecnologia de realidade virtual pode fornecer experiências simuladas que permitem aos profissionais praticar habilidades sociais em um ambiente seguro e controlado. Por exemplo, os funcionários podem participar de simulações de negociação, apresentações ou resolução de conflitos, onde recebem feedback imediato e podem aprimorar suas habilidades de forma interativa." titulo="Realidade virtual e simulações:" imagem="/soft-skills/realidade-virtual.jpeg" />     

    <imagem-texto :nivel="3" texto="Com a crescente popularidade do trabalho remoto, as empresas têm adotado plataformas de colaboração online, como Slack, Microsoft Teams e Google Workspace. Essas ferramentas permitem que os profissionais se comuniquem e colaborem de forma eficiente, independentemente da localização física. Elas facilitam a prática de habilidades de comunicação, trabalho em equipe e negociação, ao mesmo tempo em que promovem a interação social entre os membros da equipe." titulo="Plataformas de colaboração online: " imagem="/soft-skills/colaboracao.jpg" />

    <imagem-texto :nivel="3" :reverso="true" texto="A gamificação envolve a aplicação de elementos de jogos, como pontos, competição e recompensas, em contextos não relacionados a jogos. Essa abordagem pode ser utilizada para incentivar e desenvolver soft skills. Por exemplo, os funcionários podem participar de jogos ou desafios interativos que promovam o trabalho em equipe, a resolução de problemas ou a comunicação eficaz. Essas experiências lúdicas podem ser envolventes e motivadoras, estimulando o desenvolvimento de habilidades sociais." titulo="Gamificação:" imagem="/soft-skills/gamificacao.jpg" />
  
    <imagem-texto :nivel="3" texto="A tecnologia também pode ajudar a avaliar e fornecer feedback sobre habilidades sociais. Por exemplo, as empresas podem utilizar ferramentas de análise de linguagem natural para analisar a comunicação escrita dos funcionários, identificando pontos fortes e áreas de melhoria. Além disso, feedbacks anônimos podem ser coletados por meio de pesquisas online, permitindo que os funcionários expressem suas opiniões sobre o clima de trabalho, liderança e colaboração na empresa." titulo="Ferramentas de análise e feedback:" imagem="/soft-skills/feedback.webp" />
       
  
    <div class="textos">
      <p>Essas são apenas algumas maneiras pelas quais a tecnologia pode apoiar o desenvolvimento e aprimoramento das soft skills nas empresas. É importante lembrar que, embora a tecnologia seja uma ferramenta valiosa, o desenvolvimento de habilidades sociais ainda requer interação humana, prática e feedback contínuo para alcançar resultados efetivos.</p>
    </div>
  </article>
  <quiz 
    texto-inicio="preparamos um pequeno quiz relacionado a soft skills, ele é totalmente baseado nos tópicos abordados anteriormente. se quiser, releia e se prepare para responder, quando estiver pronto, clique em começar"
    nome="soft skills" 
    :questoes="[
      {
        index: 1, 
        pergunta: 'qual o significado da palavra soft skills?',
        resposta: 'b',
        alternativas: [
          {
            indice: 'a',
            texto: 'habilidade técnica',
          },
          {
            indice: 'b',
            texto: 'habilidades interpessoais'
          },
          {
            indice: 'c',
            texto: 'habilidades macias'
          },
          {
            indice: 'd',
            texto: 'habilidades inúteis'
          },
        ]
      },
      {
        index: 2, 
        pergunta: 'quais as soft skills mais utilizadas e requeridas nas empresas?',
        resposta: 'a',
        alternativas: [
          {
            indice: 'a',
            texto: 'Comunicação eficaz, Trabalho em equipe e colaboração, Pensamento crítico e solução de problemas, Inteligência emocional e Liderança',
          },
          {
            indice: 'b',
            texto: 'lógica de programação, criatividade, pensamento crítico e solução de problemas e pensamento ágil'
          },
          {
            indice: 'c',
            texto: 'nenhuma, soft skills são inúteis no mercado de trabalho'
          },
          {
            indice: 'd',
            texto: 'comunicação, proatividade, trabalho em equipe e lidar com pressão'
          },
        ]
      }
  ]"/>
</div>
</template>

<script lang="ts">
import MultiPlayer from '@/components/MultiPlayer.vue';
import Quiz from '@/components/Quiz.vue';
import ImagemTexto from '@/components/ImagemTexto.vue';
import DetailsSummary from '@/components/DetailsSummary.vue';
import PlayerAudio from '@/components/PlayerAudio.vue';
export default {
    beforeMount() {
     document.title = "soft skills"
  },
    components: { Quiz, MultiPlayer, ImagemTexto, DetailsSummary, PlayerAudio }
}
</script>

<style lang="scss">
</style>
