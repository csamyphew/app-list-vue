<template>
  <modal name="detail" class="app-detail" :scrollable="true">
    <button @click="$modal.hide('detail')">
      ❌
    </button>
    <div class="contaier" v-if="Object.keys(app).length!=0">
      <p>{{app.name}}</p>
    </div>
    <clip-loader color="#4a4a4a" size="24px" v-else></clip-loader>
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
  }
}
</script>
