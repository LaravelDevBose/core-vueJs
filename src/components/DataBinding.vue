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
            <div class="py-5">
                <label > CB One</label>
                <input type="checkbox" value="1" v-model="form.checkBoxes">
                <label > CB Two</label>
                <input type="checkbox" value="2" v-model="form.checkBoxes">
                <label > CB Three</label>
                <input type="checkbox" value="3" v-model="form.checkBoxes">
                <label > CB Four</label>
                <input type="checkbox" value="4" v-model="form.checkBoxes">
                <label > CB Five</label>
                <input type="checkbox" value="5" v-model="form.checkBoxes">
            </div>

            <div>
                <h3>Check Box Result</h3>
                <ul>
                    <li v-for="(check,index) in form.checkBoxes" :key="index">{{ check }}</li>
                </ul>
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
                    address:"",
                    checkBoxes:[],
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