<template>
    <div class="container project"><!--container-project-->
      <h1>{{ article.name }}</h1>
      <h2 class="title is-subtitle">{{ article.subtitle }}</h2>
    <nuxt-content :document="article"/>
    </div>
  
</template>

<script>

export default {

    async asyncData({ $content, params, error }) {
        const slug = params.slug || "index";
    const article = await $content('modulos/plataforma-informatica', slug)
    .fetch()
    .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });
    
    return {
      article
    }
  },
  head(){
    return{
      title:this.article.title+' ' + process.env.titleBase,
    }
  },
}

</script>

<style>

</style>