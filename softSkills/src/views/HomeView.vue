<template>
  <div>
    <h1>home</h1>
    <header>
      <h2 class="titulo">Noticias</h2>
      <div>
        <noticia img="/public/logo.png" titulo="Lorem ipsum dolor sit amet consectetur." :posicao="1" url="/soft-skills/" fonteLogo="/public/fieb.png" :noticia-atual="1" fonteUrl="/inteligencia-emocional/" cor="#282828"  />
      </div>
      <button style="height: 20px; width: 20px" @click="mudarNoticia('esquerda')"><icon-seta-esquerda style="height: 20px; width: 20px" fill="#00bd7e" /></button>
      <button style="height: 20px; width: 20px" @click="mudarNoticia('direita')"><icon-seta-direita style="height: 20px; width: 20px" fill="#00bd7e" /> </button>
    </header>

    <h2 class="titulo">Integrantes</h2>

    <div class="integrantes-info">
      <integrante nome="João Lucas Silva Lopes" foto="logo.png" :idade="17" :skills="['criatividade', 'proatividade']"  />
      <integrante nome="Jhordan Samuel Jesus dos Santos" foto="jhordan.png" :idade="16" :skills="['lidar com pressão']" />
      <integrante nome="Danilo Medeiros de Oliveira" foto="danilo.png" :idade="17" :skills="['comunicação', 'trabalho em equipe', 'proatividade']" />
    </div>
    
    <div class="textos">
      <p><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit</strong>. Eius non ea aspernatur eum tempore, accusantium mollitia animi quaerat ipsam quam dolorum reiciendis cumque earum vero exercitationem! Ad obcaecati quibusdam repellat provident accusantium explicabo! Cumque rem distinctio nostrum corporis quo voluptas fuga eos quidem. Laudantium saepe ipsum dolores temporibus dignissimos atque possimus nemo, beatae animi voluptates id quisquam officia exercitationem commodi nostrum iste in esse est. Harum dolores rem et possimus velit, magnam corporis quo autem beatae delectus ratione ad. Aspernatur magni quisquam, quas id ea doloribus optio cupiditate minima at ducimus laborum voluptate animi nulla. Accusantium laboriosam odit adipisci asperiores!</p>
    <p>Voluptatum a, excepturi vero numquam dicta at recusandae quasi reprehenderit exercitationem commodi. Voluptate nemo quas modi sit? Quidem id illo, nemo minima nihil consequatur quod aspernatur tenetur iste assumenda, dicta libero perspiciatis neque ratione ipsum quibusdam quia facilis laboriosam quis! Cumque, natus officia incidunt facilis veniam architecto inventore similique. Recusandae quasi natus fugiat earum quidem cumque, distinctio nam incidunt? Inventore eligendi qui nemo ducimus voluptate quis temporibus tempore velit ut unde ex recusandae debitis saepe dolores quasi maxime, aspernatur sit eum fuga culpa suscipit. Accusamus consectetur rem eius placeat quo voluptatem sint assumenda, adipisci aliquid soluta rerum eveniet dolore consequatur.</p>
    <p>Cumque laborum, aperiam, molestiae veritatis odio neque quam expedita provident impedit dolor ipsa! Culpa aspernatur modi molestias eos architecto iusto accusantium incidunt possimus earum doloremque nemo sunt quidem corporis enim, eaque quis! Quis totam quo veniam necessitatibus omnis deleniti in facilis, similique tempore officia quas exercitationem itaque nisi a sequi repellat qui illo deserunt! Voluptatum neque, amet ducimus rerum ea aliquam fugit cupiditate quas dolor architecto quisquam reprehenderit iusto minus beatae nihil veniam harum excepturi numquam enim dignissimos accusantium, a et eius. Cum aperiam quia sed officiis nam nobis, incidunt vitae qui, facilis exercitationem, repellat perferendis ipsam voluptatibus enim dolores.</p>
    <p>Et quasi saepe quisquam facere tempora impedit, cupiditate cumque in, eum molestias sint voluptate amet quam quidem, vel aspernatur? Minus quis ducimus, culpa error quaerat id consequuntur totam repellendus atque odit ex explicabo sed ipsa, iste possimus voluptatum tempore? Ratione inventore accusamus ipsam modi aliquam quos natus dolores sed nemo dolore quod commodi ad, beatae veniam veritatis provident quidem! Architecto eveniet delectus esse accusamus illo inventore minus, consequatur eos cupiditate ullam quisquam dicta? Nam, enim voluptatem. Placeat nemo accusamus fugit quam porro commodi possimus, totam deleniti rem id dignissimos perferendis sunt adipisci non quaerat ad magni tempore veritatis ullam dolore.</p>
    <p>Temporibus eos atque optio molestias nobis at nihil iusto officia tempore nam, asperiores eius sed mollitia nemo provident eligendi magni dolorum dolorem debitis, esse eum! Quod id aliquid officiis consequatur ut fugiat inventore alias nam amet, corporis perspiciatis nesciunt porro saepe consequuntur sed ea cupiditate. Iusto, modi dolore unde deserunt nihil facilis sapiente aliquid alias laudantium maiores? Doloribus, eum unde at autem magni repellendus voluptate sunt exercitationem, aliquam quisquam mollitia incidunt odio rem, explicabo fuga distinctio quasi totam architecto perspiciatis ullam impedit modi. Minus quasi laborum, excepturi animi ducimus harum molestias id aliquid obcaecati, tenetur molestiae. Consequuntur perferendis sit vero?</p>
    <p>Doloribus itaque provident rerum nobis illo totam ipsum ducimus dolorum architecto commodi fugiat earum illum culpa, magni velit eveniet expedita alias voluptatibus beatae. Ad voluptatem est eius fugit iure obcaecati rerum at consequatur quae, ut ullam inventore porro. Rem repellat magnam dolorum numquam est debitis exercitationem error culpa beatae dolor eos molestiae excepturi, dolores magni? Debitis, tempore perferendis totam nisi dolore, unde facilis ab doloremque deleniti in ipsum minima suscipit nulla pariatur eos, vitae eaque! Labore reiciendis minima magnam vitae aliquam quis necessitatibus aut ducimus consequatur eos molestiae, rem ea, ut quas voluptatem est, sequi mollitia beatae nobis ullam minus.</p>
    <p>Fugit asperiores nam optio unde maxime laboriosam, tempore eveniet aspernatur ratione neque explicabo perspiciatis ullam pariatur laborum excepturi sed vero repellat? Veniam numquam dolore qui optio, alias consequuntur inventore labore incidunt aperiam praesentium, ipsa aspernatur impedit quidem excepturi officia perspiciatis necessitatibus quos ratione sunt delectus, provident ut obcaecati quod! Aperiam quam, officia culpa adipisci, aut et perferendis ut amet, tempora ipsum officiis temporibus? Adipisci possimus neque provident iure illo et velit? Maxime asperiores vel id omnis, illum repellendus quos aliquid nemo quibusdam corporis unde error a officiis ratione saepe debitis autem. Dolor enim mollitia ea eos veritatis magnam tenetur nam.</p>
    <p>Est, iure molestias maxime eum inventore fuga fugit impedit natus explicabo, reprehenderit architecto hic autem dolorem non obcaecati eveniet esse ea! Id facilis vero quasi. Natus eius consectetur vero rem exercitationem magnam perferendis rerum consequatur possimus! Dolorem dolore, quos architecto sapiente modi tempore repudiandae ipsum ratione odit aliquam dolores exercitationem est? Atque perspiciatis, cupiditate nesciunt quibusdam itaque inventore, culpa quo vitae quos aliquid praesentium iure labore, eligendi rerum deleniti repudiandae sint facilis. Alias quae facere in, fugit quidem quas explicabo ipsam, facilis iusto accusamus vero sapiente distinctio quaerat, ab vitae repudiandae dignissimos. Iusto quibusdam iure delectus fugit provident mollitia a.</p>
    <p>Iusto nesciunt qui quisquam facilis! Voluptate sint doloremque dolore in, quod dolor? Necessitatibus praesentium, pariatur deserunt cumque dignissimos ad nihil quis error voluptates incidunt soluta at velit animi asperiores eum totam harum voluptatum ab vero voluptatibus enim unde. Molestias mollitia tenetur beatae pariatur optio repellat dolores? Provident qui, nam libero consequuntur officiis voluptas corrupti! Molestias modi assumenda eaque, quia qui ut, reiciendis nemo debitis, expedita cupiditate nulla incidunt? Sequi, provident ullam blanditiis amet aliquam quisquam placeat doloribus exercitationem ea veritatis, voluptatibus sunt laudantium error voluptate? Earum atque impedit exercitationem tempore laboriosam autem voluptatum necessitatibus culpa. Aliquid eligendi quisquam sapiente quod.</p>
    <p>Tenetur, deleniti distinctio sapiente, alias ratione cum facere maiores soluta tempore ullam reprehenderit accusamus facilis excepturi. Totam quos facilis id tenetur dolorem hic, deleniti facere molestiae blanditiis aliquam quaerat accusantium amet dolore perspiciatis? Officia voluptatem nisi aliquam consequatur veritatis iste nemo, voluptatum hic reprehenderit earum, porro et quos officiis totam deserunt tempora! Fugiat ab incidunt ullam debitis, nobis ducimus perferendis quisquam? Reiciendis recusandae omnis iste qui in ut ea eligendi saepe obcaecati rerum provident illum eum eveniet molestias quasi quisquam, odio vero consectetur debitis molestiae voluptatum! Provident est fugiat tempore molestias, praesentium dicta architecto mollitia eum, veritatis sint aspernatur at. </p>
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
  methods: {
    mudarNoticia(direcao:string): void {
      console.log(direcao);
      
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
</style>