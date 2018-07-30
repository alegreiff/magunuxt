import Vuex from 'vuex'
const createStore= () =>{
    return new Vuex.Store({
        state: {
            nombre: 'Jaime de Greiff',
            entradasRecientes: []
        },
        mutations: {
            setEntradas(state, entradas){
                state.entradasRecientes = entradas
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios
                  .$get("/posts?_embed")
                  .then(data => {
                    const postsArray = [];
                    for (const key in data) {
                      postsArray.push({ ...data[key], id: key });
                    }
                    vuexContext.commit("setEntradas", postsArray);
                  })
                  .catch(e => context.error(e));
              },
            setEntradas(vuexContext, entradas){
                vuexContext.commit('setEntradas', entradas)
            }
        },
        getters: {
            entradasCargadas(state){
                return state.entradasRecientes
            }
        }
    })
}
export default createStore