<template>
  <section class="container">
      
      <Entradas :entradas="entradasCargadas" />
      
    
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

