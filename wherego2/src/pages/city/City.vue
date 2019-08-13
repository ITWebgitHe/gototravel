<template>
	<div>
  <CityHeader/>
	<CitySearch/>
	<CityList/>
	<CityAlphabet/>
	</div>
</template>

<script>
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
		}
	}
</script>

<style scoped>

</style>