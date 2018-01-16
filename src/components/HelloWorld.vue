<template>
  <div class="hello">
    <myheader></myheader>
    <myheader></myheader>
    <p>サンプル</p>
    <p v-if="msg.length > 0">{{ msg }}</p>
    <p v-else>no massage!</p>
    <input v-model="msg"/>
    <button @click="clear()">clear!</button>
  </div>
</template>

<script>
import myheader from './myheader'

export default {
  name: 'HelloWorld',
  components: {
    myheader
  },
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
