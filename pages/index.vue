<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        magapi
      </h1>
      <h2 class="subtitle">
        My superior Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
      
      <div v-for="post in entradasCargadas" :key="post.id">
        <p v-html="post.title.rendered"></p>
        <img :src="post._embedded['wp:featuredmedia'][0].source_url" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Logo
  },
  data() {
    return {
      entradas: null
    }
  },
  computed: {...mapGetters(['entradasCargadas'])},
  methods: {
    /*carga(){
      this.entradas = this.$store.getters.entradasCargadas
      this.$axios.$get('/posts?_embed')
      .then(data => {
        this.entradas = data;
        this.$store.dispatch('setEntradas', data)
      })
      .catch(e => {
        console.log(e)
      })
    }*/
  },
  mounted(){
    //this.carga()
  },

}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
