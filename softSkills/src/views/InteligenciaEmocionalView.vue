<template>
  <div>
    <header>
      <h1 class="titulo">Inteligência emocional</h1>
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
        <Paragrafos texto="Augusto Cury e Daniel Goleman são dois autores conhecidos por seu trabalho no campo da inteligência emocional. Ambos os autores têm contribuído significativamente para a compreensão e promoção da inteligência emocional. Suas obras têm influenciado profissionais e indivíduos em todo o mundo, oferecendo insights e orientações sobre como desenvolver habilidades emocionais para melhorar o bem-estar e o desempenho nas diferentes áreas da vida."/>
        <h3 class="titulo">Augusto Cury</h3>
        <card-info :etapas="[
          {
            indice: 1,
            titulo: 'Quem é'
          },
          {
            indice: 2,
            titulo: 'frases'
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
            <div class="frases" style="
              display: flex;
              flex-direction: column;
              gap: 20px;
            ">  
              <Citacao  texto="As grandes ideias surgem da observação dos pequenos detalhes."/>
              <Citacao  texto="Nunca alguém tão grande se fez tão pequeno para tornar grandes os pequenos."/>
              <Citacao  texto="Educar é semear com sabedoria e colher com paciência."/>
              <Citacao  texto="Viver sem problemas é impossível. O sofrimento nos constrói ou nos destrói."/>
            </div>
          </template>
          <template #3>
            <Obras :obras="[
              {
                imagem: 'https://cdn.awsli.com.br/800x800/765/765972/produto/36826958/ee9377579b.jpg',
                descricao: 'Revolucione Sua Qualidade de Vida - obra de Augusto Cury',
                titulo: 'Revolucione Sua Qualidade de Vida (2002)'
              },
              {
                imagem: 'https://img.bertrand.pt/images/dez-leis-para-ser-feliz-augusto-cury/NDV8MTA5Mzg1OTd8NjUwODUxMHwxMzgzNTIzMjAwMDAw/500x',
                descricao: 'Dez Leis para Ser Feliz - obra de Augusto Cury',
                titulo: 'Dez Leis para Ser Feliz (2003)'
              },
              {
                imagem: 'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_4ef6cce19599346d71ffc743010aca33d3f36bce.jpg',
                descricao: 'Nunca Desista de Seus Sonhos - obra de Augusto Cury',
                titulo: 'Nunca Desista de Seus Sonhos (2004)'
              },
              {
                imagem: 'https://th.bing.com/th/id/R.a546693d36b344da2b0cf75f94a92918?rik=bQjqyRBaR7TZpw&riu=http%3a%2f%2fd2r9epyceweg5n.cloudfront.net%2fstores%2f001%2f482%2f543%2fproducts%2fwhatsapp-image-2021-03-04-at-15-40-25-231-0be3ef7e0b5a5277d616148968783721-640-0.jpeg&ehk=pyt7koagYUjn9poisg4lW5dcTh3j%2f5ncyfzEud1QE4E%3d&risl=&pid=ImgRaw&r=0',
                descricao: 'Coleção “Análise da Inteligência de Cristo” - obra de Augusto Cury',
                titulo: 'Coleção “Análise da Inteligência de Cristo” (2006)'
              },
              {
                imagem: 'https://th.bing.com/th/id/R.3354b111beae9320dc7468b3e836ebfe?rik=cnpwO3eJ7XAOAg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-hllXYidy8JQ%2fU3E1-0CEviI%2fAAAAAAAAACY%2ftJ7OaKBNd2U%2fs1600%2fOS%2bSEGREDOS%2bDO%2bPAI%2bNOSSO%2b-%2bAUGUSTO%2bCOURY.jpg&ehk=9Lhr0P4cvgw9ppjeEkdcvBwWgwB2tc8Phf9W91EJda8%3d&risl=&pid=ImgRaw&r=0',
                descricao: 'Os Segredos do Pai-Nosso - obra de Augusto Cury',
                titulo: 'Os Segredos do Pai-Nosso (2007)'
              },
              {
                imagem: 'https://th.bing.com/th/id/R.a6f1e00778072a276463f6e69afce163?rik=KQ6OrpPzHwDgqA&riu=http%3a%2f%2fvesterbook.loja2.com.br%2fimg%2f8e34d3ebce985b8e89c4a343499cf722.jpg&ehk=0h4c1bLqHGZUysMpzSAKXOEVCSNbVtbcCoHGWFgfH%2bI%3d&risl=&pid=ImgRaw&r=0',
                descricao: 'De Gênio e Louco Todo Mundo Tem um Pouco - obra de Augusto Cury',
                titulo: 'De Gênio e Louco Todo Mundo Tem um Pouco (2009)'
              },
              ]"/>

          </template>
        </card-info>
        <h3 class="titulo">Daniel Goleman</h3>
        <card-info :etapas="[
          {
            indice: 1,
            titulo: 'Quem é'
          },
          {
            indice: 2,
            titulo: 'frases'
          },
          {
            indice: 3,
            titulo: 'obras'
          },
          {
            indice: 4,
            titulo: 'áudio' 
          }
        ]">
          <template #1>
            <Paragrafos texto="Daniel Goleman é um psicólogo, escritor e jornalista norte-americano, é o autor do Best-seller Inteligência Emocional.
            
            Daniel Goleman nasceu em Stockton, Califórnia, Estados Unidos, no dia 7 de março de 1946. Foi aluno do Amherst College e na Universidade da Califórnia, em Berkeley. Recebeu o PhD na Universidade de Harvard onde também lecionou.

            Durante 12 anos, Daniel Goleman foi jornalista do New York Times, onde cobria a seção de Ciências do comportamento e do cérebro. Foi editor da Psychology Today. Realiza palestras para grupos profissionais.
            Inteligência emocional
            
            Em 1995, tornou-se uma celebridade do mercado editorial com a publicação do livro Inteligência Emocional, que vendeu 5 milhões de cópias, em quarenta idiomas e se tornou um best-seller em vários países.
            "/>
          </template>
                   
          <template #2>
            <div class="frases" style="
              display: flex;
              flex-direction: column;
              gap: 20px;
            ">  
              <Citacao  texto="Quando eu digo controlar emoções, me refiro às emoções realmente estressantes e incapacitantes. Sentir as emoções é o que torna a nossa vida rica."/>
              <Citacao  texto="A verdadeira compaixão não significa apenas sentir a dor de outra pessoa, mas estar motivado a eliminá-la."/>
              <Citacao  texto="A tarefa fundamental dos líderes é instalar bons sentimentos naqueles que lidera."/>
              <Citacao  texto="Controlar os impulsos ou lidar com a mágoa é tão importante para a prevenção da violência quanto para o controle da raiva."/>
              <Citacao  texto="A inteligência interpessoal consiste na capacidade de compreender os demais, quais são as coisas que mais os motivam, como trabalham e a melhor forma de cooperar com eles."/>
            </div>
          </template>
          <template #3>
            <Obras :obras="[
              {
                imagem: 'https://imagenes.ergoprojects.com/tienda/15/9788472453715.jpg',
                descricao: 'inteligência emocional - obra de Daniel Goleman',
                titulo: 'Inteligência Emocional (1995)'
              },
              {
                imagem: 'https://th.bing.com/th/id/OIP.0B6zaciW5CinBA6DxcrdvwHaHa?pid=ImgDet&amp;rs=1',
                descricao: 'Trabalhando Co a inteligência - obra de Daniel Goleman',
                titulo: 'Trabalhando Co a inteligência (1998)'
              },
              {
                imagem: 'https://folhassoltas.com.pt/wp-content/uploads/2018/10/ee-2.jpg',
                descricao: 'Emoções Destrutivas e Como Dominá-las - obra de Daniel Goleman',
                titulo: 'Emoções Destrutivas e Como Dominá-las (2005)'
              },
              {
                imagem: 'https://th.bing.com/th/id/R.4034bbc79a1dd0adc9019292e99b89ff?rik=xWjiqDO29%2fR5wQ&amp;pid=ImgRaw&amp;r=0',
                descricao: 'Inteligência Social: a Nova Ciência das Relações Humanas - obra de Daniel Goleman',
                titulo: 'Inteligência Social: a Nova Ciência das Relações Humanas (2006)'
              },
              {
                imagem: 'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_33afb7a9f8f42f8f9a047c824a662f9e1a12a2a8.jpg',
                descricao: 'Inteligência Ecológica (2009) - obra de Daniel Goleman',
                titulo: 'Inteligência Ecológica (2009)'
              },
              {
                imagem: 'https://tradestories.s3.eu-west-2.amazonaws.com/styles/large/s3/2023-03/IMG_4363.JPG?itok=d0Q47NyW',
                descricao: 'Foco: o Motor Oculto da Excelência - obra de Daniel Goleman',
                titulo: 'Foco: o Motor Oculto da Excelência (2014)'
              },
              {
                imagem: 'https://www.extra-imagens.com.br/livros/AdministracaoNegocios/LiderancaGestaodeEquipes/4159672/97491950/Livro-Lideranca-Daniel-Goleman-4159672.jpg',
                descricao: 'Liderança - obra de Daniel Goleman',
                titulo: 'Liderança (2015)'
              },
              {
                imagem: 'https://th.bing.com/th/id/OIP.vybIm413jHc5CuVzpzsIEgAAAA?pid=ImgDet&amp;rs=1',
                descricao: 'Uma Força Para o Bem - obra de Daniel Goleman',
                titulo: 'Uma Força Para o Bem (2015)'
              },
            ]"/>
          </template>
          <template #4>
            <player-audio capa="/inteligencia-emocional/audio_capa.webp" audio="/inteligencia-emocional/audio.mp3" titulo="INTELIGÊNCIA EMOCIONAL - Daniel Goleman - Resumo Completo do Livro | Audiolivro" />
          </template>
        </card-info>
    
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
          ]"
                    
          />
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
      <h2 class="titulo">Vídeos</h2>
      <paragrafos texto="preparamos alguns vídeos relacionados ao assunto de inteligência emocional para que você pudesse ver"/>
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
    <quiz 
    texto-inicio="preparamos um pequeno quiz relacionado a inteligência emocional, ele é totalmente baseado nos tópicos abordados anteriormente. se quiser, releia e se prepare para responder, quando estiver pronto, clique em começar"
    nome="inteligência emocional" 
    :questoes="[
      {
        index: 1, 
        pergunta: 'quais os pilares da inteligência emocional?',
        resposta: 'c',
        alternativas: [
          {
            indice: 'a',
            texto: 'Orientação Para Realização, Adaptabilidade, automotivação e empatia',
          },
          {
            indice: 'b',
            texto: 'Habilidades sociais, Consciência Organizacional, Treinamento E Mentoria'
          },
          {
            indice: 'c',
            texto: 'autoconsciência, autorregulação, automotivação, empatia e Habilidades sociais'
          },
          {
            indice: 'd',
            texto: 'apenas autorregulação'
          },
        ]
      },
      {
        index: 2, 
        pergunta: 'quantas competências da inteligência emocional existem?',
        resposta: 'b',
        alternativas: [
          {
            indice: 'a',
            texto: 'nenhuma',
          },
          {
            indice: 'b',
            texto: '12'
          },
          {
            indice: 'c',
            texto: '15'
          },
          {
            indice: 'd',
            texto: '8'
          },
          
        ]
      },
      {
        index: 3, 
        pergunta: 'qual dessas alternativas não é uma característica de quem não tem inteligência emocional?',
        resposta: 'a',
        alternativas: [
          {
            indice: 'a',
            texto: 'possui empatia',
          },
          {
            indice: 'b',
            texto: 'Não Reconhece As Próprias Fraquezas'
          },
          {
            indice: 'c',
            texto: 'Não Sabe O Que Quer Da Vida'
          },
          {
            indice: 'd',
            texto: 'tem Comportamento Inconstante'
          },
        ]
      },
      {
        index: 4, 
        pergunta: 'quem publicou o livro inteligência emocional?',
        resposta: 'd',
        alternativas: [
          {
            indice: 'a',
            texto: 'Augusto Cury',
          },
          {
            indice: 'b',
            texto: 'ninguém, porque esse livro não existe '
          },
          {
            indice: 'c',
            texto: 'Peter Salovey'
          },
          {
            indice: 'd',
            texto: 'Daniel Goleman'
          },
        ]
      },
  ]"/>
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
import Obras from '@/components/Obras.vue';
import Citacao from '@/components/Citacao.vue';
import Quiz from '@/components/Quiz.vue';
export default {
  beforeMount() {
     document.title = "inteligência emocional"
  },
  methods: {
    apresentarBeneficio(indice: number) {

    }
  },
  components: { Pilar, MultiPlayer, CardInfo, ImagemTexto, Paragrafos, DetailsSummary, PlayerAudio, BeneficiosEscola, CardEtapas, Obras, Citacao, Quiz }
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
  border-bottom: solid 4px $cor-destaque;
}
.pilares {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  
}
</style>