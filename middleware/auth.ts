interface User {
  email: string;
  id: number;
  iat: number;
  exp: number;
}
interface ApiResponse {
  user?: User | string | null;
  error?: string;
}
export default defineNuxtRouteMiddleware(async (to, from) => {
  let user: User | null = null;

  try {
    const response = await $fetch<ApiResponse>("/api/me", {
      credentials: "include"
    });

    if (response?.user) {
      user = response.user instanceof Object ? response.user : null;
    } else {
      user = null;
    }
  } catch (error) {
    console.error("Ошибка при получении данных пользователя:", error);
  }

  if (user) {
    if (["/login", "/register"].includes(to.path)) {
      return navigateTo("/profile");
    }
  } else {
    const protectedRoutes = ["/profile"];
    if (protectedRoutes.includes(to.path)) {
      return navigateTo("/login");
    }
  }
});
