import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CFSReceiverCountryByPortDesktop from '../screens/cfsReceiver/desktop/countryByPort'
import CFSReceiverCountryByPortMobile from '../screens/cfsReceiver/mobile/countryByPort'
import CFSReceiverShippingInfoDesktop from '../screens/cfsReceiver/desktop/ShippingInformation'
import CFSReceiverShippingInfoMobile from '../screens/cfsReceiver/mobile/ShippingInformation'
import CFSReceiverShippingCameraMobile from '../screens/cfsReceiver/mobile/cameraScreen'
import CFSReceiverBookingGoodToGoDesktop from '../screens/cfsReceiver/desktop/BookingGoodToGo'
import CFSReceiverBookingGoodToGoMobile from '../screens/cfsReceiver/mobile/BookingGoodToGo'


export function CfsReceiverRoutes() {
  const isMobile = window.innerWidth <= 768;
  // Placeholder route - replace with actual screens
  return (
    <Routes>
      <Route index element={<Navigate to="home" replace />} />
      <Route path="bookingGoodToGo" element={isMobile ? <CFSReceiverCountryByPortMobile /> : < CFSReceiverBookingGoodToGoDesktop />} />
      <Route path="shippingInformation" element={isMobile ? <CFSReceiverShippingInfoMobile /> : < CFSReceiverShippingInfoDesktop />} />
      <Route path="home" element={isMobile ? <CFSReceiverBookingGoodToGoMobile /> : <CFSReceiverCountryByPortDesktop />} />
      <Route path="scan" element={isMobile ? <CFSReceiverShippingCameraMobile /> : <CFSReceiverShippingCameraMobile />} />

    </Routes>
  );
}
