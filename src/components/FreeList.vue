<template>
  <div class="free-list container">
    <div class="row justify-content-between align-items-center mb-3 mr-0">
      <h4 class="col-auto">免費</h4>
      <!-- <b-form-select class="col-auto mb-3" v-model="sort" :options="sort_options"/> -->
      <v-select v-model="sort" :options="sort_options" :clearable="false" :searchable="false"></v-select>
    </div>
    <div class="row" v-if="sortedApps.length>0" >
      <div class="app-item col-12 col-md-6 col-lg-4 my-2" v-for="(item,index) in list" :key="'free-'+index" :id="'free-'+index"
           data-aos="fade-left" :data-aos-delay="50*(index%10)" data-aos-duration="500" data-aos-once="true" 
           :data-aos-anchor="(index<10)?'.app-list':'#free-'+(Math.floor(index/10)*10-3)" data-aos-anchor-placement="top-center">
        <div class="row align-items-center">
          <p class="rank col-2 p-4 px-sm-0 mb-0">{{item.rank}}</p>
          <div class="col-3 pl-0 px-md-0">
            <img class="icon" :src="item.icon" @click="openDetail(item.id)" alt="app icon"/>
          </div>
          <div class="col-7 row">
            <p class="name col-12 mb-1" @click="openDetail(item.id)">{{item.name}}</p>
            <p class="category col-12 mb-1">{{item.category}}</p>
            <p class="author col-12 mb-0">{{item.author}}</p>
          </div>
        </div>
        <hr />
      </div>
      <infinite-loading @infinite="infiniteHandler" spinner="spiral" :identifier="infiniteId">
        <div slot="no-more"></div>
        <div slot="no-results"></div>
      </infinite-loading>
    </div>
    <p v-else-if="keyword">沒有符合搜尋條件的結果</p>
    <clip-loader color="#4a4a4a" size="24px" v-else></clip-loader>
  </div>
</template>

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import vSelect from 'vue-select'
export default {
  name: 'FreeList',
  props: ['apps', 'keyword'],
  components: {ClipLoader, vSelect},
  data () {
    return {
      page: 1,
      list: [],
      sortedApps: [],
      infiniteId: +new Date(),
      sort: {value: 'asc-rank', label: '排位(順序)'},
      sort_options: [
        {value: 'asc-rank', label: '排位(順序)'},
        {value: 'desc-rank', label: '排位(倒序)'},
        {value: 'asc-name', label: '名字(順序)'},
        {value: 'desc-name', label: '名字(倒序)'}
      ]
    }
  },
  watch: {
    apps: function(newVal) { 
      this.sortedApps = sortApps(this.sort.value, newVal.slice(0))
    },
    sort: function() {
      this.sortedApps = sortApps(this.sort.value, this.apps.slice(0))
    },
    sortedApps: function(newVal) {
      this.list = newVal.slice(0,10)
      this.page = 1
      this.infiniteId += 1
      // this.$scrollTo('.home',{offset: -80})
    }
  },
  methods: {
    infiniteHandler($state) {
      var page = this.page +1
      if((this.sortedApps.length)>(10*page-10)){
        var start = 10*page-10
        var end = 10*page
        if((this.sortedApps.length)<=(10*page)){
          end = this.sortedApps.length
        }
        this.list.push(...this.sortedApps.slice(start,end))
        this.page += 1
        $state.loaded()
      }else{
        $state.complete()
      }
    },
    openDetail(id){
      this.$store.dispatch('getAppDetail',id)
      this.$modal.show('detail')
    }
  }
}
function sortApps(type,arr){
  switch(type){
    case 'desc-name':
      arr.sort((a,b)=>{
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      })
      break
    case 'asc-name':
      arr.sort((a,b)=>{
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
      break
    case 'desc-rank':
      arr.sort((a,b)=>{
        return b.rank-a.rank
      })
      break
    default:
      arr.sort((a,b)=>{
        return a.rank-b.rank
      })
      break
  }
  return arr
}
</script>