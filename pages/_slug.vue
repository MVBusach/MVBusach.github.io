<template>
    <div class="container container-project">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
    <nuxt-content :document="article"/>
    </div>
  
</template>

<script>

export default {

    async asyncData({ $content, params, error }) {
        const slug = params.slug || "index";
    const article = await $content(slug)
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