<template>
    <div>
        <h1>Vue js Slot Form</h1>
        <form action="">
            <div id="form-header">
                <slot name="form-header"></slot>
            </div>
            <div id="form-fields">
                <slot name="form-fields"></slot>
            </div>
            <div id="form-controls">
                <slot name="form-controls"></slot>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "formHelper"
    }
</script>

<style scoped>

</style>