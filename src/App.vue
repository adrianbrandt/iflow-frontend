<template>
<RouterView />
</template>

<script>
import { RouterView } from 'vue-router';

export default {
    name: "App",
    components: { RouterView }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  padding: 0;
  margin: 0;
}

#loginfield input, .add input{
width: 300px;
height: 40px;
padding-left: 20px;
display: block;
margin-bottom: 30px;
margin-left: auto;
margin-right: auto;
}
#loginfield button{
  width: 320px;
  height: 40px;
  background: skyblue;
  color: white;
  cursor: pointer;
  border-color: skyblue;
  border: 1px solid;
}
</style>
