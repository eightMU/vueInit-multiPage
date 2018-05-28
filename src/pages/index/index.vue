<template>
  <div id="app">
    <main-head title="游乐场"></main-head>
    <user-info avatar="../assets/userinfo/img_coin_small.png" nickname="太空鲨"></user-info>
    <banner></banner>
    <bottom index = "0"></bottom>
  </div>
</template>

<script>
import Bottom from "../../components/Footer";
import MainHead from "../../components/Header";
import UserInfo from "../../components/UserInfo";
import Banner from "../../components/Banner";
export default {
  name: 'App',
  components: {Banner, UserInfo, MainHead, Bottom},
}
</script>

<style>

</style>
