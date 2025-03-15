import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CFSHomeScreenDesktop from '../screens/controlTower/desktop/Home'
import CFSHomeScreenMobile from '../screens/controlTower/mobile/Home'
import CFSDocumentListScreenDesktop from '../screens/controlTower/desktop/DocumentStatusControl'
import CFSDocumentListScreenMobile from '../screens/controlTower/mobile/DocumentStatusControl'
import CFSBookinGoodToGoScreenDesktop from '../screens/controlTower/desktop/BookingGoodToGo'
import CFSBookinGoodToGoScreenMobile from '../screens/controlTower/mobile/BookingGoodToGo';
import CFSShippingInformationDesktop from '../screens/controlTower/desktop/ShippingInformation';
import CFSShippingInformationMobile from '../screens/controlTower/mobile/ShippingInformation';
import CFSCountryByPortMobile from '../screens/controlTower/mobile/countryByPort';
import CFSCountryByPortDesktop from '../screens/controlTower/desktop/countryByPort';
export function ControlTowerRoutes() {
  const isMobile = window.innerWidth <= 768;

  // Placeholder route - replace with actual screens
  return (
    <Routes>
      <Route index element={<Navigate to="home" replace />} />
      <Route path="home" element={isMobile ? <CFSHomeScreenMobile /> : <CFSHomeScreenDesktop />} />
      <Route path="documentList" element={isMobile ? <CFSDocumentListScreenMobile /> : <CFSDocumentListScreenDesktop />} />
      <Route path="bookingGoodToGo" element={isMobile ? <CFSBookinGoodToGoScreenMobile /> : < CFSBookinGoodToGoScreenDesktop />} />
      <Route path="shippingInformation" element={isMobile ? <CFSShippingInformationMobile /> : < CFSShippingInformationDesktop />} />
      <Route path="countryByPort" element={isMobile ? <CFSCountryByPortMobile /> : <CFSCountryByPortDesktop />} />
    </Routes>
  );
}
