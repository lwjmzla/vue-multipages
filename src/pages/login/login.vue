<template>
  <div id="app">
    login
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  created () {
    axios.get('https://easy-mock.com/mock/5a1152db868584562f60c7b5/example/detail')
      .then((res) => {
        console.log(res)
      })
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
  margin-top: 60px;
}
</style>
