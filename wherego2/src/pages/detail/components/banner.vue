<template>
<div class="">
	<div class="banner" @click="handleBannerClick">
     <img 
		 class="banner-img"
		 src="https://imgs.qunarzz.com/p/tts6/1801/32/c971d7ae944fce02.jpg_r_390x260x90_b945d4e1.jpg" alt="" />
		 <div class="banner-info">
			 <div class="banner-title">
				 丽江大理丨海景温泉（西双版纳/香格里拉/泸沽湖
				 </div>
			  <div class="banner-number">
					<span class="iconfont banner-icon">&#xe604;</span>  39</div>
					
		 </div>
	</div>
	<CommonGallary 
	@close="handleGallaryClose"
	v-show="showGallary"
	:imgs="imgs"/>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
	export default {
		name:'DetailBanner',
		components:{
			CommonGallary
		},
		data(){
			return{
				showGallary:false,
				imgs:['http://imgs.qunarzz.com/p/tts2/1801/3d/c700236a32312702.jpg_r_390x260x90_b372c481.jpg',
						'https://imgs.qunarzz.com/p/tts9/1801/b2/c87d7808e48e2202.jpg_r_390x260x90_247961ac.jpg']
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