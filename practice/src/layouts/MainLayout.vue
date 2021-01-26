<template>
  <the-navbar />
  <div class="container with-nav">
    <app-message />
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue'
import AppMessage from '@/components/ui/AppMessage.vue'

export default {
  name: 'Home',
  components: {
    TheNavbar,
    AppMessage
  }
}
</script>
