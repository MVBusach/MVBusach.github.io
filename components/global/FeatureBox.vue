<template>
  <div class="column" v-bind:class="{'is-one-third': !isHorizontal, 'horizontal-box': isHorizontal}">
    <div class="box feature-box">
        <div class="round-icon">
                <img v-if="icon" class="small-icon" :src="icon" aria-hidden="true">
                <svg v-if="svgIcon" class="small-icon" aria-hidden="true">
                    <use :xlink:href="'#'+svgIcon"/>
                </svg>
        </div>

    <!-- <h3>{{title}}</h3>
    <p>{{description}}</p> -->
    <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    props:['icon','title','description', 'svgIcon', 'isHorizontal']
}
</script>

<style>

</style>