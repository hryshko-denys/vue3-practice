<template>
  <app-loader v-if="loading" />
  <app-page title="Заявка" back v-else-if="request">
    <p><strong>Имя владельца: </strong>{{ request.fio }}</p>
    <p><strong>Телефон: </strong>{{ request.phone }}</p>
    <p><strong>Сумма: </strong>{{ currency(request.sum) }}</p>
    <p><strong>Статус: </strong>
      <app-status :status="request.status" />
    </p>

    <div class="form-control">
      <label for="status">Статус</label>
      <select id="status" v-model="status">
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>

    <button class="btn danger" @click="removeRequest">Удалить</button>
    <button class="btn" @click="updateRequest" v-if="hasChanges">Обновить</button>
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

import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()

    const loading = ref(true)
    const request = ref({})
    const status = ref()
    const id = route.params.id

    onMounted(async () => {
      loading.value = true
      request.value = await store.dispatch('request/loadRequestById', id)
      status.value = request.value?.status
      loading.value = false
    })

    async function removeRequest () {
      await store.dispatch('request/deleteRequestById', id)
      router.push('/')
    }

    async function updateRequest () {
      const data = { ...request.value, status: status.value, id }
      await store.dispatch('request/updateRequestById', data)
      request.value.status = status.value
    }

    const hasChanges = computed(() => request.value.status !== status.value)

    return {
      loading,
      request,
      id,
      currency,
      removeRequest,
      updateRequest,
      status,
      hasChanges
    }
  },
  components: { AppPage, AppLoader, AppStatus }
}
</script>
