<template>
<div v-if="message" :class="['alert', message.type]">
  <p class="alert-title" v-if="title">{{ title }}</p>
  <p>{{ message.value }}</p>
  <span class="alert-close" @click="closeMessage">x</span>
</div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  setup () {
    const store = useStore()

    const titleMap = {
      primary: 'Успешно!',
      danger: 'Ошибка!',
      warning: 'Внимание!'
    }

    const message = computed(() => store.state.message)
    const title = computed(() => {
      return message.value ? titleMap[message.value.type] : null
    })

    function closeMessage () {
      store.commit('CLEAR_MESSAGE')
    }

    return { message, title, closeMessage }
  }
}
</script>
