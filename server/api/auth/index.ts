import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { createClient } from "@supabase/supabase-js";
const runtimeConfig = useRuntimeConfig();

interface Database {
  public: {
    Tables: {
      users: {
        Row: { id: number; email: string; password: string; gender: string };
        Insert: { email: string; password: string };
        Update: { email?: string; password?: string };
        Relationships: [];
      };
    };
  };
}

const supabase = createClient<Database>(
  runtimeConfig.public.supabaseUrl,
  runtimeConfig.public.supabaseKey
);

const SECRET_KEY = runtimeConfig.secretKey;
const isDev = process.env.NODE_ENV !== "production";

export default defineEventHandler(async (event) => {
  if (event.node.req.method !== "POST") {
    return { error: "The methond is not allowed" };
  }

  const body = await readBody(event);
  const { email, password, login } = body;

  const { data: existingUser, error: findError } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();
  // Вход
  if (login) {
    if (existingUser) {
      const isPasswordValid = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!isPasswordValid) {
        return { error: "Неверный email или пароль" };
      }
      const token = jwt.sign(
        { email: existingUser.email, id: existingUser.id },
        SECRET_KEY,
        {
          expiresIn: "1h"
        }
      );

      setCookie(event, "token", token, {
        httpOnly: true,
        secure: !isDev,
        sameSite: isDev ? "lax" : "strict",
        path: "/",
        maxAge: 3600
      });

      return {
        message: "Вход выполнен",
        status: true
      };
    } else {
      return { error: "Неверный email или пароль" };
    }
  }
  // Регистрация
  else {
    if (existingUser) {
      return { error: "Пользователь уже зарегистрирован" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from("users")
      .insert([{ email, password: hashedPassword }])
      .select("*");

    if (error) {
      return { error: `Ошибка создания пользователя: ${error.message}` };
    }

    const userId = data?.[0]?.id;

    const token = jwt.sign({ email, id: userId }, SECRET_KEY, {
      expiresIn: "1h"
    });

    setCookie(event, "token", token, {
      httpOnly: true,
      secure: !isDev,
      sameSite: isDev ? "lax" : "strict",
      path: "/",
      maxAge: 3600
    });
    return { message: "Пользователь сохранён" };
  }
});
