import { userAtom } from '@/atoms/users.atom';
import { useAtom } from 'jotai';
import { Outlet, Navigate } from 'react-router-dom';

export default function AlreadyLoggedIn() {
  const [currentUser, setUser] = useAtom(userAtom);
  return !currentUser ? <Outlet /> : <Navigate to='/dashboard' replace />;
}
// https://www.robinwieruch.de/react-router-private-routes/
