interface RegisterUserInitial {
  type: "RegisterUserInitialData";
  name: string;
  email: string;
  password: string;
}
interface RegisterUserError {
  type: "RegisterUserError";
  message: string;
}

interface RegisterUserSuccess {
  type: "RegisterUserSuccess";
  message: string;
}
