<template>
    <div id="header">
        <h2 @click="changeTitle">{{ title}}</h2>
    </div>
</template>

<script>
    export default {
        props:{
          title:{
              type:String
          }
        },
        name: "AppHeader",
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