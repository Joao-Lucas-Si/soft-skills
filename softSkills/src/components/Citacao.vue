<script lang="ts">
export default {
    props: {
        texto: String 
    }
}
</script>

<template>
<blockquote class="citacao">{{ texto }}</blockquote>
</template>

<style lang="scss">
.citacao {
    border-left: $cor-destaque solid 5px ;
    padding-left: 10px;
    background-color: #00bd7e33;
}
</style>