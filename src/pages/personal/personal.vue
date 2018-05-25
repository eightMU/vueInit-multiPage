<template>
  <div id="app">
    <main-head title="我的"></main-head>
    <a href="../personal/index.html">per</a>
    <bottom index = "2"></bottom>
  </div>
</template>

<script>
import Bottom from "../../components/Footer";
import MainHead from "../../components/Header";
export default {
  name: 'App',
  components: {MainHead, Bottom},
}
</script>

<style>

</style>
