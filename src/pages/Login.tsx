import { ChangeEvent, FormEvent, useState } from "react";
import loginService from "./login.service";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../redux/states/accessToken";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    user: "",
    password: "",
  });

  const setInputData = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const setAcessTokenInState = (accessToken: string) => {
    dispatch(setAccessToken(accessToken));
  };

  const logIntoApp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginEndpointResponse = await loginService(formValues);
    console.log(loginEndpointResponse);

    setAcessTokenInState(loginEndpointResponse.access_token);
    navigate("/home");
  };

  return (
    <form onSubmit={logIntoApp}>
      <input
        type="text"
        name="user"
        id="user"
        placeholder="user"
        onChange={setInputData}
      />
      <input
        type="text"
        name="password"
        id="password"
        placeholder="password"
        onChange={setInputData}
      />
      <button type="submit">Login</button>
    </form>
  );
};
export default Login;
