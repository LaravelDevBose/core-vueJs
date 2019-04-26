<template>
    <div id="footer">
        <h5 :class="{redColor:redColor}">@copyright By Brainchild Soft. {{ title }}</h5>
        <button @click="changeFontColor">Change Color</button>
    </div>
</template>

<script>
    import {bus} from '../main'
    export default{

        props:{
            title:{
                type:String,
            }
        },
        name: "AppFooter",
        data(){
          return{
              redColor:false
          }
        },
        methods:{
            changeFontColor(){
                this.redColor = !this.redColor;
                bus.$emit('colorChange', this.redColor);
            }
        }
    }
</script>

<style scoped>
    #footer{
        height: 50px;
        width: 100%;
        background-color: aliceblue;
    }
    h5 {
        padding: 15px;
    }
</style>