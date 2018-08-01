<template>
    <div>
        <h2>
            Cine
        </h2>
        <div class="retinalatina">
            <div v-for="film in peliculas" :key="film.id" class="retinalatina-film">
            
            <img :src="image(film.id)" alt="">
            
            

        </div>
        </div>
    </div>
</template>
<script>
export default {
    asyncData(context){
  return context.app.$axios
    .$get('https://apps.presencia.co/api/retina/pais/Colombia')
    .then(data => {
        //console.log(data)
      return {
        //loadedPost: { ...data, id: context.params.postId }
        peliculas: data
      }
    })
    .catch(e => context.error())
},
methods: {
    image (id) {
    return require('@/assets/posteres/'+id+'.jpg')
  }
}
}
</script>

