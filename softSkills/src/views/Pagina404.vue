<template>
  <div class="pagina404">
    <h1>erro 404</h1>
    <h2>essa página não existe, clique em qualquer um dos links no menu ao lado para ir a uma página valida</h2>
  </div>
</template>

<script lang="ts">
export default {
  beforeMount() {
     document.title = "página não encontrada"
  },
}
</script>

<style lang="scss" scoped>
body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}


.pagina404 {
  width: 100%;
  height: 100vh;
}


h1 {
  text-align: center;
  font-size: 5rem;
  color: #ff0000;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
}

a {
  display: block;
  font-size: 4rem;
  text-shadow: 0px 10px 30px rgba(0, 189, 126, 1);
  color: rgba(0, 189, 126, 1);
  text-align: center;
}
</style>
