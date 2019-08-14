<template>
	<div>
     <router-link 
		 tag="div" to="/"
		 v-show="showAbs"
		 class="header-abs">
			  <div class="iconfont header-abs-icon">&#xe653;</div>
		 </router-link>
     <div class="header-fixed" 
		 :style="opacityStyle"
		 v-show="!showAbs">
			 <router-link to="/">
			  <div class="iconfont header-fixed-back">&#xe653;</div>
				</router-link>
				景点详情
		 </div>
		 
	</div>
</template>

<script>
	export default {
		name:'DetailHeader',
		data(){
			return{
				showAbs:true,
				opacityStyle:{
					opacity:0
				}
			}
			
		},
		activated(){
		window.addEventListener("scroll",this.handleSCroll)
		},
		deactivated(){
			window.removeEventListener("scroll",this.handleSCroll)
		},
		methods:{
			handleSCroll(){
				const top = document.documentElement.scrollTop
				if( top > 60){
					let opacity = top/140
					opacity = opacity >1 ? 1: opacity
					this.opacityStyle = {
						opacity
					}
					this.showAbs = false
				}else{
					this.showAbs = true
				}
			}
		}
	}
</script>

<style scoped>
	.header-abs{
		position: absolute;
		left:.2rem;
		top:.2rem;
		width:.8rem;
		height:.8rem;
			line-height: .8rem;
		border-radius: .4rem;
		text-align: center;
		background: rgba(0, 0, 0, .8)
	}
	.header-abs-icon{
		color:#fff;
		font-size:.4rem;
		
	}
	 .header-fixed{
			position: fixed;
		
			top:0;
			right:0;
			left:0;
					height:.86rem;
			line-height:.86rem;
			text-align: center;
		  color:#fff;
			font-size:.4rem;
			background: #00bcd4;
		}
		.header-fixed-back{
			position: absolute;
			top:0;
			left:0;
			width:.64rem;
			text-align: center;
			font-size: .4rem;
			color:#fff;
		}
</style>