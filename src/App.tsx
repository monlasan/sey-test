// import { Button } from '@/components/ui/button';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AlreadyLoggedIn from './components/already-logged-in';
import PrivateRoute from './components/private-route';
import Ds from './pages/ds.tsx';

// Public/Marketing Pages
import Home from './pages/marketing/Home';
import Notfound from './pages/marketing/Notfound';
import Sessions from './pages/marketing/Sessions.tsx';

// Auth Pages
import SignIn from './pages/auth/login.tsx';
import Dashboard from './pages/dashboard/index.tsx';

// Dashboard Pages

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Marketing/Public pages */}
          <Route element={<AlreadyLoggedIn />}>
            <Route path='/' element={<Home />} />
            <Route path='/sessions' element={<Sessions />} />
            {/* Auth */}
            <Route path='/sign-in' element={<SignIn />} />
          </Route>
          <Route path='/ds' element={<Ds />} />

          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
