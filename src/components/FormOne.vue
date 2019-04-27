<template>
    <div id="form-one">
        <form-helper>
            <div slot="form-header">
                <h2>This is Form One</h2>
                <p>Information about the Form One</p>
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
    </div>
</template>

<script>
    import FormHelper from './formHelper'
    export default {
        name: "FormOne",
        components:{
            FormHelper,
        }
    }
</script>

<style scoped>
#form-one{
    background-color: #a7a1e2;
}
</style>