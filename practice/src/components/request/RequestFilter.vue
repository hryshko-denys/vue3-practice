<template>
<div class="filter">
  <div class="form-control">
    <input type="text" placeholder="Введите имя" v-model="name">
  </div>

  <div class="form-control">
    <select :value="modelValue" v-model="status">
      <option disabled selected>Выберите статус</option>
      <option value="done">Завершен</option>
      <option value="cancelled">Отменен</option>
      <option value="active">Активен</option>
      <option value="pending">Выполняется</option>
    </select>
  </div>
  <button class="btn warning" v-if="isFilterActive" @click="reset">Очистить</button>
</div>
</template>

<script>
import { ref, watch, computed } from 'vue'

export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],
  setup (_, { emit }) {
    const name = ref()
    const status = ref()

    watch([name, status], values => {
      emit('update:modelValue', {
        name: values[0],
        status: values[1]
      })
    })

    const isFilterActive = computed(() => name.value || status.value)

    return {
      name,
      status,
      isFilterActive,
      reset: () => {
        name.value = ''
        status.value = null
      }
    }
  }
}
</script>
