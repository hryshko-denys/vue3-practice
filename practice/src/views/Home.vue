<template>
  <app-loader v-if="loading" />
  <app-page title="Список заявок" v-else>
    <template #header>
      <button class="btn primary" @click="isModalShown = true">Создать</button>
    </template>

    <request-filter v-model="filter" />
    <request-table :requests="requests"></request-table>

    <teleport to="body">
      <app-modal v-if="isModalShown" title="Создать заявку" @close-modal="isModalShown = false">
        <request-modal @created="isModalShown = false" />
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import AppPage from '@/components/ui/AppPage'
import AppModal from '@/components/ui/AppModal'
import AppLoader from '@/components/ui/AppLoader'
import RequestTable from '@/components/request/RequestTable'
import RequestModal from '@/components/request/RequestModal'
import RequestFilter from '@/components/request/RequestFilter'

export default {
  name: 'Home',
  setup () {
    const store = useStore()
    const isModalShown = ref(false)
    const loading = ref(false)
    const filter = ref({})

    const requests = computed(() => store.getters['request/requests']
      .filter(request => {
        if (filter.value.name) {
          return request.fio.includes(filter.value.name)
        }
        return request
      })
      .filter(request => {
        if (filter.value.status) {
          return request.status === filter.value.status
        }
        return request
      }))

    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/loadRequest')
      loading.value = false
    })

    return {
      isModalShown,
      requests,
      loading,
      filter
    }
  },
  components: {
    AppPage,
    RequestTable,
    AppModal,
    RequestModal,
    AppLoader,
    RequestFilter
  }
}
</script>

    RequestTable
