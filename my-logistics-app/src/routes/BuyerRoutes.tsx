import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BuyerHomeDesktop from '../screens/buyer/desktop/BuyerHomeDesktop';
import BuyerHomeMobile from '../screens/buyer/mobile/BuyerHomeMobile'
import UrgentTaskBuyerDesktop from '../screens/buyer/desktop/UrgentTask'
import UrgentTaskBuyerMobile from '../screens/buyer/mobile/UrgentTask'
import PoDetailsBuyerDesktop from '../screens/buyer/desktop/PoDetailPage';
import PoDetailsBuyerMobile from '../screens/buyer/mobile/PoDetailsPage';

export function BuyerRoutes() {
  const isMobile = window.innerWidth <= 768;
  return (
    <Routes>
      {/* Default fallback: if no sub-route provided, navigate to home */}
      <Route index element={<Navigate to="home" replace />} />
      <Route path="home" element={isMobile ? <BuyerHomeMobile /> : <BuyerHomeDesktop />} />
      <Route path="urgentTask" element={isMobile ? <UrgentTaskBuyerMobile /> : <UrgentTaskBuyerDesktop />} />
      <Route path="poDetails/:id" element={isMobile ? <PoDetailsBuyerMobile /> : <PoDetailsBuyerDesktop />} />

      {/* Add additional buyer routes as needed */}
    </Routes>
  );
}