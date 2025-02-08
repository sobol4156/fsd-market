import Database from 'better-sqlite3';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
interface User {
  id: number;
  email: string;
  password: string;
}
const runtimeConfig = useRuntimeConfig()

const db = new Database('users.db');
db.exec(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT, password TEXT);`);

const SECRET_KEY = runtimeConfig.secretKey;
// db.prepare('DROP TABLE IF EXISTS users').run(); //удалить db
export default defineEventHandler(async (event) => {
  if (event.node.req.method !== 'POST') {
    return { error: 'The methond is not allowed' }
  }

  const body = await readBody(event)
  const { email, password, login } = body;
  const existingUser = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as User | undefined;

  // Вход
  if (login) {
    if (existingUser) {
      const isPasswordValid = await bcrypt.compare(password, existingUser.password);
      if (!isPasswordValid) {
        return { error: 'Неверный email или пароль' };
      }
      const token = jwt.sign({ email: existingUser.email, id: existingUser.id }, SECRET_KEY, {
        expiresIn: '1h',
      });

      return {
        message: 'Вход выполнен',
        user: { email: existingUser.email },
        token,
      };
    } else {
      return { error: 'Неверный email или пароль' };
    }

  }
  // Регистрация
  else {
    if (existingUser) {
      return { error: 'Пользователь уже зарегистрирован' };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const stmt = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)');
    stmt.run(email, hashedPassword);

    return { message: 'Пользователь сохранён', user: { email } }
  }
})