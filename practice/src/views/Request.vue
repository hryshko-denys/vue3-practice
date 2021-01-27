<template>
  <app-loader v-if="loading" />
  <app-page title="Заявка" back v-else-if="request">
    <p><strong>Имя владельца: </strong>{{ request.fio }}</p>
    <p><strong>Телефон: </strong>{{ request.phone }}</p>
    <p><strong>Сумма: </strong>{{ currency(request.sum) }}</p>
    <p><strong>Статус: </strong>
      <app-status :status="request.status" />
    </p>
  </app-page>
  <h3 v-else class="text-center text-white">
    Заяки с ID = {{ id }} нет
  </h3>
</template>

<script>
import AppPage from '@/components/ui/AppPage'
import AppLoader from '../components/ui/AppLoader.vue'
import AppStatus from '../components/ui/AppStatus.vue'
import { currency } from '@/utils/currency-formater'

import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const route = useRoute()
    const store = useStore()

    const loading = ref(true)
    const request = ref({})
    const id = route.params.id

    onMounted(async () => {
      loading.value = true
      request.value = await store.dispatch('request/loadRequestById', id)
      loading.value = false
    })

    return { loading, request, id, currency }
  },
  components: { AppPage, AppLoader, AppStatus }
}
</script>
