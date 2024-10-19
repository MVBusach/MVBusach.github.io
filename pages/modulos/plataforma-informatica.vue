<template>
    <div class="container project"><!--container-project-->
      <h1>Plataforma Informática para Gestión del Riesgo de Obesidad Escolar</h1>
      <h2 class="title is-subtitle"></h2>
      <section>
      <div
        class="tab-panel current"
        role="tabpanel"
        v-for="m in modules"
        :key="m.id"
      >
        <module-preview :mod="m"></module-preview>
      </div>
    </section>
    </div>
  
</template>

<script>
import files from "../../files.json";
export default {
data() {
    return {
      modules: files.modules[4].modules,
      error: [],
    };
  },
  head(){
    return{
      title:'Módulo 5 ' + process.env.titleBase,
    }
  },
}

</script>

<style>

</style>