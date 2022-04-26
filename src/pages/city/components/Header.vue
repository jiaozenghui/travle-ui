<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe658;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    position: relative
    height: $headerHight
    line-height: $headerHight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-back
      height: .64rem
      text-align: center
      font-size: .6rem
      position: absolute
      top: 0
      left: 0
      color: #fff
</style>
