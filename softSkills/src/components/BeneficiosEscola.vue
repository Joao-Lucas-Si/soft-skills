<script lang="ts">

interface data {
    beneficios: string[],
    beneficiosApresentados: number[]
}
export default {
    data(): data {
        return {
            beneficios: [
                "1 - amplia a atenção e a concentração;",
                "2 - auxilia na superação de desafios;",
                "3 - fornece maior capacidade de controlar impulsos;",
                "4 - inspira e motiva pessoas;",
                "5 - desenvolve a empatia;",
                "6 - diminui índices de violência;",
                "7 - encoraja o convívio com as diferenças;",
                "8 - estabelece vínculos afetivos baseados no respeito e na compreensão;",
                "9 - estimula escolhas responsáveis e saudáveis;",
                "10 - facilita a comunicação e a expressão;",
                "11 - utiliza as emoções em seu favor;",
                "12 - identifica as emoções dos outros;",
                "13 - melhora o desempenho acadêmico;",
                "14 - desenvolve de outras habilidades cognitivas;",
                "15 - previne o bullying;",
                "16 - promove o trabalho em equipe;",
                "17 - reduz a ansiedade e a depressão;",
                "18 - amplia o autoconhecimento."
            ],
            beneficiosApresentados: []
        }
    },
    methods: {
        apresentarBeneficio(indice: number): void {
            (this.beneficiosApresentados.includes(indice)) ?  this.beneficiosApresentados.splice(this.beneficiosApresentados.indexOf(indice), 1) : this.beneficiosApresentados.push(indice) 
            console.log(indice)
        }
    }
}
</script>

<template>
<div class="beneficio-escola">
    <h4 class="titulo">clique em qualquer uma das cadeiras a seguir para listar um benefício nesta losa </h4>
    <div class="losa">
        <p v-for="beneficio in 18" :class="`beneficio ${( beneficiosApresentados.includes(beneficio)) ? 'visivel': ''}`">{{ beneficios[beneficio  - 1] }}</p>
      </div>
      <div class="cadeiras">
        <div :class="`cadeira ${( beneficiosApresentados.includes(beneficio)) ? 'ativo': ''}`" v-for="beneficio in 18" @click="apresentarBeneficio(beneficio)">
            <div class="mesa">{{ beneficio }}</div>
            <div class="cadeira">
                <div></div>
                <div></div>
            </div>
        </div>
      </div>
</div>
</template>

<style lang="scss">
.beneficio-escola {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

@import url('https://fonts.cdnfonts.com/css/chalkduster');

.losa {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    margin: auto;
    background-color:  #006400;
    border: ridge 20px #8B4513;
    border-radius: 5px;
    color: #fff;
    padding: 1%;
    gap: 15px;
    font-size: .9rem;
    font-family: 'Chalkduster';
}

.beneficio {
    visibility: hidden;

    &.visivel {
        visibility: visible;
    }
}

.cadeiras {
    --cor-cadeira: #0000B0;
    $cor-cadeira: var(--cor-cadeira);
    display: grid;
    grid-template-columns: repeat(5, 8% );
    grid-template-rows: repeat(4, 4rem);
    justify-content: center;
    align-items: center;
    gap: 8%;
    height: min-content;
    margin-bottom: 6%;

    

    >.cadeira {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        &.ativo {
            --cor-cadeira:  #3333CC;
        }
        
        > .cadeira {
            display: flex;
            flex-direction: column;
            height: 40%;
            border-radius: 10px;
            justify-content: center;
            align-items: center;
            > div:nth-child(1) {
                width: 40%;
                height: 80%;
                border-radius: 5px;
                background-color: $cor-cadeira;
            }
            > div:nth-child(2) {
                width: 50%;
                height: 20%;
                border-radius: 20px;
                background-color: $cor-cadeira;
            }
        }
    }
    .mesa {
        height: 60%;
        background-color: $cor-cadeira;
        border-radius: 10px;
        text-align: center;
        color: #fff;
        font-size: 1.5rem;
    
    }
}


</style>