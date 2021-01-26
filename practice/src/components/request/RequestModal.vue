<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control" :class="{ invalid: fError }">
      <label for="fio">ФИО</label>
      <input type="text" id="fio" v-model="fio" @blur="fBlur">
      <small v-if="fError">{{ fError }}</small>
    </div>

    <div class="form-control" :class="{ invalid: pError }">
      <label for="phone">Телефон</label>
      <input type="tel" id="phone" v-model="phone" @blur="pBlur">
      <small v-if="pError">{{ pError }}</small>

    </div>

    <div class="form-control" :class="{ invalid: sError }">
      <label for="sum">Сумы</label>
      <input type="number" id="sum" v-model.number="sum" @blur="sBlur">
      <small v-if="sError">{{ sError }}</small>

    </div>

    <div class="form-control">
      <label for="status">Статус</label>
      <select id="status" v-model="status">
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>

    <button class="btn primary" type="submit" :disabled="isSubmitting">Создать</button>
    <button class="btn primary" @click="test">Создать</button>
  </form>
</template>

<script>
import { useRequestForm } from '@/use/request-form'
import { useStore } from 'vuex'

export default {
  emits: ['created'],
  setup (_, { emit }) {
    const store = useStore()

    const submit = async values => {
      await store.dispatch('request/createRequest', values)
      emit('created')
    }

    function test () {
      console.log(process.env.VUE_APP_FB_URL, 'process.env.VUE_APP_FB_URL')
    }

    return {
      ...useRequestForm(submit),
      test
    }
  }
}
</script>
