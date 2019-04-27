<template>
    <div id="form-two">
        <form-helper>
            <div slot="form-header">
                <h2>This is Form Two</h2>
                <p>Information about the Form Two</p>
            </div>
            <div slot="form-fields">
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
    import FormHelper from './formHelper';

    export default {
        name: "FormTwo",
        components:{
            FormHelper,
        }
    }
</script>

<style scoped>
#form-two{
    background-color: #6affb3;
}
</style>