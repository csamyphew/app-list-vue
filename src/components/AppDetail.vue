<template>
  <modal name="detail" class="app-detail" :scrollable="true" :adaptive="true"
         width="85%" :max-width="800" height="auto">
    <div class="p-4">
      <div class="close-button" @click="$modal.hide('detail')">
        <i class="fas fa-times-circle"></i>
      </div>
      <div class="container content" v-if="Object.keys(app).length!=0">
        <div class="row">
          <div class="d-none d-md-block col-md-3">
            <img class="icon" :src="app.icon" alt="app icon"/>
          </div>
          <div class="row col-12 col-md-9 pr-0">
            <div class="col-12 mb-2 mx-0">
              <div class="col-5 d-md-none pr-0">
                <img class="icon" :src="app.icon" alt="app icon"/>
              </div>
              <div class="row col-7 col-md-12 justify-content-between pr-0">
                <div class="row col-12 col-md-8 pr-0">
                  <p class="col-12 name mb-0 pr-0">{{app.name}}</p>
                  <p class="col-12 author mb-0 pr-0">{{app.author}}</p>
                </div>
                <div class="mt-sm-3 price">
                  <a :href="app.url" target="_blank"><p class="mb-0 text-center">{{app.price}}</p></a>
                </div>
              </div>
            </div>
            <div class="row col-12 justify-content-between">
              <div class="col-auto rating">
                <star-rating v-model="app.rating" :read-only="true" :increment="0.5" 
                            :star-size=20 text-class="attr"></star-rating>
                <p class="caption mb-0">{{app.rating_count}}則評分</p>
              </div>
              <div class="col-auto advisory">
                <p class="attr mb-0">{{app.advisory}}</p>
                <p class="caption mb-0">年齡</p>
              </div>
            </div>
          </div>
        </div>
        
        <hr/>
        <div class="images" v-if="app.images">
          <h5>螢幕截圖</h5>
          <slick class="col-12 px-0" :options="slickOptions" >
            <div v-for="(item,index) in app.images" :key="'g-img'+index">
              <img :src="item" :alt="'screenshot '+index"/>
            </div>
          </slick> 
        </div>
        <hr/>
        <p class="col-12 desc px-0">{{app.desc}}</p>
        <hr/>
        <div class="row mx-0">
          <h5>資料</h5>
          <div class="row col-12 px-0">
            <p class="col-4 label mb-1">類別</p>
            <p class="col-8 value mb-1">{{app.category}}</p>
          </div>
          <div class="row col-12 px-0">
            <p class="col-4 label mb-1">版本</p>
            <p class="col-8 value mb-1">{{app.version}}</p>
          </div>
          <div class="row col-12 px-0">
            <p class="col-4 label mb-1">版本日期</p>
            <p class="col-8 value mb-1">{{app.release_date| moment('YYYY-MM-DD')}}</p>
          </div>
        </div>
      </div>
      <clip-loader color="#4a4a4a" size="24px" v-else></clip-loader>
    </div>
  </modal>
</template>

<script>
import Slick from 'vue-slick'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import _ from 'lodash'
export default {
  name: 'AppDetail',
  components: {Slick, ClipLoader},
  computed: {
    app () {
      return this.$store.state.app
    }
  },
  data () {
    return {
      slickOptions: {
        slidesToShow: 1.1,
        slidesToScroll: 1,
        autoplay: false,
        infinite: false,
        swipeToSlide: true,
        arrows: false,
        variableWidth: true,
        dots: true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              variableWidth: false
            }
          }
        ]
      }
    }
  },
}
</script>
