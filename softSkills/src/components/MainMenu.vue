<script lang="ts">

import IconLogo from './icons/IconLogo.vue';
import IconHome from './icons/IconHome.vue';
import IconSoftSkills from './icons/IconSoftSkills.vue';

import IconInteligenciaEmocional from './icons/IconInteligenciaEmocional.vue';

export default {

    components: { IconLogo, IconHome, IconSoftSkills, IconInteligenciaEmocional }
}
</script>

<template>
<nav>
    <icon-logo/>
   
    <router-link to="/">
        
        <icon-home />
        <h4>home</h4>
    </router-link>
    <router-link to="/soft-skills/">
        
        <icon-soft-skills />
        <h4>soft skills</h4>
    </router-link>
    <router-link to="/inteligencia-emocional/">
        
        <icon-inteligencia-emocional />
        <h4>inteligência emocional</h4>
    </router-link>
</nav>
</template>

<style lang="scss">
nav {
    background-color: var(--color-background-soft);
    width: 5vw;
    height: 100vh;
    font-size: 1rem;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    position: sticky;
    top: 0%;
    
    padding-top: 10px;
    border-right: rgba(0, 189, 126, 1) solid 1px;
  
    &:hover {
      width: 10vw;

      
    }
  
    > svg {
      width: 100%;
      fill: rgba(0, 189, 126, 1);
      //filter: drop-shadow(0px 5px 2px rgba(0, 189, 126, 1));
      margin-bottom: 20px;
    }
  
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 10px;
      border-bottom: 1px solid var(--color-text);
      text-align: center;
      
      svg {
        fill: var(--color-text);
        width: 3rem;
        height: 3rem;
      }
  
      h4 {
        transition: opacity 0.5s;
        text-transform: capitalize;
        
      }
  
      &.router-link-exact-active {
        color: rgba(0, 189, 126, 1);
        border-color: rgba(0, 189, 126, 1);
  
        svg {
          fill: rgba(0, 189, 126, 1); 
        }
      }
    }
}
</style>