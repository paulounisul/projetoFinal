import Vue from 'vue'
import Vuex from 'vuex'


//Vuex - cria uma area de armazenamento de dados 
//que será compartilhada entre os componentes.. 

Vue.use( Vuex )


export default new Vuex.Store({
    state: {
        isMenuVisible: true,
        user: {
            name: 'Usário Paulo',
            email: 'paulo@cod3r.com.br'
        }
    },
    mutations: {
        toggleMenu(state, isVisible ){
           if( isVisible === undefined ) {
               state.isMenuVisible = !state.isMenuVisible
           } else {
               state.isMenuVisible = isVisible
           }

        }
    }
})