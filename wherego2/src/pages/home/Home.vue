<template>
  <div>
     <HomeHeader/>
		 <HomeSwiper/>
		 <HomeIcons/>
  </div>
</template>

<script>
 import HomeHeader from './components/Header'
 import HomeSwiper from './components/swiper'
 import HomeIcons from './components/icon'
  export default {
    name:'Home',
    components:{
      HomeHeader,HomeSwiper,HomeIcons
    }
   
  }
</script>

<style >

</style>