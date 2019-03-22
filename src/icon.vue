<template>
    <svg class="g-icon">
       <use v-bind:xlink:href="`#icon-{name}`"></use>
    </svg>
</template>




<style>
  .g-icon{order: 1 ;margin-right: .1em}
</style>




<script>
export default {
   props:['name']
}
</script>