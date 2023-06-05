<template>
  <div class="pagina4040">
    <h1>erro 404</h1>
    <h2>essa página não existe, clique no link abaixo para retornar a página home</h2>
    <router-link :to="{ name: 'home' }">Home</router-link>
  </div>
</template>

<style lang="scss" scoped>
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
