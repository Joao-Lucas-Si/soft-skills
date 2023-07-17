<template>
<div class="textos">
    <p v-for="paragrafo in paragrafos" v-html="paragrafo"></p>
</div>
</template>

<script lang="ts">
export default {
    props: {
        texto: String
    },
    computed: {
        paragrafos() {
            return this.texto?.split("/n")
        }
    }
}
</script>

<style lang="scss" scoped>
</style>