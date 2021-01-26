<template>
  <the-navbar />
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue'

export default {
  name: 'Home',
  components: {
    TheNavbar
  }
}
</script>
