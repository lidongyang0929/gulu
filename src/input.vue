<template>
  <div class= "wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled"
    @change="$emit('change',$event)"
    @input="$emit('input',$evevt)"
    @focus="$emit('focus',$evevt)"
    @blur="$emit('blur',$evevt)"></input>
    <template v-if="error">
    <icon name='error' class="icon-error"></icon>
    <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>
<style lang="scss" scoped>
  $height: 32px;
  $font-size: 14px;
  $border-radius: 4px;
  $border-color: #999;
  $border-color-hover: black;
  $box-shadow-color: rgba(0,0,0,0.5);
  $red: #F1453D;
 .wrapper{
     display: inline-flex;align-items: center;
     vertical-align: top;
     > :not(:last-child){ margin-right: .5em;}
     &.error {
         >input{
         border-color: $red;}
     }
     .icon-error{fill:$red;}
     .errorMessage{color:$red;}
     > input{
         height:$height;
         font-size: $font-size;
         border-radius: $border-radius;
         border: 1px solid $border-color;
         padding: 0 8px;
         &:hover{
             border-color: $border-color-hover;
         }
         &:focus{
             box-shadow: inset 0 1px 3px $box-shadow-color;
             outline: none;
         }
         &[disabled]{
             border-color: #ccc;
             color:#ccc;
             cursor: not-allowed;
         }

     }
 }
 </style>
<script>
import Icon from './icon'
  export default{
      components:{
          'icon':Icon
      },
      props:{
          value:{
              type:String
          },
          disabled:{
              type:Boolean,
              default:false
          },
          error:{
              type:String
          }
      }

  }
</script>



