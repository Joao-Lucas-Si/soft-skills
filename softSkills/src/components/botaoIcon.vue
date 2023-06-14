<template>
<button @click="$emit('clicar')" class="botao-icon">
    <div><img :src="icon" alt=""></div>
    <h4>{{ texto }}</h4>
</button>
</template>

<script lang="ts">

export default {
    emits: ["clicar"],
    props: {
        icon: String,
        texto: String
    }
}
</script>

<style lang="scss">

.botao-icon {
    display: flex;
    align-items: center;
    background-color: $cor-destaque;
    border-radius: 20px;
    overflow: hidden;
    border: solid 2px #000;
    cursor: pointer;

    h4 {
        padding-inline: 10px;
        padding-block: 10px;
    }

    div {
        padding-inline: 10px;
        height: 100%;
        background-color: #565656;
        display: flex;
        align-items: center;
    }

    img {
        height: 70%;
    }
}
</style>