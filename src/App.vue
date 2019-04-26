<template>
  <div id="app">
  <AppHeader :title="title" v-on:changeTitle="updateTitle($event)"/>
    <AppBody/>
  <AppFooter :title="title"/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppBody from './components/AppBody'
import AppFooter from './components/AppFooter'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppBody,
    AppFooter,
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
</style>
