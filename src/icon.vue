<template>
    <svg class="g-icon">
       <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>




<style scoped>
  .g-icon{
           width: 1em; height: 1em;
       }
</style>




<script>
export default {
   props:['name']
}
</script>