
export default defineEventHandler((event) => {
  deleteCookie(event, 'token');
  return { message: 'Выход выполнен' };
});
