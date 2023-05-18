import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard";
import { LoginPage } from "../pages/Login";
import { NotFoundPage } from "../pages/NotFound";
import { ProtectedRoutes } from "../pages/ProtectedRoutes";
import { RegisterPage } from "../pages/Register";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route index element={<DashboardPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
