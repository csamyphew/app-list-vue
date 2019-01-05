<template>
  <div class="search">
    <div class="mx-4 my-3">
      <b-form-input v-model="keyword" type="search" @input="search()" :placeholder="'   \uf002 搜尋'"></b-form-input>
    </div>
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
