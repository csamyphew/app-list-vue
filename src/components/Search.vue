<template>
  <div class="search">
    <b-form-input v-model="keyword" type="text" placeholder="Search"></b-form-input>
    <b-button variant="success" @click="search()">Press</b-button>
  </div>
</template>

<script>
export default {
  name: 'search',
  props: ['onSearch'],
  data () {
    return {
      keyword: null
    }
  },
  methods: {
    search () {
      this.onSearch(this.keyword)
    }
  }
}
</script>
