<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recomendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      iconList: [],
      recomendList: [],
      weekendList: [],
      swiperList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/data?city=' + this.city).then(
        this.getHomeInfoSucc
      )
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.iconList = res.data.iconList
        this.recomendList = res.data.recomendList
        this.weekendList = res.data.weekendList
        this.swiperList = res.data.swiperList
      }
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.getHomeInfo()
    this.lastCity = this.city
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.getHomeInfo()
      this.lastCity = this.city
    }
  }
}
</script>

<style></style>
