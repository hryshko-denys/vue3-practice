<template>
  <app-page back title="Помощь">
    <question-item
      v-for="question in questions"
      :key="question.title"
      :question="question"
    />
  </app-page>
</template>

<script>
import AppPage from '@/components/ui/AppPage'
import QuestionItem from '../components/questions/QuestionItem.vue'
export default {
  components: { AppPage, QuestionItem },
  setup () {
    const questions = [
      { title: 'Что есть в даной системе?', text: 'Тут есть все, для того, чтобы смотреть, какие заявки человек добавлял' },
      { title: 'Как работает авторизация?', text: 'Все реализовано черех Firebase' }
    ]

    return {
      questions
    }
  }
}
</script>
