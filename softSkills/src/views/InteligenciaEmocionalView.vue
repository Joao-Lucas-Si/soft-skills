<template>
  <div>
    <h1 class="titulo">Inteligencia emocional</h1>

    <header>
      
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
        <pilar 
          titulo="Habilidades sociais" 
          imagem="/logo.svg"
          textos="Para fechar, o último dos pilares da inteligência emocional é tão importante quanto os demais, diz respeito às habilidades sociais, ou seja, a capacidade de construir relações saudáveis e duradouras. Quem tem o dom da sociabilidade fará de tudo para que conviver em paz e harmonia em um ambiente coletivo.

          A pessoa hábil socialmente será pacífica, gentil, positiva e prestativa, mesmo quando se sentir irritada ou frustrada por algum motivo. É como se ela fosse capaz de não se deixar atingir pelas emoções negativas, pensando no bem comum e nas oportunidades de crescimento na vida e na carreira.
          
          Cada indivíduo em sua jornada de formação traz consigo diversas emoções e sentimentos mais ou menos desenvolvidos. Ao longo da vida é possível perceber a necessidade de aprimorar os sentidos e dar vazão a princípios que farão a diferença conforme o ambiente."
        />
      </div>
    </header>

    <main>
      <article>
        <imagem-texto imagem="/inteligencia-emocional/definicao.png" 
        texto='A inteligência emocional é a capacidade de reconhecer, compreender e gerenciar as próprias emoções e as emoções dos outros de forma eficaz. Ela envolve a habilidade de identificar e nomear as emoções, entender como elas afetam o pensamento e o comportamento, além de ser capaz de lidar com elas de maneira saudável e construtiva.
        
        A teoria da inteligência emocional destaca a importância das habilidades emocionais no sucesso pessoal e profissional. Ela foi popularizada por Daniel Goleman em seu livro "Inteligência Emocional", no qual ele argumenta que a inteligência emocional é fundamental para o bem-estar e o desempenho nas diferentes áreas da vida.' titulo="O que é inteligência emocional" />
      </article>
      <article>
        <h2 class="titulo">Augusto Cury e Daniel Goleman</h2>

        <card-info :etapas="[
          {
            indice: 1,
            titulo: 'Augusto Cury'
          },
          {
            indice: 2,
            titulo: 'Nascimento'
          },
          {
            indice: 3,
            titulo: 'obras'
          },
        ]">
          <template #1>
            
            <Paragrafos texto="Augusto Cury (1958) é um médico psiquiatra, professor e escritor brasileiro, famoso pelos seus livros na área de psicologia. É o autor da Teoria da Inteligência Multifocal.

            Augusto Cury (1958) nasceu em Colina, São Paulo, no dia 2 de outubro de 1958. Formou-se em Medicina pela Faculdade de São José do Rio Preto. Dedicou-se durante 17 anos à pesquisa sobre as dinâmicas da emoção. É o criador da Teoria da inteligência multifocal, que visa explicar o funcionamento da mente humana e as formas de como devemos fazer para exercer maior domínio sobre a nossa vida por meio da inteligência e pensamento."/>
          </template>
          <template #2>
            <h1>nascimento</h1>
          </template>
          <template #3>
            
            Augusto Cury publicou vários livros, entre eles: “Revolucione Sua Qualidade de Vida“ (2002), “Dez Leis para Ser Feliz” (2003), “Nunca Desista de Seus Sonhos” (2004), Coleção “Análise da Inteligência de Cristo” (2006), “Os Segredos do Pai-Nosso” (2007) e “De Gênio e Louco Todo Mundo Tem um Pouco” (2009).
            
          </template>
        </card-info>
        <card-info :etapas="[
          {
            indice: 1,
            titulo: 'Daniel Goleman'
          },
          {
            indice: 2,
            titulo: 'vida'
          },
          {
            indice: 3,
            titulo: 'Atividades'
          },
          {
            indice: 4,
            titulo: 'frases'
          },
          {
            indice: 5,
            titulo: 'obras'
          },
        ]">
          <template #1>
            <h1>augusto cury</h1>
          </template>
          <template #2>
            <p>Daniel Goleman nasceu em Stockton, Califórnia, Estados Unidos, no dia 7 de março de 1946. Foi aluno do Amherst College e na Universidade da Califórnia, em Berkeley. Recebeu o PhD na Universidade de Harvard onde também lecionou.

              Durante 12 anos, Daniel Goleman foi jornalista do New York Times, onde cobria a seção de Ciências do comportamento e do cérebro. Foi editor da Psychology Today. Realiza palestras para grupos profissionais.
              Inteligência emocional
              
              Em 1995, tornou-se uma celebridade do mercado editorial com a publicação do livro Inteligência Emocional, que vendeu 5 milhões de cópias, em quarenta idiomas e se tornou um best-seller em vários países.</p>
          </template>
          <template #3>
            <p>Daniel Goleman realiza palestras para grupos profissionais. É cofundador do Collaborative for Academic Social e Aprendizagem Emocional na Universidade de Illinois, em Chicago. É codiretor do Consórcio para Pesquisa sobre Inteligência Emocional entre as organizações e a Universidade de Rutgers. É membro do Conselho do Instituto Mente & Vida.</p>
            <div style="display: flex; justify-content: center;">
            <img src="https://th.bing.com/th/id/OIP.ZiXBlyP-i8VueJMMaKOMYAHaF1?pid=ImgDet&amp;rs=1" width="150" height="150" alt="Instituto Mente e Vida - CRECI-PB - Conselho Regional de Corretores de ..." >
            <svg fill="#0000ff" xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 55 55">
              <path class="name" d="m18.21 25.47c0.41 1.16 0.79 2.25 1.18 3.36h-2.35c0.39-1.11 0.77-2.2 1.18-3.36m33.8 4.89h-3.73v-7.86h-2.6v10.07h6.32zm-41.39-7.62c-2.37-1.09-5.03-0.47-6.57 1.45-1.6 1.99-1.54 4.85 0.13 6.81 1.64 1.92 4.19 2.35 6.43 1.33v-3.06c-0.6 0.61-1.26 1-2.1 1.04-0.85 0.04-1.57-0.24-2.15-0.86-0.93-1-0.98-2.66-0.12-3.72 0.56-0.69 1.31-1 2.19-0.99 0.88 0.01 1.58 0.4 2.18 1.09zm21.73 0.3c-0.04-0.03-0.06-0.05-0.09-0.06-1.04-0.53-2.14-0.82-3.31-0.76-1.7 0.09-2.87 1.07-3.16 2.62-0.31 1.62 0.33 2.75 1.86 3.33 0.26 0.1 0.52 0.18 0.78 0.28 0.37 0.14 0.75 0.28 1.1 0.45 0.3 0.14 0.47 0.39 0.48 0.74 0.01 0.56-0.41 0.96-1.06 1.01-0.88 0.06-1.61-0.3-2.28-0.83-0.07-0.06-0.15-0.12-0.23-0.19-0.38 0.72-0.75 1.4-1.12 2.1 0.85 0.6 1.77 0.97 2.78 1.09 1.13 0.13 2.23 0.04 3.23-0.58 1.08-0.68 1.48-1.71 1.45-2.93-0.02-1.2-0.61-2.05-1.69-2.55-0.44-0.2-0.91-0.34-1.37-0.51-0.28-0.11-0.57-0.21-0.83-0.34-0.27-0.14-0.43-0.37-0.41-0.69 0.02-0.33 0.19-0.59 0.48-0.67 0.33-0.09 0.72-0.17 1.04-0.1 0.46 0.1 0.89 0.35 1.36 0.54 0.31-0.61 0.65-1.28 0.99-1.95zm3.76-0.54v10.08h5.92v-2.22h-3.31v-1.74h3.13v-2.23h-3.13v-1.68h3.31v-2.2zm-12.62 10.08c-1.28-3.37-2.56-6.73-3.84-10.08h-2.87c-1.28 3.36-2.55 6.71-3.84 10.08h2.79c0.2-0.58 0.4-1.16 0.6-1.74h3.76c0.2 0.59 0.41 1.17 0.6 1.73zm31.46-5.94v1.66c-0.01 0.29-0.03 0.59-0.04 0.88-0.1 2.15-0.5 4.24-1.11 6.28h-52.54c-0.03-0.1-0.06-0.19-0.09-0.29-0.68-2.32-1.04-4.7-1.09-7.11 0-0.4 0-0.79 0-1.19 0.01-0.21 0.01-0.42 0.02-0.63 0.1-2.27 0.47-4.5 1.13-6.67 0.13 0 0.26-0.01 0.39-0.01 17.27 0 34.53 0 51.8 0 0.13 0 0.26 0 0.39 0.01 0.61 2.02 0.99 4.08 1.09 6.19 0.01 0.29 0.03 0.59 0.04 0.88z"></path>
                <path class="piece" d="m26.06 54.9c-1.85-0.12-3.68-0.38-5.45-0.85 1.09-1.09 2.18-2.18 3.27-3.27 0.02 0.02 0.08 0.08 0.14 0.13 1.28 1.28 2.55 2.55 3.83 3.83 0.06 0.06 0.1 0.14 0.16 0.21h-1.12c-0.28-0.02-0.55-0.03-0.83-0.05"></path>
                <path class="piece" d="m19.69 1.19c0.83-0.4 4.67-1.09 6.07-1.09 1.6 1.6 3.18 3.18 4.79 4.79-0.03 0.04-0.09 0.1-0.14 0.15-1 1-2 2-3 3-0.28 0.28-0.47 0.24-0.57-0.15-0.34-1.25-1.12-2.06-2.42-2.28-1.49-0.25-2.91 0.72-3.27 2.18-0.35 1.47 0.47 2.96 1.9 3.44 0.15 0.05 0.31 0.09 0.47 0.14 0.22 0.08 0.28 0.27 0.12 0.43-1.07 1.08-2.15 2.15-3.23 3.22-0.01 0.01-0.03 0.01-0.11 0.04-0.12-0.14-0.25-0.3-0.4-0.45-0.91-0.91-1.81-1.82-2.72-2.73-0.66-0.66-1.59-0.43-1.83 0.47-0.24 0.91-0.74 1.55-1.69 1.76-1.08 0.24-2.17-0.42-2.47-1.48-0.3-1.07 0.27-2.19 1.3-2.57 0.16-0.06 0.33-0.1 0.49-0.15 0.8-0.24 1.05-1.16 0.46-1.76-0.83-0.84-1.67-1.67-2.56-2.56 1.25-0.8 2.48-1.59 3.7-2.38 0.98 0.94 2.07 1.25 3.29 0.76 1.22-0.5 1.79-1.47 1.83-2.77"></path>
                <path class="piece" d="m24.57 18.92h-0.31c-1.1-1.11-2.2-2.2-3.36-3.36 0.06-0.04 0.15-0.07 0.22-0.14 1-1 2-2 3-3 0.67-0.67 0.44-1.59-0.48-1.84-0.9-0.24-1.53-0.74-1.74-1.68-0.24-1.08 0.41-2.17 1.48-2.47 1.08-0.31 2.21 0.26 2.58 1.31 0.05 0.15 0.09 0.29 0.14 0.44 0.25 0.85 1.17 1.09 1.8 0.46 1.01-1 2.01-2.01 3.02-3.02 0.06-0.06 0.12-0.14 0.19-0.22 0.09 0.08 0.15 0.14 0.21 0.2 0.96 0.96 1.92 1.92 2.88 2.88 0.41 0.41 0.38 0.54-0.17 0.7-1.14 0.33-1.89 1.07-2.15 2.24-0.33 1.5 0.6 2.99 2.08 3.4 1.49 0.41 3.04-0.42 3.52-1.9 0.04-0.13 0.08-0.26 0.12-0.4 0.09-0.3 0.28-0.35 0.5-0.13 0.62 0.62 1.24 1.24 1.86 1.86 0.44 0.44 0.89 0.88 1.31 1.31-1.11 1.11-2.22 2.22-3.36 3.36h-7.49c-0.31-1.55-1.2-2.54-2.81-2.59-1.72-0.06-2.67 0.98-3.05 2.59"></path>
                <path class="piece" d="m10.29 6.11c0.61 0.61 1.19 1.19 1.78 1.78 0.26 0.26 0.52 0.52 0.78 0.78 0.22 0.22 0.16 0.39-0.13 0.51-0.44 0.18-0.91 0.33-1.29 0.61-0.99 0.73-1.35 2.05-0.95 3.21 0.4 1.17 1.49 1.95 2.73 1.95 1.24 0.01 2.34-0.76 2.75-1.93 0.06-0.17 0.1-0.34 0.16-0.51 0.07-0.22 0.28-0.28 0.44-0.12 1.07 1.07 2.14 2.14 3.21 3.21 0.01 0.01 0.01 0.03 0.01 0.03-1.1 1.1-2.19 2.19-3.3 3.3h-7.51c-0.24-1.37-1-2.26-2.36-2.55-0.84-0.18-1.61 0.02-2.3 0.53-0.68 0.5-1 1.23-1.19 2.02h-1.68c1.72-5.13 4.67-9.37 8.86-12.81"></path>
                <path class="piece" d="m31.65 4.9c1.03-1.03 1.99-1.99 2.96-2.96 0.2-0.2 0.4-0.4 0.6-0.6 0.23-0.22 0.42-0.17 0.51 0.14 0.03 0.1 0.06 0.2 0.09 0.3 0.58 1.89 2.78 2.67 4.42 1.56 0.05-0.03 0.09-0.06 0.16-0.11 1.37 0.72 2.66 1.56 3.92 2.53-0.08 0.05-0.14 0.08-0.2 0.11-1.05 0.55-1.66 1.67-1.55 2.82 0.11 1.19 0.9 2.17 2.03 2.53 0.12 0.04 0.23 0.07 0.35 0.1 0.29 0.09 0.34 0.29 0.13 0.5-0.44 0.45-0.88 0.89-1.33 1.33-0.62 0.62-1.24 1.24-1.87 1.87-0.07-0.07-0.14-0.13-0.2-0.19-1-1-2-2-3-3-0.66-0.66-1.59-0.43-1.83 0.48-0.23 0.88-0.71 1.51-1.62 1.74-1.09 0.27-2.21-0.37-2.53-1.45-0.32-1.09 0.26-2.23 1.32-2.6 0.15-0.05 0.31-0.1 0.47-0.14 0.8-0.24 1.04-1.17 0.45-1.76-1-1.01-2.01-2.01-3.02-3.02-0.07-0.07-0.16-0.12-0.26-0.19"></path>
                <path class="piece" d="m53.62 18.92h-1.66c-0.39-1.6-1.28-2.49-2.64-2.61-0.8-0.07-1.51 0.15-2.13 0.66-0.62 0.5-0.91 1.19-1.08 1.95h-0.29c-1.11-1.11-2.22-2.22-3.38-3.38 0.14-0.12 0.3-0.24 0.44-0.38 0.91-0.9 1.78-1.83 2.72-2.7 0.7-0.65 0.42-1.73-0.5-1.91-0.86-0.17-1.44-0.7-1.67-1.56-0.32-1.18 0.48-2.44 1.68-2.6 3.99 3.37 6.84 7.54 8.52 12.54"></path>
                <path class="piece" d="m26.93 0.1c0.19-0.02 0.39-0.05 0.58-0.06 0.3-0.01 0.59 0 0.89 0 2.55 0.07 5.14 0.59 6.03 0.89-1.1 1.1-2.2 2.2-3.34 3.35-1.36-1.37-2.76-2.77-4.16-4.17"></path>
                <path class="piece" d="m44.54 18.92h-5.3c0.87-0.87 1.77-1.77 2.65-2.65 0.85 0.85 1.75 1.75 2.65 2.65"></path>
                <path class="piece" d="m23.05 18.92h-5.32c0.89-0.89 1.78-1.78 2.66-2.66 0.86 0.86 1.76 1.75 2.66 2.66"></path>
                <path class="piece" d="m51.11 18.92h-4.16c0.01-0.92 1-1.82 2.03-1.84 1.09-0.02 2.08 0.83 2.13 1.84"></path>
                <path class="piece" d="m8.13 18.92h-4.17c0.08-0.99 1.01-1.8 2.06-1.83 1.06-0.02 1.99 0.78 2.11 1.83"></path>
                <path class="piece" d="m29.59 18.92h-4.15c0-0.91 0.97-1.78 2.02-1.82 1.06-0.05 2.05 0.79 2.14 1.82"></path>
                <path class="piece" d="m15.36 2.81c1.18-0.48 2.33-0.95 3.49-1.43 0.08 0.66-0.45 1.47-1.15 1.8-0.76 0.37-1.76 0.23-2.34-0.37"></path>
                <path class="piece" d="m36.58 1.52c1.03 0.43 2.01 0.84 3.01 1.26-0.99 0.64-2.61 0.14-3.01-1.26"></path>
                <path class="piece" d="m34.62 39.95c1.09 1.1 2.16 2.17 3.23 3.23 0.51 0.5 1.3 0.43 1.65-0.17 0.11-0.19 0.16-0.42 0.22-0.64 0.36-1.15 1.56-1.78 2.7-1.4 0.86 0.29 1.45 1.09 1.45 1.99 0 0.91-0.56 1.72-1.42 2.02-0.15 0.05-0.3 0.09-0.44 0.13-0.81 0.24-1.05 1.17-0.45 1.78 0.76 0.77 1.53 1.53 2.29 2.3 0.06 0.06 0.12 0.13 0.24 0.25-1.26 0.8-2.49 1.58-3.7 2.36-1.84-1.91-5.05-0.77-5.11 2.02-2 0.59-4.05 0.94-6.12 1.06-1.58-1.58-3.14-3.14-4.73-4.73 0.04-0.05 0.1-0.11 0.16-0.17 0.98-0.98 1.98-1.96 2.94-2.96 0.3-0.31 0.53-0.25 0.64 0.18 0.29 1.15 1.02 1.91 2.19 2.18 1.52 0.36 3.04-0.57 3.44-2.06 0.41-1.52-0.44-3.07-1.94-3.54-0.12-0.04-0.25-0.07-0.37-0.11-0.26-0.08-0.31-0.28-0.12-0.48 0.46-0.46 0.92-0.92 1.38-1.38 0.61-0.61 1.23-1.23 1.86-1.86"></path>
                <path class="piece" d="m34.06 39.47c-0.06 0.04-0.14 0.08-0.21 0.14-1 1-2 2-3 3-0.66 0.66-0.44 1.59 0.47 1.83 0.86 0.23 1.48 0.69 1.73 1.57 0.3 1.1-0.33 2.23-1.41 2.57-1.09 0.34-2.24-0.24-2.63-1.31-0.05-0.15-0.09-0.31-0.14-0.47-0.24-0.8-1.17-1.05-1.76-0.45-1.02 1.01-2.04 2.03-3.05 3.05-0.06 0.06-0.11 0.14-0.17 0.23-0.1-0.09-0.16-0.14-0.21-0.19-1-0.99-1.99-1.99-2.98-2.98-0.29-0.29-0.25-0.47 0.15-0.58 1.19-0.31 1.98-1.03 2.25-2.25 0.34-1.51-0.59-3.02-2.07-3.42-1.51-0.4-3.05 0.44-3.53 1.92-0.04 0.12-0.07 0.25-0.11 0.37-0.09 0.29-0.29 0.34-0.51 0.12-0.48-0.47-0.96-0.95-1.43-1.43-0.59-0.59-1.17-1.17-1.74-1.74 1.12-1.12 2.22-2.22 3.36-3.36h7.51c0.12 0.86 0.5 1.56 1.2 2.07 0.5 0.36 1.05 0.54 1.66 0.54 0.75 0.01 1.4-0.24 1.96-0.73 0.57-0.49 0.84-1.15 1-1.87h0.31c1.11 1.11 2.21 2.21 3.35 3.36"></path>
                <path class="piece" d="m38.52 36.11h7.48c0.33 1.59 1.25 2.59 2.91 2.6 1.68 0.01 2.59-1.02 2.96-2.59h1.73c-1.74 5.14-4.71 9.38-8.93 12.82-0.24-0.25-0.46-0.49-0.69-0.73-0.59-0.6-1.18-1.19-1.78-1.78-0.3-0.3-0.25-0.48 0.16-0.58 1.13-0.3 1.9-0.98 2.21-2.12 0.41-1.52-0.48-3.08-2-3.52-1.5-0.44-3.08 0.39-3.57 1.88-0.04 0.13-0.08 0.27-0.12 0.4-0.09 0.29-0.28 0.34-0.5 0.13-0.58-0.57-1.15-1.15-1.73-1.72-0.49-0.49-0.98-0.97-1.45-1.44 1.11-1.11 2.2-2.2 3.33-3.33"></path>
                <path class="piece" d="m13.15 39.94c0.06 0.09 0.09 0.18 0.15 0.24 0.97 0.98 1.95 1.96 2.93 2.93 0.75 0.75 1.64 0.53 1.92-0.49 0.23-0.82 0.7-1.41 1.53-1.65 1.11-0.31 2.25 0.32 2.59 1.41 0.34 1.1-0.26 2.26-1.34 2.63-0.14 0.05-0.28 0.08-0.42 0.12-0.82 0.24-1.07 1.17-0.46 1.77 1.01 1.02 2.03 2.04 3.05 3.05 0.06 0.06 0.11 0.12 0.15 0.16-1.21 1.21-2.41 2.41-3.64 3.64-0.07-0.02-0.19-0.06-0.31-0.09-0.39-2.23-2.86-3.19-4.65-1.95-1.36-0.72-2.65-1.55-3.9-2.51 0.09-0.05 0.15-0.09 0.21-0.13 1.07-0.67 1.57-1.64 1.41-2.89-0.15-1.19-0.84-1.98-1.97-2.38-0.14-0.05-0.28-0.08-0.42-0.13-0.27-0.09-0.31-0.28-0.1-0.49 0.65-0.66 1.31-1.31 1.97-1.97 0.41-0.41 0.81-0.82 1.28-1.29"></path>
                <path class="piece" d="m1.45 36.11h1.57c0.32 1.59 1.24 2.53 2.89 2.62 0.75 0.04 1.42-0.25 1.98-0.75 0.56-0.5 0.82-1.15 0.98-1.87 0.07-0.01 0.12-0.01 0.16-0.02 0.05 0 0.1 0 0.11 0l3.36 3.36c-0.04 0.04-0.1 0.11-0.16 0.17-0.99 1-1.99 1.99-2.98 2.98-0.68 0.68-0.45 1.6 0.47 1.84 0.91 0.24 1.54 0.75 1.75 1.7 0.24 1.1-0.47 2.22-1.58 2.47-4-3.36-6.86-7.52-8.55-12.51"></path>
                <path class="piece" d="m13.08 38.82c-0.88-0.88-1.79-1.79-2.7-2.7h5.4c-0.89 0.89-1.8 1.8-2.7 2.7"></path>
                <path class="piece" d="m31.94 36.11h5.28c-0.86 0.86-1.76 1.76-2.64 2.64-0.84-0.84-1.73-1.73-2.64-2.64"></path>
                <path class="piece" d="m3.86 36.11h4.17c-0.1 1.03-1.06 1.86-2.12 1.84-1.05-0.02-1.99-0.84-2.05-1.84"></path>
                <path class="piece" d="m25.39 36.11h4.16c-0.02 0.92-0.98 1.79-1.99 1.82-1.11 0.03-2.08-0.78-2.16-1.82"></path>
                <path class="piece" d="m46.86 36.11h4.16c-0.12 1.07-1.09 1.86-2.21 1.82-1-0.04-1.93-0.9-1.96-1.82"></path>
                <path class="piece" d="m39.58 52.2c-1.15 0.47-2.29 0.93-3.43 1.4-0.13-0.56 0.41-1.38 1.07-1.72 0.76-0.39 1.82-0.26 2.35 0.33"></path>
                <path class="piece" d="m53.43 53.33c-0.07 0-0.12 0.01-0.18 0.01-0.04 0-0.08-0.01-0.14-0.02v-1.53l-0.06-0.01c-0.22 0.51-0.43 1.02-0.66 1.54-0.06 0-0.12 0.01-0.2 0.01-0.22-0.52-0.44-1.04-0.66-1.55-0.01 0-0.03 0-0.04 0v1.53h-0.34v-2.1h0.48c0.21 0.48 0.43 0.98 0.66 1.53 0.23-0.54 0.44-1.03 0.66-1.54h0.47z"></path>
                <path class="piece" d="m15.46 52.18c1.17-0.53 2.47 0.02 2.91 1.22-0.99-0.42-1.92-0.81-2.91-1.22"></path>
                <polygon points="50.14 51.5 50.14 53.32 49.8 53.32 49.8 51.51 49.11 51.51 49.11 51.21 50.82 51.21 50.82 51.5"></polygon>
              </svg>
            </div>
          </template>
          <template #4>
            <div class="frases" style="
              display: flex;
              flex-direction: column;
              gap: 20px;
            ">
              <blockquote style="
                border-left: var(--cor-destaque) solid 5px ;
                padding-left: 10px;
              ">Quando eu digo controlar emoções, me refiro às emoções realmente estressantes e incapacitantes. Sentir as emoções é o que torna a nossa vida rica.</blockquote>
              <blockquote style="
                border-left: var(--cor-destaque) solid 5px ;
                padding-left: 10px;
              ">A verdadeira compaixão não significa apenas sentir a dor de outra pessoa, mas estar motivado a eliminá-la.</blockquote>
              <blockquote style="
                border-left: var(--cor-destaque) solid 5px ;
                padding-left: 10px;
              ">A tarefa fundamental dos líderes é instalar bons sentimentos naqueles que lidera.</blockquote>
              <blockquote style="
                border-left: var(--cor-destaque) solid 5px ;
                padding-left: 10px;
              ">Controlar os impulsos ou lidar com a mágoa é tão importante para a prevenção da violência quanto para o controle da raiva.</blockquote>
              <blockquote style="
                border-left: var(--cor-destaque) solid 5px ;
                padding-left: 10px;
              ">A inteligência interpessoal consiste na capacidade de compreender os demais, quais são as coisas que mais os motivam, como trabalham e a melhor forma de cooperar com eles.</blockquote>
            </div>
          </template>
          <template #5>
            <img src="https://imagenes.ergoprojects.com/tienda/15/9788472453715.jpg" alt="Inteligencia emocional daniel goleman pdf - wholesalenasad" class=" nofocus" tabindex="0" aria-label="Inteligencia emocional daniel goleman pdf - wholesalenasad" role="button" >
            Inteligência Emocional (1995)
            <img src="https://th.bing.com/th/id/OIP.0B6zaciW5CinBA6DxcrdvwHaHa?pid=ImgDet&amp;rs=1" alt="Trabalhando com a Inteligência Emocional - Autor: Daniel Goleman Ph.d ..." class=" nofocus" tabindex="0" aria-label="Trabalhando com a Inteligência Emocional - Autor: Daniel Goleman Ph.d ..." role="button" data-bm="27">
