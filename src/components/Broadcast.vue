<template>
  <ul class="broadcast">
    <li class="one-notice" v-for="item in datas">{{item}}</li>
  </ul>
</template>

<script>
	export default {
		name: "Broadcast",
    data(){
		  return {
		    datas:["a","b"]
      }
    }
	}
</script>

<style lang="scss" scoped>
  .broadcast {
    margin: 30px 24px;
    padding: 0 30px;
    height: 70px;
    border-radius: 35px;
    background: #fff3d8;
    overflow: hidden;
    .one-notice {
      @include size-color(26px,#ff910d,normal,70px);
    }
  }
</style>
