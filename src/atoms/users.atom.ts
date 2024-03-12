import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

interface User {
  id: number;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  email_verified_at: string;
  created_at: Date;
  updated_at: string;
}

interface AuthData {
  user: User;
  accessToken: string;
}
export const userAtom = atomWithStorage<AuthData | null>('user', null);
