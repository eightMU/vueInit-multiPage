<template>
  <div id="app">
    <main-head title="我的"></main-head>
    <user-info showRank="false" avatar="../assets/userinfo/img_coin_small.png" nickname="太空鲨"></user-info>
    <bottom index = "2"></bottom>
  </div>
</template>

<script>
import Bottom from "../../components/Footer";
import MainHead from "../../components/Header";
import UserInfo from "../../components/UserInfo";
export default {
  name: 'App',
  components: {UserInfo, MainHead, Bottom},
}
</script>

<style>

</style>
