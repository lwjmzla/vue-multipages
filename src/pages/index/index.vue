<template>
  <div id="app">
    index
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import axios from 'axios'
export default {
  name: 'index',
  components: {
    HelloWorld
  },
  created () {
    axios.get('https://easy-mock.com/mock/5a1152db868584562f60c7b5/example/detail')
      .then((res) => {
        console.log(res)
      })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/mixins.styl'
  #app
    color: $yellow
</style>
