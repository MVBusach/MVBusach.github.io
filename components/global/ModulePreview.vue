<template>
  <div class="columns">
    <div class="column">
      <div class="img-container">
        <img
          v-if="mod.img_index"
          :src="mod.img_index"
          :alt="mod.name"
          class="module-img"
        />
        <img
          v-else-if="mod.img"
          :src="mod.img"
          :alt="mod.name"
          class="module-img"
        />
        <img v-else src="https://via.placeholder.com/450x200" />
      </div>
    </div>
    <div class="column">
      <h3 class="is-2">{{ mod.name }}</h3>
      <p class="is-p-subtitle">{{ mod.subtitle }}</p>
      <div class="my-button">
      <NuxtLink :to="mod.path" class="button is-primary mt-3"
        >Saber más &rsaquo;</NuxtLink
      >
      </div>
      <!-- <a href="#">
              Saber más 
              <font-awesome-icon class="ml-2" :icon="['fas', 'arrow-right']" />
            </a> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["mod"],
};
</script>

<style>
</style>