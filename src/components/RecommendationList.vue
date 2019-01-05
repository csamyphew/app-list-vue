<template>
  <div class="recommendation-list container">
    <h4 class="mb-3">推介</h4>
    <slick class="col-12 brand-slider px-0" v-if="apps.length>0" ref="slick" :options="slickOptions">
      <div class="app-item" v-for="(item,index) in apps" :key="'recomm-'+index" :id="'recomm-'+index"
           data-aos="fade-up" :data-aos-delay="200*index" data-aos-duration="700" :data-aos-anchor="'#recomm-'+index+1" data-aos-anchor-placement="top-center">
        <img class="icon mb-2" :src="item.icon" />
        <p class="name mb-0">{{item.name}}</p>
        <p class="category">{{item.category}}</p>
      </div>
    </slick>
    <clip-loader color="#4a4a4a" size="24px" v-else></clip-loader>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
export default {
  name: 'RecommendationList',
  components: {Slick, ClipLoader},
  props: ['apps'],
  data () {
    return {
      slickOptions: {
        slidesToShow: 7.3,
        slidesToScroll: 1,
        infinite: false,
        swipeToSlide: true,
        touchThreshold: 11,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 6.3,
              touchThreshold: 9
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 5.3,
              touchThreshold: 8
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4.3,
              touchThreshold: 7
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3.3,
              touchThreshold: 6
            }
          },
          {
            breakpoint: 415,
            settings: {
              slidesToShow: 2.3,
              touchThreshold: 5
            }
          }
        ]
      }
    }
  }
}
</script>