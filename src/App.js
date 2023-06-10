import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

import { UserProvider } from './contexts/UserContext';

import useToken from './hooks/useToken';

export default function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRouteGuard>
                  <Dashboard />
                </ProtectedRouteGuard>
              }
            >
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}
