import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BuyerHomeDesktop from '../screens/buyer/desktop/BuyerHomeDesktop';
import BuyerHomeMobile from '../screens/buyer/mobile/BuyerHomeMobile'
import UrgentTaskBuyerDesktop from '../screens/buyer/desktop/UrgentTask'
import UrgentTaskBuyerMobile from '../screens/buyer/mobile/UrgentTask'
import PoDetailsBuyerDesktop from '../screens/buyer/desktop/PoDetailPage';
import PoDetailsBuyerMobile from '../screens/buyer/mobile/PoDetailsPage';
import DocumentListMobile from '../screens/buyer/mobile/DecoumentationMobile'
import DocumentListDesktop from '../screens/buyer/desktop/DocumentationDesktop';
import ShippingDetailsMobile from '../screens/buyer/mobile/ShippingDetails';
import ShippingDetailsDesktop from '../screens/buyer/desktop/ShippingDetails';
import ShippingReconcilationMobile from '../screens/buyer/mobile/PoReconcilationPage';
import ShippingReconcilationDesktop from '../screens/buyer/desktop/PoReconcilationPage';
export function BuyerRoutes() {
  const isMobile = window.innerWidth <= 768;
  return (
    <Routes>
      {/* Default fallback: if no sub-route provided, navigate to home */}
      <Route index element={<Navigate to="home" replace />} />
      <Route path="home" element={isMobile ? <BuyerHomeMobile /> : <BuyerHomeDesktop />} />
      <Route path="urgentTask" element={isMobile ? <UrgentTaskBuyerMobile /> : <UrgentTaskBuyerDesktop />} />
      <Route path="poDetails/:id" element={isMobile ? <PoDetailsBuyerMobile /> : <PoDetailsBuyerDesktop />} />
      <Route path="documentList" element={isMobile ? <DocumentListMobile /> : <DocumentListDesktop />} />
      <Route path="shippingDetails/:id" element={isMobile ? <ShippingDetailsMobile /> : <ShippingDetailsDesktop />} />
      <Route path="poReconcilation" element={isMobile ? <ShippingReconcilationMobile /> : <ShippingReconcilationDesktop />} />
      {/* Add additional buyer routes as needed */}
    </Routes>
  );
}