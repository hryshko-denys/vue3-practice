<template>
<h4 v-if="requests.length === 0" class="text-center">Заявок пока нет</h4>
<table v-else class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>ФИО</th>
      <th>Телефон</th>
      <th>Сума</th>
      <th>Статус</th>
      <th>Действия</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(request, index) in requests" :key="request.id">
      <td>{{ index + 1}}</td>
      <td>{{ request.fio }}</td>
      <td>{{ request.phone }}</td>
      <td>{{ currency(request.sum) }}</td>
      <td>
        <app-status :status="request.status" />
      </td>
      <td>
        <router-link v-slot="{ navigate }" custom :to="{ name: 'Request', params: { id: request.id } }">
          <button class="btn" @click="navigate">Открыть</button>
        </router-link>
      </td>
    </tr>
  </tbody>

</table>
</template>

<script>
import { currency } from '@/utils/currency-formater'

import AppStatus from '../ui/AppStatus'

export default {
  props: {
    requests: {
      type: Array,
      required: true
    }
  },
  setup () {
    return { currency }
  },
  components: { AppStatus }
}
</script>

    AppStatus
