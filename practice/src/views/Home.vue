<template>
  <app-page title="Список заявок">
    <template #header>
      <button class="btn primary" @click="isModalShown = true">Создать</button>
    </template>

    <request-table :requests="requests"></request-table>

    <teleport to="body">
      <app-modal v-if="isModalShown" title="Создать заявку" @close-modal="isModalShown = false">
        <request-modal @created="isModalShown = false" />
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import AppPage from '@/components/ui/AppPage'
import AppModal from '@/components/ui/AppModal'
import RequestTable from '@/components/request/RequestTable'
import RequestModal from '@/components/request/RequestModal'

export default {
  name: 'Home',
  setup () {
    const store = useStore()
    const isModalShown = ref(false)

    const requests = computed(() => store.getters['request/requests'])
    return {
      isModalShown,
      requests
    }
  },
  components: {
    AppPage,
    RequestTable,
    AppModal,
    RequestModal
  }
}
</script>

    RequestTable
