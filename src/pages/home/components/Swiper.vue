<template>
<div class="wrapper">
  <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
      background: #fff
  .wrapper
      width: 100%;
      //一种实现宽高比的实现方式
      //height: 25vw 也是一种实现宽高比的写法，可能兼容性不是很好
      height: 0
      overflow: hidden
      padding-bottom: 25%
      background: #ccc
    .swiper-img
      width: 100%;

</style>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        speed: 1000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>
