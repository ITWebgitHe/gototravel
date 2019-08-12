<template>
  <div>
     <HomeHeader/>
		 <HomeSwiper/>
		 <HomeIcons/>
		 <HomeRecommend/>
		 <HomeWeekend/>
		
  </div>
</template>

<script>
 import HomeHeader from './components/Header'
 import HomeSwiper from './components/swiper'
 import HomeIcons from './components/icon'
 import HomeRecommend from './components/Recommend'
 import HomeWeekend from './components/weekend'
 
  export default {
    name:'Home',
    components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
		  HomeWeekend,
    }
   
  }
</script>

<style >

</style>