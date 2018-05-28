<template>
  <div class="userinfo flex-between">
    <div class="flex-container">
      <img class="avatar" :src="avatar">
      <span class="nickname">{{nickname}}</span>
    </div>
    <div class="flex-container">
      <div v-if="!showRank" class="flex-container">
        <img class="rank-icon" src="../assets/userinfo/homepg_rank.png">
        <span class="rank">排行榜</span>
      </div>
      <div class="flex-container">
        <img class="gold-icon" src="../assets/userinfo/img_coin_small.png">
        <span class="gold">18888</span>
      </div>
      <div class="flex-container">
        <img class="add-btn" src="../assets/userinfo/icon_personal_recharge.png">
        <span class="add">充值</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "UserInfo",
      props:["avatar","nickname","showRank"]

    }
</script>

<style lang="scss" scoped>
  .userinfo {
    padding: 0 24px;
    height: 96px;
    .avatar {
      @include wh(48px);
      border-radius: 50%;
    }
    .nickname {
      padding-left: 10px;
      @include size-color(32px,#333,bold)
    }
    .rank-icon,.gold-icon {
      padding-right: 10px;
      @include wh(36px);
    }
    .rank,.gold {
      display: inline-block;
      padding-right: 20px;
      @include size-color(26px,#333,bold)
    }
    .add-btn {
      padding-right: 10px;
      @include wh(24px);
    }
    .add {
      @include size-color(26px,#3462ff)
    }
  }
</style>
