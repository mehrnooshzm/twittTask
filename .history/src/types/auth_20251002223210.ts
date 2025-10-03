export type LoginFormValues = {
  username: string;
  password: string;
};
export type RegisterFormValues = {
  username: string;
  password: string;
  email?: string;
  firstname?: string;
  lastname?: string;
};

export type LoginResponse = {
  token: string;
};
