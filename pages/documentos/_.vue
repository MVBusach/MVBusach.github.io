<template>
    <div class="container">
        <nav class="breadcrumb  is-small" aria-label="breadcrumbs">
          <ul>
            <li><nuxt-link to="/">Inicio</nuxt-link></li>
            <li v-if="article.origin"><nuxt-link :to="article.origin">{{article.originName}}</nuxt-link></li>
            <li v-if="article.upper"><nuxt-link :to="article.upper">{{article.upperName}}</nuxt-link></li>
            <li class="is-active"><nuxt-link :to="{ path: $route.path}" aria-current="page">{{article.title}}</nuxt-link></li>
          </ul>
        </nav>
        <article v-if="article" class="doc-article" >
            <h1 >{{ article.title }}</h1>
            <h2>{{article.description}}</h2>
          
          <!-- <h2 class="has-text-left">Contenidos</h2>
          <ul>
            <li
              v-for="link of article.toc"
              :key="link.id"
              :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }"
            >
              <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
          </ul> -->
          <nuxt-content :document="article" /> 
      </article>
    </div>
</template>
<script>
export default {
  async asyncData ({ $content, params, error }) {
    //   const tool = params.tool || "herramientas"; 
    //  const slug = params.slug || "index"; 
    //  console.log('tool', tool)
    //  console.log('slug', slug)
    // const article = await $content(`documentos/${tool}`, slug).fetch() 
    
    //console.log('*** DOCUMENTOS')
    const path = `documentos/${params.pathMatch || 'index'}`
    //console.log('path', path)
    //const [article] = await $content({ deep: true }).where({ path }).fetch()
    const article = await $content(path).fetch()
    .catch(err => {
            error({ statusCode: 404, message: "Page not found" });
          });
    //console.log('isArray', Array.isArray(article) )
  
    //console.log('article', article )
    return {
      article
    }
  },
  head(){
    return{
      title:this.article.title+' ' + process.env.titleBase,
    }
  }
}
</script>