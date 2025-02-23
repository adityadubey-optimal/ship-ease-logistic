import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BuyerHomeDesktop from '../screens/buyer/desktop/BuyerHomeDesktop';
import BuyerHomeMobile from '../screens/buyer/mobile/BuyerHomeMobile'

export function BuyerRoutes() {
  const isMobile = window.innerWidth <= 768;
  return (
    <Routes>
      {/* Default fallback: if no sub-route provided, navigate to home */}
      <Route index element={<Navigate to="home" replace />} />
      <Route path="home" element={isMobile ? <BuyerHomeMobile /> : <BuyerHomeDesktop />} />
      {/* Add additional buyer routes as needed */}
    </Routes>
  );
}