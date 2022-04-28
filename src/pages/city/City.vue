<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list v-if="renderList"
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    >
    </city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      renderList: false,
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/cities').then(
        this.handleGetCityInfoSucc
      )
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.renderList = true
        this.cities = res.data.cities
        this.hotCities = res.data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style scoped></style>
