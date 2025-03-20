import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ConsigneeCountryByPortDesktop from '../screens/consignee/desktop/countryByPort'
import ConsigneeCountryByPortMobile from '../screens/consignee/mobile/countryByPort'
import ConsigneeShippingInfoDesktop from '../screens/consignee/desktop/ShippingInformation'
import ConsigneeShippingInfoMobile from '../screens/consignee/mobile/ShippingInformation'
import ConsigneeDocumentStatusDesktop from '../screens/consignee/desktop/documentStatus'
import ConsigneeDocumentStatusMobile from '../screens/consignee/mobile/documentStatus'
import ConsigneeBookingGoodToGoDesktop from '../screens/consignee/desktop/BookingGoodToGo'
import ConsigneeBookingGoodToGoMobile from '../screens/consignee/mobile/BookingGoodToGo'

export function ConsigneeRoutes() {
  const isMobile = window.innerWidth <= 768;
  // Placeholder route - replace with actual screens
  return (
    <Routes>
      <Route index element={<Navigate to="countryByPort" replace />} />
      <Route path="documentList" element={isMobile ? <ConsigneeDocumentStatusMobile /> : <ConsigneeDocumentStatusDesktop />} />
      <Route path="bookingGoodToGo" element={isMobile ? <ConsigneeBookingGoodToGoMobile /> : < ConsigneeBookingGoodToGoDesktop />} />
      <Route path="shippingInformation" element={isMobile ? <ConsigneeShippingInfoMobile /> : < ConsigneeShippingInfoDesktop />} />
      <Route path="countryByPort" element={isMobile ? <ConsigneeCountryByPortMobile /> : <ConsigneeCountryByPortDesktop />} />
    </Routes>
  );
}
