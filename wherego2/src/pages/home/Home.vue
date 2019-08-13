<template>
  <div>
     <HomeHeader :city="city"/>
		 <HomeSwiper :list="swiperList"/>
		 <HomeIcons :list="iconList"/>
		 <HomeRecommend :list="recommendList"/>
		 <HomeWeekend :list="weekendList"/>
		
  </div>
</template>

<script>
 import HomeHeader from './components/Header'
 import HomeSwiper from './components/swiper'
 import HomeIcons from './components/icon'
 import HomeRecommend from './components/Recommend'
 import HomeWeekend from './components/weekend'
 import axios from 'axios'
  export default {
    name:'Home',
    components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
		  HomeWeekend,
		},
		data(){
			return{
				city:'',
				swiperList:[],
				iconList:[],
				recommendList:[],
				weekendList:[]
			}
		},
		methods:{
			getHomeInfo(){
				axios.get('/api/index.json')
				.then(this.getHomeInfoSucc)
			
		},
		getHomeInfoSucc(res){
			res = res.data
			if(res.ret && res.data){
				const data=res.data
				this.city=data.city
				this.swiperList=data.swiperList
				this.iconList = data.iconList
				this.recommendList = data.recommendList
				this.weekendList= data.weekendList
			}
			console.log(res)
		}
		},
		mounted(){
			this.getHomeInfo()
		}
   
  }
</script>

<style >

</style>