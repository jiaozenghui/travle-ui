<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="https://img1.qunarzz.com/vs_ceph_b2c_001/0574cf6a-b4f1-4477-b03f-b43999793a1c.png_r_640x420x95_49178e6b.png" />
            <div class="banner-info">
                <div class="banner-title">成都+都江堰+九寨沟黄龙</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe8d2;</span>
                    9
                </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" @close="handleGallaryClose" v-show="showGallary"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      imgs: [
        'https://img1.qunarzz.com/vs_ceph_b2c_001/0574cf6a-b4f1-4477-b03f-b43999793a1c.png_r_1280x840x95_761fdb45.png',
        'https://img1.qunarzz.com/vs_ceph_vs_tts/8682423e-1d4a-45c9-a9e7-3ce2f1ce10a0.jpg_r_1280x840x95_f476ceba.jpg'
      ],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    height: 0
    overflow: hidden
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        font-size: .32rem
        padding: 0 .2rem
        flex: 1
      .banner-number
        padding: 0 .4rem
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        border-radius: .2rem
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
