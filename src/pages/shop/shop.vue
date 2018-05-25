<template>
  <div id="app">
    <main-head title="商城"></main-head>
    <!--<img src="../../assets/logo.png">-->
    <div>shop</div>
    <a href="../personal/index.html">shop</a>
    <!--<router-view/>-->
    <bottom index = "1"></bottom>
  </div>
</template>

<script>
import Bottom from "../../components/Footer";
import MainHead from "../../components/Header";
export default {
  name: 'App',
  components: {MainHead, Bottom}
}
</script>

<style scoped lang="scss">

</style>
