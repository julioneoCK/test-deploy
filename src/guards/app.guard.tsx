import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Navigate, Outlet } from "react-router-dom";

export const AppGuard = () => {
  const accessToken = useSelector((store: AppStore) => store.accessToken);
  return accessToken ? <Outlet /> : <Navigate to={"/login"} />;
};
