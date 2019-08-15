<template>
<div>
	<div 
	class="item" 
	v-for="(item,index) of list" 
	:key="index">
	 <div class="item-title  border-bottom">
		 <span class="item-title-icon"></span>
		 {{item.title}}
		 </div> 
		 <div v-if="item.children" class="item-children">
			<detail-list :list = "item.children"></detail-list>
		 </div>
	</div></div>
</template>

<script>
	export default {
		name:'DetailList',
		props:{
			list:Array
		}
	}
</script>

<style scoped>
    .item-title{
			line-height: .8rem;
			font-size:.32rem;
			padding:.2rem;
		}
		.item-title-icon{
			display: inline-block;
			height: .36rem;
			position: relative;
			left:.06rem;
			top:.06rem;
			width:.36rem;
			background: url("https://qcommons.qunar.com/headshot/avatar/lg33yjRpX3li.png?l&ssl=true") 0 -.45rem no-repeat;
			margin-right:.1rem;
			background-size:.4rem 3rem;

		}
		.item-children{
			padding:0.2rem;
		}
	
</style>