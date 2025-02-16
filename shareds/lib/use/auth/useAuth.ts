import type { ResponseUser, User } from "./types";

export const useAuth = () => {
  const user = useState<User | null>("user", () => null);

  const fetchUser = async () => {
    const { data } = await useFetch<ResponseUser>("/api/me", {
      credentials: "include"
    });

    if (data.value?.user) {
      user.value = data.value.user;
    } else {
      user.value = null;
    }
  };

  return { user, fetchUser };
};
