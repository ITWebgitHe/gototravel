<template>
	<div class="icons" >
		<swiper :options="swiperOption" >
			<swiper-slide v-for="(page,index) of pages" :key="index">
    <div class="icon" v-for="item of page" :key="item.id">
			<div class="icon-img">
      <img  class="img-conntent" :src="item.imgUrl">
			</div>
			<p class="icon-desc">{{item.text}}</p>
		</div>
		</swiper-slide>
		
		</swiper>
	</div>
</template>

<script>
	export default {
		name:'HomeIcons',
		data(){
			return{
				swiperOption: {
				 autoplay: 3000,
				loop:true,
       
        pagination: '.swiper-pagination',
     
		},
			iconList:[{
				id:'0001',
				imgUrl:"http://s.qunarzz.com/homenode/images/touchheader/hotel.png",
			  text:"酒店"
			},{
					id:'0002',
				imgUrl:"//s.qunarzz.com/homenode/images/touchheader/flight.png",
				text:"机票"
			},
			{
					id:'0003',
				imgUrl:"//s.qunarzz.com/homenode/images/touchheader/flight.png",
				text:"度假"
			},
			{
					id:'0004',
				imgUrl:"//s.qunarzz.com/homenode/images/touchheader/flight.png",
				text:"火车票"
			},
			{
					id:'0005',
				imgUrl:"//s.qunarzz.com/homenode/images/touchheader/flight.png",
				text:"景点门票"
			},
			{
					id:'0006',
				imgUrl:"//s.qunarzz.com/homenode/images/touchheader/flight.png",
				text:"特事酒店"
			},
			{
					id:'0007',
				imgUrl:"//s.qunarzz.com/homenode/images/touchheader/flight.png",
				text:"海外酒店"
			},
			{
					id:'0008',
				imgUrl:"//s.qunarzz.com/homenode/images/touchheader/flight.png",
				text:"客栈"
			},
			{
					id:'0009',
				imgUrl:"//s.qunarzz.com/homenode/images/touchheader/flight.png",
				text:"客栈"
			}
		
			]	
			}
		},
		computed:{
		pages () {
			const pages = []
			this.iconList.forEach((item,index)=>{
				const page = Math.floor(index / 8)
				if(!pages[page]){
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
		}	
		}
	}
</script>

<style scoped>
.icons >>> .swiper-container{
	height: 0;
		 padding-bottom: 50%;
		 overflow: hidden;
}
  
	 .icon{
		 overflow: hidden;
		 float:left;
		 width:25%;
		 padding-bottom: 25%;
		
		position: relative;
		height:0;
	 }
	  .icon-img{
			 position: absolute;
			 top:0;
			 left:0;
			 right:0;
			 bottom: .44rem;
			
			 box-sizing:border-box;
		 }
		 .img-conntent{
			height: 100%;
			margin:0 auto;
			display: block;
		 }
		 .icon-desc{
			  position: absolute;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			 bottom:0;
			 left:0;
			 right:0;
			 height:.44rem;
			 text-align: center;
			 line-height: .44rem;
			 color:#333;
		 }
</style>