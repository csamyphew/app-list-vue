<template>
  <div class="home">
    <Hello></Hello>
    <p>{{entryCount}}</p>
  </div>
</template>

<script>
import Hello from '@/components/Hello.vue'
export default {
  name: 'Home',
  components: {Hello}
}
</script>
