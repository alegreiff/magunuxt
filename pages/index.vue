<template>
  <section class="container">
    
      <div class="entrada" v-for="post in entradasCargadas" :key="post.id">
        <h3 v-html="post.title.rendered"></h3>
        <img :src="post._embedded['wp:featuredmedia'][0].source_url" alt="">
      </div>
    
  </section>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  components: {
    
  },
  data() {
    return {
      entradas: null
    }
  },
  computed: {...mapGetters(['entradasCargadas'])},
  methods: {
  },
  mounted(){
  }

}
</script>

