<template>
    <div id="header">
        <h2 @click="changeTitle" v-bind:class="{redColor: redColor}">{{ title}}</h2>
    </div>
</template>

<script>
    import {bus} from '../main'
    export default {
        props:{
          title:{
              type:String
          }
        },
        name: "AppHeader",
        data(){
            return{
                redColor:false,
            }
        },
        created(){
          bus.$on('colorChange',(color)=>{
              this.redColor = color;
          })
        },
        methods:{
            changeTitle:function(){
                this.$emit('changeTitle', 'Vue js Advance Example');
            }
        }
    }
</script>

<style scoped>
#header{
    height: 60px;
    width: 100%;
    background-color: aquamarine;
}
    h2 {
        padding: 15px;
        text-align: center;
    }
</style>