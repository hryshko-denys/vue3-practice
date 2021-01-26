<template>
  <app-page title="Список заявок">
    <template #header>
      <button class="btn primary" @click="isModalShown = true">Создать</button>
    </template>

    <request-table :requests="[]"></request-table>

    <teleport to="body">
      <app-modal v-if="isModalShown" title="Создать заявку" @close-modal="isModalShown = false">
        <request-modal />
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import { ref } from 'vue'

import AppPage from '@/components/ui/AppPage'
import AppModal from '@/components/ui/AppModal'
import RequestTable from '@/components/request/RequestTable'
import RequestModal from '@/components/request/RequestModal'

export default {
  name: 'Home',
  setup () {
    const isModalShown = ref(true)
    return {
      isModalShown
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
