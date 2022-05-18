<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe658;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe600;</span>
      输入城市/景点/游戏主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span>{{ city }}</span>
        <span class="iconfont arrow-icon">&#xeb6d;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    display: flex
    line-height: $headerHight
    background: $bgColor
    color: #fff
  .header-left
    width: 0.64rem
    float: left
    .back-icon
      text-align: center;
      font-size: .6rem
      display: block
  .header-input
    flex: 1
    background: #fff
    border-radius: .1rem
    margin-top: .12rem
    height: .64rem
    line-height: .64rem
    margin-left: .1rem
    color: #ccc
    padding-left: .2rem
  .header-right
    min-width: 1.04rem
    padding: 0 .1rem
    float: right
    text-align: center
    font-size: 0
    span
      font-size: .24rem
      color: #fff
    .arrow-icon
      font-size: .2rem
</style>
