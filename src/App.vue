<template>
    <div id="app">
        <AppHeader :title="title" v-on:changeTitle="updateTitle($event)"/>
<!--        <AppBody/>-->
        <hr>
        <form-helper>
            <div slot="form-header">
                <h2>Name Of the Form</h2>
                <p>Information about the Form</p>
            </div>
            <div slot="form-fields">
                <div class="py-3">
                    <input type="text" placeholder="Your Name">
                </div>
                <div class="py-3">
                    <input type="email" placeholder="Your Email">
                </div>
                <div class="py-3">
                    <input type="password" placeholder="Your password">
                </div>
            </div>
            <div slot="form-controls">
                <button @click="formSubmit">Submit</button>
            </div>
        </form-helper>
        <AppFooter :title="title"/>
    </div>
</template>

<script>
    import AppHeader from './components/AppHeader'
    // import AppBody from './components/AppBody'
    import AppFooter from './components/AppFooter'
    import FormHelper from './components/formHelper'

    export default {
        name: 'app',
        components: {
            AppHeader,
            // AppBody,
            AppFooter,
            FormHelper,
        },
        data(){
            return {
                title:'Vue js Advance'
            }
        },
        methods:{
            updateTitle(updatedTitle){
                this.title = updatedTitle;
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 10px;
    }
    .redColor{
        color: red;
    }
    .py-3{
        padding: 3px 0;
    }
</style>
