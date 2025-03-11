import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import VendorHomeDesktop from '../screens/vendor/destop/vendorHome'
import VendorHomeMobile from '../screens/vendor/mobile/vendorHome'
import VendorDetailsDesktop from '../screens/vendor/destop/vendorBooking'
import VendorDetailsMobile from '../screens/vendor/mobile/vendorBooking'

export function ShipperRoutes() {
  const isMobile = window.innerWidth <= 768;
  // Placeholder route - replace with actual screens
  return (
    <Routes>
      <Route index element={<Navigate to="home" replace />} />
      <Route path="home" element={isMobile ? < VendorHomeMobile /> : <VendorHomeDesktop />} />
      <Route path="cargo_ready_date" element={isMobile ? < VendorDetailsMobile /> : <VendorDetailsDesktop />} />

    </Routes>
  );
}
