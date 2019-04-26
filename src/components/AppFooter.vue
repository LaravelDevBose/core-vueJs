<template>
    <div id="footer">
        <h5>@copyright By Brainchild Soft. {{ title }}</h5>
    </div>
</template>

<script>

    export default{

        props:{
            title:{
                type:String,
            }
        },
        name: "AppFooter"
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