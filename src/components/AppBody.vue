<template>
    <div id="body" v-on:mousemove="getOrigin">
        <span>{{ x }} X {{ y }}</span>
    </div>
</template>

<script>
    export default {
        name: "AppBody",
        data(){
            return{
                x:0,
                y:0,
            }
        },
        beforeCreate() {
            alert('before create')
        },
        created() {
            alert('created');
        },
        beforeMount() {
            alert('before Mounted')
        },
        mounted() {
            alert('Mounted');
        },
        beforeUpdate() {
            alert('before update');
        },
        updated() {

            alert('updated');
        },
        methods:{
            getOrigin(event){
                this.x= event.offsetX;
                this.y = event.offsetY;
            }
        }

    }
</script>

<style scoped>
#body{
    height: 300px;
    width: 400px;
    margin: 10px auto;
    border: 2px solid red;
}
</style>