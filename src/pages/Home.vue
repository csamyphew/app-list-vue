<template>
  <div class="home">
    <search :onSearch="search"></search>
    <div class="app-list container">
      <p>count: {{filterRecommendationApps.length}}</p>
      <recommendation-list :apps="filterRecommendationApps"></recommendation-list>
      <p>count: {{filterFreeApps.length}}</p>
      <free-list :apps="filterFreeApps"></free-list>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import FreeList from '@/components/FreeList.vue'
import RecommendationList from '@/components/RecommendationList.vue'
export default {
  name: 'Home',
  components: {Search, FreeList, RecommendationList},
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
    this.$store.dispatch('getTopFreeApps')
    this.$store.dispatch('getTopGrossingApps')
  },
  methods: {
    search (keyword) {
      this.keyword = keyword
    }
  }
}
</script>
