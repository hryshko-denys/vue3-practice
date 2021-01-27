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
      <td>{{ request.sum }}</td>
      <td>{{ request.status }}</td>
      <td>
        <router-link v-slot="{ navigate }" custom :to="{ name: 'Request', params: { id: request.id } }">
          <button class="btn primary" @click="navigate">Открыть</button>
        </router-link>
      </td>
    </tr>
  </tbody>

</table>
</template>

<script>

export default {
  props: {
    requests: {
      type: Array,
      required: true
    }
  }
}
</script>
