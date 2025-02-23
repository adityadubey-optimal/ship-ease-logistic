import React, { use } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginDesktop from '../screens/auth/desktop/LoginDesktop';
import LoginMobile from '../screens/auth/mobile/LoginMobile';
import SignUpDesktop from '../screens/auth/desktop/SignUpDesktop';
import SignUpMobile from '@/screens/auth/mobile/SignUpMobile';
import SigninPage from '../screens/auth/desktop/LoginDesktop';
import SigninPageMobile from '../screens/auth/mobile/LoginMobile';
import { useIsMobile } from '@/hooks/useMobile';

export function AuthRoutes() {
  const isMobile = useIsMobile()
  return (
    <Routes>
      {/* When no sub-route is provided, redirect to "login" */}
      <Route index element={<Navigate to="login" replace />} />
      <Route
        path="login"
        element={isMobile ? <SigninPageMobile /> : <SigninPage />}
      />
      <Route
        path="signup"
        element={isMobile ? <SignUpMobile /> : <SignUpDesktop />}
      />
      {/* Add other auth routes (e.g., signup, OTP, forgot password) below */}
    </Routes>
  );
}