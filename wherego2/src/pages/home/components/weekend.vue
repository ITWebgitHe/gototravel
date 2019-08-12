<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
			<div class="item-img-wrapper">
        <img class="item-img" :src="item.imgUrl" />
       </div> 
			 <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
         
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HomeWeekend',
  data(){
		return{
			recommendList:[
				{
				id:'0001',
				imgUrl:"//imgs.qunarzz.com/vs_ceph_vs_tts/f9dfeeea-80af-4d5e-8f16-aaea269be925.jpg_r_390x260x90_b6bdedc7.jpg",
				title:'鸽子窝公园',
				desc:'来这里欣赏红日浴海'
			},
				{
				id:'0002',
				imgUrl:"//imgs.qunarzz.com/p/tts0/1606/d6/cb1725fd72a5b39a.jpg_r_390x260x90_6f95a00e.jpg",
				title:'鸽子窝公园',
				desc:'来这里欣赏红日浴海'
			},
				{
				id:'0003',
				imgUrl:"//imgs.qunarzz.com/p/tts5/1806/2b/9db426644fed3d02.jpg_r_480x320x90_b5016bff.jpg",
				title:'鸽子窝公园',
				desc:'来这里欣赏红日浴海'
			},
				{
				id:'0004',
				imgUrl:"//imgs.qunarzz.com/vs_ceph_vs_tts/f37ada1a-d4e5-4706-b8fb-39d4ffdf2e8f.jpg_r_480x320x90_bc91461b.jpg",
				title:'鸽子窝公园',
				desc:'来这里欣赏红日浴海'
			},
			
		
			]
		}
	}
}
</script>

<style  scoped>
 .title{ margin-top: .2rem;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
		color:#000;
		font-weight:bold;
		}
   
   .item-img-wrapper{
		 overflow: hidden;
		 height:0;
		 padding-bottom:33.9%;
	 }
    .item-img{
			width: 100%;
		}
      .item-title{
				 line-height: .54rem;
        font-size: .32rem;
					overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}  
      .item-desc{
				 line-height: .4rem;
        color: #ccc;
					overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
       
     
</style>
