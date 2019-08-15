<template>
<div class="">
	<div class="banner" @click="handleBannerClick">
     <img 
		 class="banner-img"
		 :src="bannerImg" alt="" />
		 <div class="banner-info">
			 <div class="banner-title">
				{{this.sightName}}
				 </div>
			  <div class="banner-number">
					<span class="iconfont banner-icon">&#xe604;</span>  
					{{this.bannerImgs.length}}
					</div>
					
		 </div>
	</div>
	<fade>
	<CommonGallary 
	@close="handleGallaryClose"
	v-show="showGallary"
	:imgs="bannerImgs"/>
	</fade>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import Fade from 'common/fade/fade'
	export default {
		name:'DetailBanner',
		props:{
			sightName:String,
			bannerImg:String,
			bannerImgs:Array
		},
		components:{
			CommonGallary,
			Fade
		},
		data(){
			return{
				showGallary:false,
			}
		},
		methods:{
			handleBannerClick(){
				this.showGallary=true;
			},
			handleGallaryClose(){
				this.showGallary = false;
			}
		}
	}
</script>

<style scoped>
   .banner{
		 position: relative;
   overflow: hidden;
	 height:0;
	 padding-bottom:55%;
	 }
	 .banner-img{
		 width:100%;
	 }
	 .banner-info{
		 display: flex;
		 position: absolute;
		 left:0;
		 right:0;
		 color:#fff;
		 bottom:0;
		 line-height:.6rem;
		 background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
	 }
	 .banner-title{
		 flex:1;
		 overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
		 font-size:.32rem;
		 padding: 0 .2rem;
	 }
	 .banner-number{
		 margin-top:.14rem;
		 padding:0 .4rem;
		 line-height:.32rem;
		 height:.4rem;
		 border-radius:.2rem;
		 background: rgba(0,0,0,.8);
		 font-size:.24rem;
	 }
	 .banner-icon{
		 font-size:.24rem;
	 }
</style>