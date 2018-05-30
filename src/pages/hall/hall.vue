<template>
  <div id="app">
    <main-head title="游乐场"></main-head>
    <user-info avatar="../assets/userinfo/img_coin_small.png" nickname="太空鲨"></user-info>
    <banner></banner>
    <broadcast></broadcast>
    <bottom index = "0"></bottom>
  </div>
</template>

<script>
import Bottom from "../../components/Footer";
import MainHead from "../../components/Header";
import UserInfo from "../../components/UserInfo";
import Banner from "../../components/Banner";
import Broadcast from "../../components/Broadcast";

export default {
  name: 'App',
  components: {Broadcast, Banner, UserInfo, MainHead, Bottom},
  data(){
    return {

    }
  },

}
</script>

<style>

</style>
