<template>
  <div class="free-list container">
    <div class="row" v-if="apps.length>0" >
      <div class="app-item col-12 col-md-6 col-lg-4 my-2" v-for="(item,index) in list" :key="'free-'+index" :id="'free-'+index"
           data-aos="fade-left" :data-aos-delay="50*(index%10)" data-aos-duration="500" data-aos-once="true" 
           :data-aos-anchor="(index<10)?'.app-list':'#free-'+(Math.floor(index/10)*10-3)" data-aos-anchor-placement="top-center">
        <div class="row align-items-center">
          <p class="rank col-2 p-4 col-sm-1 px-sm-0 mb-0">{{item.rank}}</p>
          <div class="col-3 pl-0 px-md-0">
            <img class="icon" :src="item.icon" />
          </div>
          <div class="col-7 col-sm-8 row">
            <p class="name col-12 mb-1">{{item.name}}</p>
            <p class="category col-12 mb-1">{{item.category}}</p>
            <p class="author col-12 mb-0">{{item.author}}</p>
          </div>
        </div>
        <hr />
      </div>
      <infinite-loading @infinite="infiniteHandler" spinner="spiral" :identifier="infiniteId">
        <div slot="no-more"></div>
      </infinite-loading>
    </div>
    <p v-else-if="keyword">沒有符合搜尋條件的結果</p>
    <clip-loader color="#4a4a4a" size="24px" v-else></clip-loader>
  </div>
</template>

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
export default {
  name: 'FreeList',
  props: ['apps', 'keyword'],
  components: {ClipLoader},
  data () {
    return {
      page: 1,
      list: [],
      infiniteId: +new Date(),
    }
  },
  watch: {
    apps: function(newVal) { 
      this.list = newVal.slice(0,10)
      this.page = 1
      this.infiniteId += 1;
    },
    keyword: function(){
      this.page = 1
      this.$scrollTo('.home',{offset: -80})
    }
  },
  methods: {
    infiniteHandler($state) {
      var page = this.page +1
      // console.log('inin', (this.apps.length)>(10*page-10))
      if((this.apps.length)>(10*page-10)){
        var start = 10*page-10
        var end = 10*page
        if((this.apps.length)<=(10*page)){
          end = this.apps.length
        }
        // console.log(page, start, end)
        this.list.push(...this.apps.slice(start,end))
        this.page += 1
        $state.loaded();
      }else{
        $state.complete();
      }
    }
  }
}
</script>