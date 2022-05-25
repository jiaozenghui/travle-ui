<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-content></detail-content>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailContent: () => import('./components/Content')
  }
}
</script>

<style lang="stylus" scoped>
</style>
