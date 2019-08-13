<template>
	<div class="search">
    <input class=" search-input" type="text" placeholder="输入城市或者拼音"/>
	</div>
</template>

<script>
	export default {
		name:'CitySearch'
	}
</script>

<style scoped>
    .search{
			height:.72rem;
			padding: 0 .1rem;
			background: #00bcd4;
		}
		.search-input{
			box-sizing: border-box;
			width:100%;
			padding:0 .1rem;
			text-align: center;
			border-radius:.06rem;
			height:.62rem;
			line-height:.62rem;
			color:#666;
		}
</style>