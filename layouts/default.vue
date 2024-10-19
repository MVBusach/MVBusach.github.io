<template>
  <div class="main-layout">
    <nav
      class="navbar"
      v-bind:class="'is-blue'"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item brand-logo mx-5 py-5">
          <div class="mr-1">
            <!--logo-bkg-->
            <img
              src="~/assets/img/Logo-Escuelas-Saludables2.png"
              alt="logo ciudad sur"
              class="logo-grande"
            />
          </div>

          <div class="logo-title">
            <div class=""></div>
            <div class="logo-subtitle"></div>
          </div>
        </nuxt-link>
        <!--botón de menú-->
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <!--/ botón de menú-->
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end pr-5">
          <NuxtLink to="/" exact class="navbar-item">Inicio</NuxtLink>
          <div class="navbar-item has-dropdown" id="menu-project">
            <a class="navbar-link">Manuales</a>
            <div class="navbar-dropdown is-right">
              <NuxtLink
                v-for="m in modules"
                v-bind:key="m.slug"
                :to="m.path"
                class="navbar-item-2"
                >{{ m.name }}</NuxtLink
              >
            </div>
          </div>
          <NuxtLink to="/publicaciones" class="navbar-item">Publicaciones</NuxtLink>
          <NuxtLink to="/entornos" class="navbar-item">Entornos</NuxtLink>
          <NuxtLink to="/contacto" class="navbar-item">Contacto</NuxtLink>
          <NuxtLink to="/equipo" class="navbar-item">Nosotros</NuxtLink>
          <NuxtLink to="/noticias" class="navbar-item">Noticias</NuxtLink>
        </div>
      </div>
    </nav>
    <Nuxt />
    <footer class="footer is-dark">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h2 class="title is-4 mb-0">Módulos</h2>
            <ul>
              <li v-for="m in modules" v-bind:key="m.slug">
                <nuxt-link :to="m.path">{{ m.name }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="column is-size-7">
            <div class="my-3 center">
              <a href="https://www.usach.cl/" target="_blank">
                <img
                  class="footer-logo"
                  src="~/assets/img/imago-usach-blanco.png"
                  alt="Sitio Web Usach"
                  height="100%"
                  width="100%"
                />
              </a>
            </div>
            <div class="my-3 center">
              <a href="https://www.udd.cl/" target="_blank" class="img-container">
                <img
                  class="footer-logo"
                  src="~/assets/img/UDD-blanco.png"
                  alt="Sitio Web UDD"
                  height="75%"
                  width="75%"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="columns has-text-centered footer-separator pt-3"></div>
        <div class="columns social-icons social-icons__footer">
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
        <!--div class="columns social-icons social-icons__footer">
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
      </div>
    </footer>
    <general-icons></general-icons>
    <social-icons></social-icons>
    <tool-icons></tool-icons>
  </div>
</template>
<script>
//Detecta clics fuera de menús abiertos
function clickOutside(element) {
  document.addEventListener("click", (evt) => {
    const flyoutElement = element;
    let targetElement = evt.target; // clicked element
    do {
      if (targetElement == flyoutElement) {
        // clic dentro del elemento
        return;
      }
      // sube por el dom
      targetElement = targetElement.parentNode;
    } while (targetElement);
    // Click fuera, si el elemento está activo, lo desactiva
    if (element.classList.contains("is-active")) {
      element.classList.remove("is-active");
    }
  });
}
import files from "../files.json";
export default {
  data() {
    return {
      //projects:files.projects.sort((a,b)=>(''+a.slug).localeCompare(b.slug)),
      modules: files.modules,
      projects: files.projects,
      tools: files.tools,
      version: files.version,
      menu: {
        projects: false,
        tools: false,
      },
    };
  },
  computed: {},
  mounted: function () {
    //Menú hamburguesa
    document.querySelector(".navbar-burger").addEventListener("click", () => {
      document.querySelector(".navbar-burger").classList.toggle("is-active");
      document.querySelector(".navbar-menu").classList.toggle("is-active");
    });
    //menús desplegables
    let menu = document.querySelector(".navbar-link");
    menu.addEventListener("click", () => {
      menu.classList.toggle("is-active");
    });
    let menuItems = document.querySelectorAll(".has-dropdown");
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("is-active");
        //maneja clicks fuera el elemento
        clickOutside(item);
      });
    });
  },
};
</script>
<style>
</style>
