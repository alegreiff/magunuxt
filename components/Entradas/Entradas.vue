<template>
    <div class="entrada-comp">
        <div class="entrada" v-for="post in entradas" :key="post.id">
        
        <img :src="post._embedded['wp:featuredmedia'][0].source_url" alt="">
      </div>
    </div>
</template>
<script>
export default {
    props: {
        entradas: {
            type: Array,
            required: true
        }
    }
}
</script>
