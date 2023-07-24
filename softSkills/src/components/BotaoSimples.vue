<script lang="ts">
interface mensagens {
    valido: string,
    invalido: string  
}

export default {
    
    props: {
        texto: String,
        habilitado: {
            type:Boolean,
            default: true,
        },
        tipo: {
            type: String,
            default: "button",
            validator(valor: string): boolean {
                const tipos = [
                    "button",
                    "submit",
                    "reset"
                ]
                if (tipos.includes(valor) ) {
                    return true
                }
                
                return false
            }
        },
        mensagens: Object as ()=> mensagens
    },
    computed: {
        mensagem() {
            return (this.habilitado) ? this.mensagens?.valido : this.mensagens?.invalido
        }, 
        type() {
            
            if (this.tipo == "button" ) {
                return this.tipo
            }
            else if (this.tipo == "reset" ) {
                return this.tipo
            }
            else if (this.tipo == "submit" ) {
                return this.tipo
            }
            
            else {
                return 'button'
            }
        }
    }
}
</script>

<template>
<div>

    <button :type="type" :class="(!habilitado) ? 'desabilitado': ''" @click=" $emit('clicado')">{{ texto }}</button>
    <p class="mensagem">{{ mensagem }}</p>
</div>
</template>


<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
button {
    background-color: $cor-destaque;
    padding: 10px 20px;
    border: solid #000 3px;
    border-radius: 15px;

    &.desabilitado {
        pointer-events: none;
        background-color: #c0c0c0;

        + p {
            color: #FF8080;
        }
    }
}

p {
    text-align: center;
}

</style>