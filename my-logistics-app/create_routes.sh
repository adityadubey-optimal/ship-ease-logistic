#!/usr/bin/env bash
# create-full-structure.sh
# This script creates a folder structure for a multi-persona application with
# separate routes and screens for desktop and mobile.

SRC="src"

# Define directories to create
declare -a dirs=(
  "$SRC/assets"
  "$SRC/components/shared"
  "$SRC/components/ui"
  "$SRC/context"
  "$SRC/hooks"
  "$SRC/lib"
  "$SRC/routes"
  "$SRC/screens/auth/desktop"
  "$SRC/screens/auth/mobile"
  "$SRC/screens/buyer/desktop"
  "$SRC/screens/buyer/mobile"
  "$SRC/screens/shipper/desktop"
  "$SRC/screens/shipper/mobile"
  "$SRC/screens/controlTower/desktop"
  "$SRC/screens/controlTower/mobile"
  "$SRC/screens/consignee/desktop"
  "$SRC/screens/consignee/mobile"
  "$SRC/screens/cfsReceiver/desktop"
  "$SRC/screens/cfsReceiver/mobile"
  "$SRC/styles"
  "$SRC/theme"
  "$SRC/types"
)

echo "Creating directories under $SRC..."
for dir in "${dirs[@]}"; do
  mkdir -p "$dir"
  echo "Created: $dir"
done

# Create placeholder route files

# AppRoutes.tsx
cat <<'EOF' > "$SRC/routes/AppRoutes.tsx"
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
      </Routes>
    </BrowserRouter>
  );
}
EOF
echo "Created: $SRC/routes/AppRoutes.tsx"

# AuthRoutes.tsx
cat <<'EOF' > "$SRC/routes/AuthRoutes.tsx"
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginDesktop from '../screens/auth/desktop/LoginDesktop';
import LoginMobile from '../screens/auth/mobile/LoginMobile';

export function AuthRoutes() {
  const isMobile = window.innerWidth <= 768;
  return (
    <Routes>
      <Route path="login" element={isMobile ? <LoginMobile /> : <LoginDesktop />} />
      {/* Add other auth routes (signup, OTP, forgot password) */}
    </Routes>
  );
}
EOF
echo "Created: $SRC/routes/AuthRoutes.tsx"

# BuyerRoutes.tsx
cat <<'EOF' > "$SRC/routes/BuyerRoutes.tsx"
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BuyerHomeDesktop from '../screens/buyer/desktop/BuyerHomeDesktop';
import BuyerHomeMobile from '../screens/buyer/mobile/BuyerHomeMobile';

export function BuyerRoutes() {
  const isMobile = window.innerWidth <= 768;
  return (
    <Routes>
      <Route path="home" element={isMobile ? <BuyerHomeMobile /> : <BuyerHomeDesktop />} />
      {/* Add additional buyer routes as needed */}
    </Routes>
  );
}
EOF
echo "Created: $SRC/routes/BuyerRoutes.tsx"

# Create placeholder route files for other personas
for route in ShipperRoutes ControlTowerRoutes ConsigneeRoutes CfsReceiverRoutes; do
  cat <<EOF > "$SRC/routes/${route}.tsx"
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export function ${route}() {
  // Placeholder route - replace with actual screens
  return (
    <Routes>
      <Route path="home" element={<div>${route} Home - Replace with Desktop/Mobile component</div>} />
    </Routes>
  );
}
EOF
  echo "Created: $SRC/routes/${route}.tsx"
done

# Create placeholder auth screen files
cat <<'EOF' > "$SRC/screens/auth/desktop/LoginDesktop.tsx"
import React from 'react';

export default function LoginDesktop() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login - Desktop</h1>
      <p>This is the desktop login screen.</p>
    </div>
  );
}
EOF
echo "Created: $SRC/screens/auth/desktop/LoginDesktop.tsx"

cat <<'EOF' > "$SRC/screens/auth/mobile/LoginMobile.tsx"
import React from 'react';

export default function LoginMobile() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Login - Mobile</h1>
      <p>This is the mobile login screen.</p>
    </div>
  );
}
EOF
echo "Created: $SRC/screens/auth/mobile/LoginMobile.tsx"

# Create placeholder buyer screen files
cat <<'EOF' > "$SRC/screens/buyer/desktop/BuyerHomeDesktop.tsx"
import React from 'react';

export default function BuyerHomeDesktop() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Buyer Home - Desktop</h1>
      <p>This is the buyer home screen for desktop.</p>
    </div>
  );
}
EOF
echo "Created: $SRC/screens/buyer/desktop/BuyerHomeDesktop.tsx"

cat <<'EOF' > "$SRC/screens/buyer/mobile/BuyerHomeMobile.tsx"
import React from 'react';

export default function BuyerHomeMobile() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Buyer Home - Mobile</h1>
      <p>This is the buyer home screen for mobile.</p>
    </div>
  );
}
EOF
echo "Created: $SRC/screens/buyer/mobile/BuyerHomeMobile.tsx"

# Create placeholder App.tsx and main.tsx in src
cat <<'EOF' > "$SRC/App.tsx"
import React from 'react';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return <AppRoutes />;
}
EOF
echo "Created: $SRC/App.tsx"

cat <<'EOF' > "$SRC/main.tsx"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF
echo "Created: $SRC/main.tsx"

echo "Folder structure and placeholder files created successfully."