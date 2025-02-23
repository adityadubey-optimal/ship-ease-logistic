import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthRoutes } from './AuthRoutes';
import { BuyerRoutes } from './BuyerRoutes';
import { ShipperRoutes } from './ShipperRoutes';
import { ControlTowerRoutes } from './ControlTowerRoutes';
import { ConsigneeRoutes } from './ConsigneeRoutes';
import { CfsReceiverRoutes } from './CfsReceiverRoutes';




export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/buyer/*" element={<BuyerRoutes />} />
        <Route path="/shipper/*" element={<ShipperRoutes />} />
        <Route path="/control-tower/*" element={<ControlTowerRoutes />} />
        <Route path="/consignee/*" element={<ConsigneeRoutes />} />
        <Route path="/cfs-receiver/*" element={<CfsReceiverRoutes />} />
        <Route path="*" element={<AuthRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
