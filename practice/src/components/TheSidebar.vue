<template>
  <div class="sidebar" v-if="sidebar">
    <span class="sidebar-close" @click="closeSidebar">&times;</span>
    <div class="sidebar-content">
      <p>Добро пожаловать в систему по учету заявок в нашем банке. Здесь Вы найдете исчерпывающу информацию про систему и заявки</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
// import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup () {
  //   const router = useRouter()
    const store = useStore()

    const sidebar = computed(() => store.state.sidebar)

    return {
      sidebar,
      closeSidebar: () => store.commit('CLOSE_SIDEBAR')
    }
  }
}
</script>
