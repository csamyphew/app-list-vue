<template>
  <div class="recommendation-list">
    <div v-for="(item,index) in apps" :key="'free-'+index">
      <p>{{item.rank}}</p>
      <img :src="item.icon" />
      <p>{{item.name}}</p>
      <p>{{item.category}}</p>
      <p>{{item.author}}</p>
      <p>{{item.summary}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendationList',
  props: ['apps']
}
</script>