<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
          <span class="iconfont header-abs-back">&#xe658;</span>
        </router-link>
        <div class="header-fixed" :style="opacityStyle" v-show="!showAbs">
          景点详情
          <router-link to="/">
            <div class="iconfont header-fixed-back">&#xe658;</div>
          </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .iconfont
    font-family: "iconfont" !important;
  .header-abs
    position: absolute
    left: 4px
    top: 4px
    height: 36px;
    line-height: 36px;
    width: 36px
    border-radius: 100%
    text-align: center
    background: rgba(0, 0, 0, 0.5)
    .header-abs-back
      font-size: .3rem
      color: #fff
  .header-fixed
    position: fixed
    top: 0
    left: 0
    right: 0
    height: 44px
    line-height: 44px
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .2rem
    z-index: 99
    .header-fixed-back
      height: .64rem
      text-align: center
      font-size: .3rem
      position: absolute
      top: 0
      left: 0
      color: #fff
</style>
