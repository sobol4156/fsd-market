export interface LoginData {
  email: string;
  password: string;
  login: boolean;
}

export interface RegisterData {
  email: string;
  gender: string;
  password: string;
  confirmPassword: string;
}

export interface ApiAuth {
  status: boolean;
  message: string;
}
