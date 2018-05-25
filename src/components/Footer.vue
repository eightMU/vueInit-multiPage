<template>
  <ul class="footer flex-container">
    <li v-for="item,index in srcs" :key="index">
    <a class="btn-wrap" :href="item.href"><img class="btn" :src="index == i?item.srcActive:item.src"></a>
  </li>
  </ul>
</template>

<script>
    export default {
        name: "bottom",
        data(){
          return {
            i:0,
            srcs:[{
              href:"index.html",
              src:require('@/assets/footer/index.png'),
              srcActive:require('@/assets/footer/index-active.png')
            },{
              href:"shop.html",
              src:require('@/assets/footer/shop.png'),
              srcActive:require('@/assets/footer/shop-active.png')
            },{
              href:"personal.html",
              src:require('@/assets/footer/personal.png'),
              srcActive:require('@/assets/footer/personal-active.png')
            }]
          }

        },
      props:["index"],
      mounted(){
          this.i = this.index;
      }
    }
</script>

<style lang="scss" scoped>
  .btn-wrap {
    display: inline-block;
    .btn {
      width: 160px;
      height: 160px;
    }
  }


</style>
