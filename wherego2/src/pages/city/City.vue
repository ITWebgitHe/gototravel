<template>
	<div>
  <CityHeader/>
	<CitySearch :cities="cities"/>
	<CityList 
	:cities="cities" 
	:hot="hotCities"
	:letter="letter"
	/>
	<CityAlphabet 
	@change="handleLetterChange"
	:cities="cities" />
	</div>
</template>

<script>
  import axios from 'axios'
	import CityHeader from './components/Header'
	import CitySearch from './components/search'
	import CityList from './components/list'
	import CityAlphabet from './components/Alphabet'
  export default {
		name:"City",
		components:{
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		data(){
    return{
			cities:{},
			hotCities:[],
			letter:''

		}
		},
		methods:{
			getCityInfo(){
				axios.get('/api/city.json')
				.then(this.handleGetCityInfoSucc)
			},
			handleGetCityInfoSucc(res){
				res = res.data
				if(res.ret&& res.data){
					const data = res.data
					this.cities = data.cities
					this.hotCities = data.hotCities
				}
			},
			handleLetterChange(letter){
      this.letter=letter
			}
			
		},
		mounted(){
			this.getCityInfo()
		}
	}
</script>

<style scoped>

</style>