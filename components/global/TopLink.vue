<template>
     <nuxt-link :to="{ path: $route.path, hash:`#${hash}`}">
          {{title}}
    </nuxt-link>
</template>
<script>
export default {
    props:{
        hash:{default:'inicio'},
        title:{default:'Volver al inicio'}
    }
}
</script>