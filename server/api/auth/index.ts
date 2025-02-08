import Database from 'better-sqlite3';

const db = new Database('users.db'); 
db.exec(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT, password TEXT);`);

export default defineEventHandler(async(event) => {
  if(event.node.req.method !== 'POST'){
    return {error: 'The methond is not allowed'}
  }

  const body =  await readBody(event)

  const existingUser = db.prepare('SELECT * FROM users WHERE email = ?').get(body.email);
  if (existingUser) {
    return { error: 'Пользователь уже зарегистрирован' };
  }

  const stmt = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)');
  stmt.run(body.email, body.password);

  return { message: 'Пользователь сохранён' };
})