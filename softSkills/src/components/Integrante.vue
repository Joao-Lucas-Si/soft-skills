<template>
<div class="integrante">
    <img :src="`/${foto}`" alt="">
    <h3>Nome: <span class="green">{{ nome }}</span></h3>
    <h4>Idade: <span class="green">{{ idade }}</span></h4>
    <h3 class="green">soft skills</h3>
    <ul>
        <li v-for="skill of skills">{{ skill }}</li>
    </ul>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default{

    props:{    
        nome: String,
        idade: Number,
        foto: String,
        skills: Array<String>
        
    }
}
</script>

<style lang="scss" scoped>
.integrante {
    width: 100%;
    border-right: solid 1px $cor-destaque;

    &:last-of-type {
      border-right: none;
    }

    > img {
      width: 75%;
      height: 60vh;
      border-radius: 15px;
      border: solid rgba(0, 189, 126, 1) 1px;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li {
      position: relative;
      width: fit-content;
      cursor: pointer;
      transition: all 0.5s ease-in-out;

      &:hover {
        color: $cor-destaque;

        &::before {
            animation: anim-soft-skills-left 0.75s ease-in-out infinite alternate;
        }

        &::after {
          animation: anim-soft-skills-right 0.75s ease-in-out infinite alternate;
        }
      }
      &::before {
        @include lado("-", "esquerdo")
      }

      &::after {
        @include lado("-", "direito")
      }
    }
  }

  @keyframes anim-soft-skills-left {
    from {
        left: -1pc;
    }
    to {
        left: -2pc;
    }
  }
  @keyframes anim-soft-skills-right {
    from {
        right: -1pc;
    }
    to {
        right: -2pc;
    }

  
  }
</style>