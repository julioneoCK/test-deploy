import { useEffect } from "react";
import "./App.css";
import { Router } from "./router";
import { refreshAccessTokenService } from "./services/refreshAccessToken.service";
import { useSelector } from "react-redux";
import { AppStore } from "./redux/store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAccessToken } from "./redux/states/accessToken";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = useSelector((state: AppStore) => state.accessToken);

  const refreshAccessToken = async () => {
    if (!accessToken) {
      try {
        const { new_access_token } = await refreshAccessTokenService(
          refreshToken!
        );
        dispatch(setAccessToken(new_access_token));
        navigate("/home");
      } catch (error) {
        if (error instanceof Error) {
          if (error.message === "Unauthorized") {
            navigate("/login");
          }
        }
      }
    }
  };

  useEffect(() => {
    refreshAccessToken();
  }, []);
  return <Router />;
}

export default App;
