<script lang="ts">
export default {
    props: {
        titulo : {
            type: String,
            required: true
        },
        nome: {
            type:String,
            required: true
        },
        radios: {
            type:Array<String>,
            required: true
        } 
    },
    methods: {
        id(radio: String): string {
            return radio.replaceAll(" ", "-")
        }
    }
}
</script>

<template>
<div>
    <label for="">{{ titulo }}: </label><label for="" v-for="radio in radios"><input type="radio" :name="nome" :id="id(radio)"> {{ radio }}</label>
</div>
</template>

<style lang="scss">
</style>