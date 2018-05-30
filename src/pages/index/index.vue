<template>
  <div id="app" class="flex-vertical-container">
    <main-head title="登录"></main-head>
    <input type="text"/>
    <button>登录</button>
  </div>
</template>

<script>
import MainHead from "../../components/Header";

export default {
  name: 'App',
  components: {MainHead},
  data(){
    return {

    }
  },

}
</script>

<style>

</style>
