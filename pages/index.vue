<template>

  <!-- <div class="container" v-html="post.content.rendered"></div> -->
  <div class="container">
    <section class="title-container">
        <h1 class="has-text-centered web-site-title">
          <span class="line">Plataforma de apoyo para mejorar entornos educacionales en</span>
          <span class="line">alimentación, actividad física y entorno comunitario</span>
        </h1>
        <p class="espacio">&nbsp;</p>
    </section>
    <section class="hero-area full-width">
      <div class="columns">
        <div class="column has-text-centered">
        </div>
        <div class="column is-5 info text-banner">
          Sitio Web que contiene información sobre el proyecto FONDEF IDeA
          IT23I0031 "Plataforma de Apoyo para Mejorar Entornos Educacionales en
          Alimentación, Actividad Física y Entorno Comunitario", desarrollado
          por la Universidad de Santiago de Chile y la Universidad del
          Desarrollo.
        </div>
      </div>
    </section>

    <!--section class="hero-area wp-block-cover full-width">
      <div class="columns">=
        <div class="column has-text-centered">
          <h1 class="has-large-font-size has-text-centered" style="color: black">
        Plataforma de Apoyo para mejorar entornos educacionales en alimentación, actividad física y entorno comunitario
      </h1>
      <a href="#proyecto" class="button is-primary mt-5 is-medium is-inverted">
        Saber más
        <font-awesome-icon class="ml-2" :icon="['fas', 'chevron-down']" />
      </a>
        </div>
        <div class="column is-4 is-size-5" style="color: black">
          Este sitio contiene información sobre la Plataforma de Apoyo para mejorar entornos educacionales en alimentación, actividad física y entorno comunitario, desarrollado por USACH y UDD en el marco del proyecto FONDEF IDeA IT1810016.
        </div>
      </div>
      
      

    </section-->

    <!--section id="proyecto" class="section columns">
      <div class="column">
        <h2 class="title is-2">Sobre el proyecto</h2>
        <p>
          En siete establecimientos educacionales de comunas del sector sur de
          la Región Metropolitana, se implementó una serie de acciones para
          facilitar una mayor actividad física y una alimentación más saludable.
          Se trabajó con establecimientos de la asociación de municipios ‘Ciudad
          Sur’, que comprende El Bosque, Pedro Aguirre Cerda, San Joaquín, San
          Ramón, La Granja y Lo Espejo.
        </p>
      </div>
      <div class="column">
        <img src="~assets/img/aplicaciones.png" alt="Pantallas aplicaciones" />
        <img src="https://via.placeholder.com/400x200" alt="" />
      </div>
    </section-->
    <section id="proyecto">
      <div>
        <h2 class="title is-2">Sobre el proyecto</h2>
        <p>
          En siete establecimientos educacionales de comunas del sector sur de
          la Región Metropolitana, se implementó una serie de acciones para
          facilitar una mayor actividad física y una alimentación más saludable.
          Se trabajó con establecimientos de la asociación de municipios ‘Ciudad
          Sur’, que comprende El Bosque, Pedro Aguirre Cerda, San Joaquín, San
          Ramón, La Granja y Lo Espejo.
        </p>
      </div>
    </section>

    <section>
      <h1 class="title is-1">Módulos</h1>
      <div
        aria-labelledby="tab-comunidad"
        class="tab-panel current"
        v-show="selectedTab == 'comunidad'"
        id="comunidad"
        role="tabpanel"
        v-for="m in modules"
        :key="m.id"
      >
        <module-preview :mod="m"></module-preview>
      </div>
    </section>

    <!--section>
      <h1 class="title is-1">Módulos</h1>
      <div aria-labelledby="tab-comunidad" class="tab-panel current"   v-show="selectedTab=='comunidad'"
      id="comunidad" role='tabpanel'>
        <product-preview v-for="p in projects.filter(d=>d.tag=='comunidad')" :key="p.slug" :project="p"></product-preview>
      </div>
      <div aria-labelledby="tab-voluntariado" class="tab-panel "  v-show="selectedTab=='voluntariado'"
      id="voluntariado" role='tabpanel'>
        <product-preview v-for="p in projects.filter(d=>d.tag=='voluntariado')" :key="p.slug" :project="p"></product-preview>
      </div>
      <div aria-labelledby="tab-monitoreo" class="tab-panel "  v-show="selectedTab=='monitoreo'"
      id="monitoreo" role='tabpanel'>
         <product-preview v-for="p in projects.filter(d=>d.tag=='monitoreo')" :key="p.slug" :project="p"></product-preview>
      </div>
    </section-->

    <section>
      <h2 class="mb-3">Encuéntranos en</h2>
      <div class="social-icons">
        <a
          class="social-link"
          href="https://www.youtube.com/@Escuelasmasaludables"
          target="_blank"
          aria-label="YouTube | Ciudad Sur"
        >
          <svg class="social-icon" aria-hidden="true">
            <use xlink:href="#youtube" />
          </svg>
        </a>
        <a
          class="social-link"
          href="https://www.instagram.com/escuelasmasaludables"
          target="_blank"
          aria-label="Instagram | Ciudad Sur"
        >
          <svg class="social-icon" aria-hidden="true">
            <use xlink:href="#instagram" />
          </svg>
        </a>
      </div>
      <!--div class="social-icons">
        <a
          class="social-link"
          href="https://citiaps.usach.cl/"
          target="_blank"
          aria-label="Sitio Web | Citiaps"
        >
          <svg class="social-icon" aria-hidden="true">
            <use xlink:href="#website" />
          </svg>
        </a>
        <a
          class="social-link"
          href="https://www.facebook.com/citiaps"
          target="_blank"
          aria-label="Facebook | Citiaps"
        >
          <svg class="social-icon" aria-hidden="true">
            <use xlink:href="#facebook" />
          </svg>
        </a>
        <a
          class="social-link"
          href="https://www.instagram.com/citiaps"
          target="_blank"
          aria-label="Instagram | Citiaps"
        >
          <svg class="social-icon" aria-hidden="true">
            <use xlink:href="#instagram" />
          </svg>
        </a>
        <a
          class="social-link"
          href="https://twitter.com/citiaps"
          target="_blank"
          aria-label="Twitter | Citiaps"
        >
          <svg class="social-icon" aria-hidden="true">
            <use xlink:href="#twitter" />
          </svg>
        </a>
        <a
          class="social-link"
          href="https://www.linkedin.com/company/34213172"
          target="_blank"
          aria-label="LinkedIn | Citiaps"
        >
          <svg class="social-icon" aria-hidden="true">
            <use xlink:href="#linkedin" />
          </svg>
        </a>
      </div-->
    </section>
  </div>
</template>

<script>
import files from "../files.json";
export default {
  data() {
    return {
      modules: files.modules,
      //projects:files.projects.sort((a,b)=>(''+a.slug).localeCompare(b.slug)),
      //tools:files.tools,
      selectedTab: "comunidad",
      post: {
        title: {
          rendered: "",
        },
      },
      error: [],
    };
  },
  head() {
    return {
      title: "Inicio " + process.env.titleBase,
    };
  },
  methods: {
    setTab: function (type) {
      this.selectedTab = type;
    },
    getProjectsBy(type) {},
  },
  async asyncData({ $content, params, err }) {
    const projects = await $content("proyectos")
      .only(["title", "description", "tag", "slug", "img"])
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    const tools = await $content("herramientas")
      .only(["title", "description", "slug", "img"])
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    //console.log('projects', projects);
    return {
      //projects,
      //tools
    };
  },
};
</script>

<style>
</style>
