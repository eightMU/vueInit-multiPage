<template>
    <div class="header flex-between">
      <img class="back" src="../assets/common/title_back.png">
      <h1 class="title">{{title}}</h1>
      <div class="block"></div>
    </div>
</template>

<script>
    export default {
        name: "MainHead",
        props:["title"]
    }
</script>

<style lang="scss" scoped>
  .header {
    padding: 60px 0 25px;
    border-bottom: 1px solid #f0f0f0;
    background: #f7f7f7;
    .back {
      width: 48px;
      height: 48px;
    }
    h1 {
      font: bold 34px/42px "Microsoft YaHei";
    }
    .block {
      width: 48px;
      height: 48px;
    }
  }
</style>
