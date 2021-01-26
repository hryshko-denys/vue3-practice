const errorCodes = {
  EMAIL_NOT_FOUND: 'Пользователь с таким email не был найден',
  INVALID_PASSWORD: 'Пароль неверный',
  auth: 'Пожалуйста, войдите в систему'
}

export function error (code) {
  return errorCodes[code] ? errorCodes[code] : 'Неизвестная ошибка'
}
