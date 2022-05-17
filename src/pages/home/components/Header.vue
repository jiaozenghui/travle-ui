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
        <span>{{ $store.state.city }}</span>
        <span class="iconfont arrow-icon">&#xeb6d;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
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
    width: 1.24rem
    float: right
    text-align: center
    font-size: 0
    span
      font-size: .24rem
      color: #fff
    .arrow-icon
      font-size: .2rem
</style>
