<template>
  <div class="free-list container">
    <div class="row" v-if="apps.length>0" >
      <div class="app-item col-12 col-md-6 col-lg-4 my-2" v-for="(item,index) in list" :key="'free-'+index"
           data-aos="fade-left" :data-aos-delay="50*index" data-aos-duration="500" data-aos-once="true">
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
      list: []
    }
  },
  watch: {
    apps: function(newVal) { 
      this.list = newVal.slice(10*this.page-10, 10*this.page) // (0,9)
    }
  }
}
</script>