<template>
<button class="g-button" :class="`icon-${iconPosition}`" 
@click="$emit('click')">
   <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
   <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="wrapper">
   <slot></slot></div>
</button> 

  
</template>
<style lang="scss">
   .g-button{
       display: inline-flex; justify-content: center; align-items: center;
       vertical-align: middle;
            font-size: var(--font-size);
            height: var(--button-height);
            padding: 0 1em;
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
            background: var(--button-bg);
            .icon{order: 1 ;margin-right: .1em}
            .wrapper{order:2}
            .loading{ animation: spin 2s infinite linear}
            
           
        &.icon-right{
             .wrapper{
                    order:1;   
                }
                .icon{
                    order:2;
                    margin-left: .1em;
                    margin-right: 0;
                }
                
        }

        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-active-bg)
        }
        &:focus{
            outline: none;
        }
        @keyframes spin{
            0%{transform: rotate(0deg)}
            100%{transform: rotate(360deg)}
        }
        

        }      

</style>
<script>
  export default {
  props:{
      icon:{},
      loading:{
          type: Boolean,
          default: false
      },
      iconPosition:{
          type: String,
          default: 'left',
          validator(value){
              
              return value === 'left' || value === 'right'    
          }
      }
  
      
  
  }}
</script>