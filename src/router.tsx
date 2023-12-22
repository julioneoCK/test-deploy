import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { AppGuard } from "./guards/app.guard";
import PrivatePage from "./pages/PrivatePage";
import AnotherPrivatePage from "./pages/AnotherPrivatePage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"home"} />} />
      <Route path="login" element={<Login />} />
      <Route element={<AppGuard />}>
        <Route path="/home" element={<PrivatePage />} />
        <Route path="/profile" element={<AnotherPrivatePage />} />
      </Route>
    </Routes>
  );
};
