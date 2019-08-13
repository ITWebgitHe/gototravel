<template>
	<div>
  <CityHeader/>
	<CitySearch/>
	</div>
</template>

<script>
	import CityHeader from './components/Header'
	import CitySearch from './components/search'
	export default {
		name:"City",
		components:{
			CityHeader,
			CitySearch
		}
	}
</script>

<style scoped>

</style>