Trabalhando Com a inteligência (1998)
<img src="https://folhassoltas.com.pt/wp-content/uploads/2018/10/ee-2.jpg" alt="Emoções destrutivas e como dominá-las - um diálogo cientifico com o ..." class=" nofocus" tabindex="0" aria-label="Emoções destrutivas e como dominá-las - um diálogo cientifico com o ..." role="button" data-bm="27">
Emoções Destrutivas e Como Dominá-las (2005)
<img tab-index="-1" src="https://th.bing.com/th/id/R.4034bbc79a1dd0adc9019292e99b89ff?rik=xWjiqDO29%2fR5wQ&amp;pid=ImgRaw&amp;r=0">
Inteligência Social: a Nova Ciência das Relações Humanas (2006)
<img src="https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_33afb7a9f8f42f8f9a047c824a662f9e1a12a2a8.jpg" alt="Livro: Inteligência Ecológica - Daniel Goleman | Estante Virtual" class=" nofocus" tabindex="0" aria-label="Livro: Inteligência Ecológica - Daniel Goleman | Estante Virtual" role="button" >
Inteligência Ecológica (2009)
<img src="https://tradestories.s3.eu-west-2.amazonaws.com/styles/large/s3/2023-03/IMG_4363.JPG?itok=d0Q47NyW" alt="Foco - O Motor Oculto da Excelência | Trade Stories" class=" nofocus" tabindex="0" aria-label="Foco - O Motor Oculto da Excelência | Trade Stories" role="button">
Foco: o Motor Oculto da Excelência (2014)
Liderança (2015)
Uma Força Para o Bem (2015)
          </template>
        </card-info>

        <player-audio capa="/inteligencia-emocional/audio_capa.webp" audio="/inteligencia-emocional/audio.mp3" titulo="INTELIGÊNCIA EMOCIONAL - Daniel Goleman - Resumo Completo do Livro | Audiolivro" />
      </article>

      <article>
        <h2 class="titulo">12 competências da inteligência emocional</h2>

        <CardEtapas  :etapas="[
          {
            titulo: 'Autoconsciência Emocional', 
            texto: `Ponto de partida da inteligência emocional. É a capacidade de identificar nossas próprias emoções e os seus gatilhos. Esta habilidade está totalmente relacionada com a atenção plena e prática de mindfulness.

            Tanto é que a Terapia Dialética Comportamental, recomendada para o tratamento de pessoas com Transtorno de Personalidade Limítrofe (borderline), se baseia no mindfulness. Por isso recomendo que você aprenda como funciona a atenção plena para desenvolver o autoconhecimento emocional.`
          },
          {
            titulo: 'Autocontrole Emocional', 
            texto: `É a capacidade de manter as emoções e impulsos sob controle em condições de estresse, pressão ou euforia. Uma vez que você identifica suas emoções, você se torna capaz de gerenciá-las, questionando e desativando seus gatilhos.

            Não é possível sufocar a origem das emoções, mas você pode questioná-las a fim de entender se elas realmente fazem sentido.
            
            Exemplos:
            
            “Será que vale a pena eu ficar estressado por isso?”.
            
            “Isso me dá raiva. Vou canalizar esta raiva para fazer algo produtivo”.`
          } ,
          {
            titulo: 'Orientação para Realização', 
            texto: `É quando você se desafia para se desenvolver em suas atividades a cada dia superando seus padrões rumo ao aprimoramento e excelência. Também assume metas desafiadoras e riscos calculados. É o contrário de estar estagnado.`
          } ,
          {
            titulo: 'Otimismo', 
            texto: `É capacidade de ver o lado positivo das situações persistindo na busca de seus objetivos apesar dos obstáculos. Emoções são contagiosas. Ninguém gosta de ficar ao lado de pessoas negativas. Por isso o otimismo é fundamental para os relacionamentos interpessoais.`
          } ,
          {
            titulo: 'Adaptabilidade', 
            texto: `É a capacidade de agir com flexibilidade às mudanças, recebendo de forma aberta novas abordagens, ideias ou situações. Mudanças são socos na cara da nossa zona de conforto.

            Elas ativam diretamente o nosso Sistema Nervoso Simpático, que nos direciona a reagir de forma reativa. Só que o mundo e o nosso trabalho está em constante transformação. É melhor abrir o coração para recebê-las.`
          } ,
          {
            titulo: 'Empatia', 
            texto: `É a capacidade de se colocar no lugar do outro, identificar os seus interesses e preocupações a fim de extrair pistas sobre o que ele pode estar sentindo e pensando. Por exemplo: o garçom trouxe um suco errado para você no restaurante?

            Tente entender qual situação levou ao erro. Será que ele está sobrecarregado? A filha dele está doente? O erro foi da cozinha? A empatia é uma das habilidades mais poderosas em relacionamentos interpessoais.`
          } ,
          {
            titulo: 'Consciência Organizacional', 
            texto: `É a capacidade de compreender e assimilar as correntes de um grupo de relacionamentos, identificação os influenciadores, suas redes e dinâmicas.

            Está diretamente ligada com a cultura e valores de uma empresa ou comunidade. Por exemplo: empresas de cultura estratificadas e tradicionais versus empresas de cultura inovadora e dinâmica.
            
            Por isso que a identificação com os valores organizacionais se tornou critério para a seleção de candidatos. Sem match, o candidato não fica. E contratar e demitir gera custos. É esta dor que sites como LoveMondays e o 99Jobs procuram resolver.
            `
          } ,
          {
            titulo: 'Influência', 
            texto: `É a capacidade de gerar impacto positivo sobre os outros, de persuadir e convencer para obter apoio para suas iniciativas.Influência está diretamente ligada com capacidade de liderança.

            E isso não deve ser feito de forma eficaz, maquiavélica ou narcisista, mas com compaixão. Para saber mais sobre influência, recomendo o livro “Como fazer amigos e influenciar pessoas”.
            `
          } ,
          {
            titulo: 'Treinamento e Mentoria', 
            texto: `É a capacidade de compartilhar conhecimento, promover a aprendizagem ou o desenvolvimento de longo prazo de outras pessoas oferecendo feedbacks, suporte e orientações.

            Dar treinamentos e mentorias são atividades que ativam nosso círculo de emoções positivas. Ou seja, você ensina mas também se alimenta de boas emoções. E isso custa pouco ou nada e o retorno é gigantesco.
            `
          } ,
          {
            titulo: 'Gestão de Conflitos', 
            texto: `Habilidade de ajudar outros pessoas a superar situações emocionais tensas ou estressantes. Para isso, usa-se sensibilidade e bom senso para encontrar soluções a partir de conciliações, concessões e acordos para os desentendimentos.
            `
          } ,
          {
            titulo: 'Liderança Inspiradora', 
            texto: `É a capacidade de inspirar e contagiar grupos a partir de emoções positivas para extrair o melhor dos outros rumo aos melhores resultados. A liderança inspiradora se espalha entre as pessoas transmitindo confiança, senso de propósito e unidade.

            Desta forma, a equipe se torna mais criativa, espontânea, assume riscos calculados e os resultados aparecem.
            `
          } ,
          {
            titulo: 'Trabalho em Equipe', 
            texto: `É capacidade de participar ativamente para o desenvolvimento da equipe e alcance de metas individuais e coletivas. Assim, compartilha-se responsabilidades e recompensas em relação às metas atingidas.

            A soma e o desenvolvimento destas 12 habilidades pode levar para o sucesso em qualquer área da sua vida. Seja no trabalho, em círculos sociais, na prática de esportes, em sua família etc.
            
            Mais do que isso, estas habilidades irão te colocar em um ciclo de emoções positivas, que irá gerar uma espiral ascendente de desenvolvimento, satisfação e até paz interior.
            `
          } ,
          ]"/>
      </article>

      <article>
        <h2 class="titulo">Benefícios da inteligência emocional na escola</h2>
        <paragrafos texto="
        Muitas habilidades são adquiridas pelos alunos quando a inteligência emocional é desenvolvida no ambiente escolar. Eles conseguem aplicar seus aprendizados em outros ambientes e tendem a alcançar seus objetivos de forma mais eficiente.
        
        Vale ressaltar que quanto mais puderem experimentar situações diversas e aplicar os pilares da inteligência emocional, eles estarão mais aptos para interagir no mundo, que cada vez mais demanda o uso da empatia, o trabalho em equipe, o respeito à diversidade etc.
        
        A seguir citamos alguns benefícios do trabalho com a inteligência emocional na escola com os alunos:" />

        
        <BeneficiosEscola />
      </article>

      <article>
        <h2 class="titulo">benefícios da inteligência emocional no mercado de trabalho</h2>
        <Paragrafos texto="No trabalho, a inteligência emocional é de extrema relevância justamente pelo fato de trabalharmos com pessoas e enfrentarmos, com frequência, momentos de tensão. Afinal, é preciso fazer um trabalho de qualidade, não errar, cumprir prazos e receber feedbacks.
        
          Assim, tanto o relacionamento pessoal como os momentos de estresse precisam ser manejados da melhor forma para que você possa trabalhar em um ambiente saudável. E é aí que entra a inteligência emocional.
        
          Com essa habilidade, você consegue ter um controle sobre suas emoções, evitando, por exemplo, falar o que não deve quando provocado por um colega. Imagine dar uma resposta grosseira no calor da situação e depois ter que enfrentar um clima ruim com essa pessoa que você encontra diariamente no escritório? Ou pior: imagine perder o emprego devido a esse comportamento.

          Então, nesse exemplo, dá para perceber que, se o profissional agisse com inteligência emocional, saberia que aquele tipo de situação o deixaria desconfortável, conseguindo se preparar melhor na ocasião. Poderia dar uma resposta com calma e sem perder o respeito pelo colega.
        
          Nesse sentido, para ter essa soft skill, é importante se autoconhecer, analisando sua postura em diferentes cenários. Desse modo, você sabe quais são suas reações em diferentes contextos, podendo controlar esses impulsos, a fim de não prejudicar sua imagem profissional."/>
      </article>

      <article>
        <h2 class="titulo">Principais características de quem tem baixa inteligência emocional</h2>
        <div class="textos">
          <p>quem não tem essa inteligência costuma apresentar reações negativas em algumas circunstâncias. Confira, a seguir, algumas atitudes típicas de quem não apresenta essa importante capacidade:</p>
        </div>

        <ol>
          <li>
            <details-summary titulo="Não reconhece as próprias fraquezas" texto="
            Um dos principais hábitos das pessoas mais vulneráveis emocionalmente é exibir um alto nível de autoconfiança. O problema é que, na maioria das vezes, essa segurança não é proporcional à competência do vaidoso.
            
            Quem age como vencedor o tempo todo tem uma percepção frágil de si mesmo e de sua relação com o ambiente, pois desconhece a impressão que causa nas outras pessoas.
            
            Além disso, não sabe identificar a hora de falar e a de ficar quieto. Isso acontece porque, apesar de sua evidente firmeza, falta autoconhecimento para o indivíduo reconhecer suas fraquezas. E, não adianta: por mais competente que uma pessoa seja, também apresentará momentos de instabilidade.
            "/>
          </li>
          <li>
            <details-summary titulo="Não enxerga a outra pessoa" texto="
            Pessoas pouco inteligentes do ponto de vista emocional costumam apresentar dificuldades para enxergar o outro. Seja por seu egocentrismo, seja por falta de sensibilidade, elas não apresentam empatia para manter relacionamentos estáveis nas mais variadas áreas de suas vidas — principalmente no ambiente profissional.
            
            Quem permanece muito tempo concentrado em si mesmo perde a oportunidade de aprender com as outras pessoas. Por isso, desenvolver a inteligência emocional é uma maneira eficiente de nos conectarmos com o outro e reconhecermos que eles podem contribuir (e muito) para o nosso crescimento.
            "/>
          </li>
          <li>
            <details-summary titulo="Apresenta comportamento inconstante" texto="
            Ter controle sobre as próprias emoções é uma habilidade essencial no local de trabalho — especialmente devido ao atual cenário, cada vez mais estressante e dinâmico.
           
            O profissional equilibrado emocionalmente é capaz de inspirar confiança e trazer paz ao ambiente corporativo, pois consegue manter a calma mesmo diante de situações adversas. Ou seja, é alguém que os colegas gostam de ter por perto.
           
            Já o colaborador que apresenta mudanças de humor constantes acaba influenciando de maneira negativa as pessoas ao seu redor, pois o seu comportamento desestabiliza toda a equipe. E esse é outro hábito comum de quem não tem desenvolvida a sua inteligência emocional.
            "/>
          </li>
          <li>
            <details-summary titulo="Culpa os outros por suas dificuldades" texto="
            Outra atitude típica de quem não é emocionalmente inteligente é transferir aos outros a responsabilidade de algo que não dá certo. Afinal, em sua concepção, um erro é algo terrível demais para ser exposto.
           
            Em vez de analisar a situação, identificar a falha e aprender com o erro, o indivíduo prefere escolher alguém para levar a culpa. Assim, não precisa expor suas fraquezas ou assumir o próprio fracasso.
           
            Por outro lado, para quem tem um desenvolvimento emocional maior, deslizes são encarados de maneira natural — algo que, se bem compreendido, pode se transformar em um importante estímulo para um crescimento ainda mais evidente.
            "/>
          </li>
          <li>
            <details-summary titulo="Queixa-se do próprio trabalho" texto="
            É inegável que a maioria das pessoas passa boa parte de suas vidas no trabalho. E, embora esse não seja o único aspecto de suas existências, é um dos que mais demandam tempo, esforço e dedicação. Por isso, encará-lo como um fardo é uma conduta extremamente prejudicial.
           
            Qualquer atividade, por mais complexa ou humilde que seja, traz resultados a quem a exerce. No entanto, se chegarmos à conclusão de que nosso trabalho atual é insuportável, devemos deixá-lo o mais breve possível. Caso contrário, podemos até desenvolver algum problema de saúde.
            "/>
          </li>
          <li>
            <details-summary titulo="Não sabe o que quer da vida" texto="
            Uma característica de quem tem pouca inteligência emocional é não saber o que quer. No geral, esses indivíduos não sabem tomar decisões e costumam ser reféns da opinião alheia — não apresentam iniciativa própria, apenas seguem a direção da maioria.
           
            A falta de conhecimento inerente a esses casos impossibilita que essas pessoas desenvolvam metas, objetivos e uma visão de futuro. Assim, ficam a mercê das circunstâncias e das eventualidades da vida.
            "/>
          </li>
          <li>
            <details-summary titulo="Leva tudo para o lado pessoal" texto="
            Todos nós temos o direito de nos sentirmos ofendidos quando alguém diz algo que não nos agrada. No entanto, ver ofensa em tudo é algo negativo, que pode gerar diversos conflitos desnecessários. Sem falar que, muitas vezes, a pessoa nem teve a intenção de nos ofender, não é?
           
            Levar tudo para o lado pessoal provoca sentimentos de culpa, insegurança, raiva e ansiedade — ou seja, só produz reações prejudiciais. Por essa razão, quem é inteligente emocionalmente sabe que grande parte das ações ríspidas das outras pessoas não é proposital. Pelo menos, não de maneira direta.
            "/>
          </li>
        </ol>
      </article>
      <multi-player :videos="[
        {
          indice: 1,
          capa: '/videos/capa/desenvolver-inteli-emoci.png',
          video: '/videos/inteli-emoci-desenvolver.mp4',
          titulo: 'INTELIGÊNCIA EMOCIONAL: O que é, Benefícios e Como Desenvolver | Daniel Goleman'
        },
        {
          indice: 2,
          capa: '/videos/capa/passos-inteli-emoci.png',
          video: '/videos/inteli-emoci-passos.mp4',
          titulo: '6 PASSOS PARA A INTELIGÊNCIA EMOCIONAL - Wendell Carvalho'
        },
        {
          indice: 3,
          capa: '/videos/capa/dominios-inteli-emoci.png',
          video: '/videos/inteligencia-emocional.mp4',
          titulo: 'INTELIGÊNCIA EMOCIONAL: O que é, Benefícios e Como Desenvolver | Daniel Goleman'
        }
        ]" />
    </main>
  </div>
