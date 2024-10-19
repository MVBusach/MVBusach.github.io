<template>
  <div class="columns">
          <div class="column">
            <div>
              <img v-if="project.img" :src="project.img" :alt="project.title"/>
              <img v-else src="https://via.placeholder.com/450x200"/>
            </div>
          </div>
          <div class="column">
            <h2 class="title is-2">{{project.title}}</h2>
            <p>{{project.description}}</p>
            <a class="button is-primary is-light mt-3" :href="project.path">
              Saber más &rsaquo;
            </a>
            <!-- <a href="#">
              Saber más 
              <font-awesome-icon class="ml-2" :icon="['fas', 'arrow-right']" />
            </a> -->
          </div>
        </div>
</template>

<script>
export default {
    props:['project']
}
</script>

<style>

</style>