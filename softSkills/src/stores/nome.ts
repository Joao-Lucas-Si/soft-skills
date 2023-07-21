import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNomeStore = defineStore('nome', {
  state: ()=> ({
  
    nome: ""
    
  })
})