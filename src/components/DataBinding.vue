<template>
    <div id="binding">
        <h1>Data Binding Example</h1>
        <form action="">
            <div class="py-5">
                <input type="text" v-model="form.name" placeholder="Enter Your name">
                <p>Name: {{ form.name}}</p>
            </div>
            <div class="py-5">
                <textarea  cols="30" rows="10" v-model="form.address"></textarea>
                <p>Address: {{ form.address}}</p>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
        name: "DataBinding",
        data(){
            return{
                form:{
                    name:"",
                    address:""
                }
            }
        }
    }
</script>

<style scoped>
#binding{
    background-color: #bae272;
    padding: 15px 0;
}
    .py-5{
        padding: 5px 0;
    }
</style>