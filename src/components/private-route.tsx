import { userAtom } from '@/atoms/users.atom';
import { useAtom } from 'jotai';
import { Outlet, Navigate } from 'react-router-dom';
export default function PrivateRoute() {
  const [currentUser, setUser] = useAtom(userAtom);
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' replace />;
}
// https://www.robinwieruch.de/react-router-private-routes/
