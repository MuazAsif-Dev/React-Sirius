import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "@/pages";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* AUTH ROUTES (PUBLIC) */}
        {/* 
        <Route element={<AuthLayout />}>
          <Route path="/login">
            <Route index element={<UserLogin />} />
            <Route path="admin" element={<AdminLogin />} />
          </Route>
          <Route path="/register">
            <Route index element={<UserRegister />} />
            <Route path="admin" element={<AdminRegister />} />
          </Route>
          <Route path="/forgot-password">
            <Route index element={<ForgotPass />} />
            <Route path="verify" element={<Verify />} />
            <Route path="reset" element={<Reset />} />
          </Route>
        </Route> */}

        {/* DASHBOARD ROUTES (PRIVATE) */}
        {/* 
        <Route element={<ProtectedRoutes />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard">
              <Route path="overview" element={<Overview />} />
              <Route path="settings" element={<Settings />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
        </Route> */}

        {/* NOT FOUND */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
