<template>
  <div class="column is-one-third sponsor">
        <a :href="link" target="_blank">
                <figure>
                <img :src="img">
                <figcaption>{{desc}}</figcaption>
                </figure>
        </a>
</div>
</template>

<script>
export default {
    props:['link','img','desc']
}
</script>

<style>

</style>