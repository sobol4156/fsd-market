import jwt from 'jsonwebtoken';
export default defineEventHandler(async(event) => {
  const token = getCookie(event, 'token');

  if (!token) {
    return { error: 'Не авторизован' };
  }

  try {
    const decoded = jwt.verify(token, useRuntimeConfig().secretKey);
    return { user: decoded };
  } catch (err) {
    return { error: 'Недействительный токен' };
  }
})