</template>

<script lang="ts">
import MultiPlayer from '@/components/MultiPlayer.vue';
import Pilar from '@/components/Pilar.vue';
import CardInfo from '@/components/CardInfo.vue';
import ImagemTexto from '@/components/ImagemTexto.vue';
import Paragrafos from '@/components/Paragrafos.vue';
import DetailsSummary from '@/components/DetailsSummary.vue';
import PlayerAudio from '@/components/PlayerAudio.vue';
import BeneficiosEscola from '@/components/BeneficiosEscola.vue';
import CardEtapas from '@/components/cardEtapas.vue';

export default {
  beforeMount() {
     document.title = "inteligência emocional"
  },
  methods: {
    apresentarBeneficio(indice: number) {

    }
  },
  components: { Pilar, MultiPlayer, CardInfo, ImagemTexto, Paragrafos, DetailsSummary, PlayerAudio, BeneficiosEscola, CardEtapas }
}
</script>

<style lang="scss" scoped>

ol {
  padding-inline: 10% 5%;

  li {
    margin-block: 20px;
    &::marker {
      color: $cor-destaque;
      font-size: 1.5rem;
    }
  }
}

header {
  background-color: var(--color-background-mute);
  border-block: solid 4px $cor-destaque;
}
.pilares {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  
}
</style>