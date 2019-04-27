<template>
    <div>
        <div id="body" v-on:mousemove="getOrigin">
            <span>{{ x }} X {{ y }}</span>
        </div>
        <button @click="component='FormOne'">Show Form One</button>
        <button @click="component='FormTwo'">Show Form Two</button>
        <keep-alive>
            <component :is="component"></component>
        </keep-alive>
    </div>

</template>

<script>
    import FormOne from './FormOne';
    import FormTwo from './FormTwo';
    export default {
        name: "AppBody",
        components:{
          FormOne,
          FormTwo
        },
        data(){
            return{
                x:0,
                y:0,
                component:'FormOne'
            }
        },
        // beforeCreate() {
        //     alert('before create')
        // },
        // created() {
        //     alert('created');
        // },
        // beforeMount() {
        //     alert('before Mounted')
        // },
        // mounted() {
        //     alert('Mounted');
        // },
        // beforeUpdate() {
        //     alert('before update');
        // },
        // updated() {
        //
        //     alert('updated');
        // },
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