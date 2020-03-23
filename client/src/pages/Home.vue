<template>
  <div class="home">
    <search :onSearch="search"></search>
    <div class="app-list">
      <!-- <p>count: {{filterRecommendationApps.length}}</p> -->
      <recommendation-list :apps="filterRecommendationApps" :keyword="keyword"></recommendation-list>
      <hr/>
      <!-- <p>count: {{filterFreeApps.length}}</p> -->
      <free-list :apps="filterFreeApps" :keyword="keyword"></free-list>
      <app-detail />
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import FreeList from '@/components/FreeList.vue'
import RecommendationList from '@/components/RecommendationList.vue'
import AppDetail from '@/components/AppDetail.vue'
export default {
  name: 'Home',
  components: {Search, FreeList, RecommendationList, AppDetail},
  data () {
    return {
      keyword: null
    }
  },
  computed: {
    filterFreeApps () {
      return this.$store.getters.filterFreeApps(this.keyword)
    },
    filterRecommendationApps () {
      return this.$store.getters.filterRecommendationApps(this.keyword)
    }
  },
  created () {
    this.$store.dispatch('getTopGrossingApps')
    this.$store.dispatch('getTopFreeApps')
  },
  methods: {
    search (keyword) {
      this.keyword = keyword
    }
  }
}
</script>
