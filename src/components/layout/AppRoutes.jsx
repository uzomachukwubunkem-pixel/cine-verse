import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../../pages/home-page";
import AuthPage from "../../pages/auth-page";
import Error404 from "../../pages/error-404";
import SignupForm from "../auths/SignupForm";
import SigninForm from "../auths/SigninForm";
import VerificationForm from "../auths/VerificationForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route
        path="/get-started/auth"
        element={<Navigate to="/get-started/auth/sign-in" />}
      />
      <Route path="/" element={<HomePage />} />
      <Route path="/get-started/auth" element={<AuthPage />}>
        <Route path="sign-up" element={<SignupForm />} />
        <Route path="sign-in" element={<SigninForm />} />
        <Route path="verify" element={<VerificationForm />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
