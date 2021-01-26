import { computed, watch } from 'vue'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'

export function useLoginForm () {
  const passwordLength = 6

  const { handleSubmit, isSubmitting, submitCount } = useForm()
  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField('email', yup.string().trim().required('Пожалуйста введите email').email())
  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField('password', yup.string().trim().required('Пожалуйста введите пароль').min(passwordLength, `Минимальная длинна пароля ${passwordLength} символов`))

  const onSubmit = handleSubmit(values => console.log('form:', values))

  const isTooManyAttempts = computed(() => submitCount.value >= 3)

  watch(isTooManyAttempts, value => {
    if (value) {
      setTimeout(() => {
        submitCount.value = 0
      }, 1500)
    }
  })
  return {
    email,
    password,
    eError,
    eBlur,
    pError,
    pBlur,
    onSubmit,
    isSubmitting,
    submitCount,
    isTooManyAttempts
  }
}
