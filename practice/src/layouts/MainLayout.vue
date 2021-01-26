<template>
  <the-navbar />
  <div class="home">
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
