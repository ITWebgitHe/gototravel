<template>
	<div class="header">
      城市选择
			<router-link to="/">
			<div class="iconfont back-icon">&#xe653;</div>
	</router-link>
	</div>
</template>

<script>
	export default {
		name:"CityHeader"
	}
</script>

<style scoped>
    .header{
			position: relative;
			overflow: hidden;
			height:.86rem;
			line-height:.86rem;
			text-align: center;
		  color:#fff;
			font-size:.4rem;
			background: #00bcd4;
		}
		.back-icon{
			position: absolute;
			top:0;
			left:0;
			width:.64rem;
			text-align: center;
			font-size: .4rem;
			color:#fff;
		}
</style>