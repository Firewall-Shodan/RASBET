import { useMemo } from 'react';

import { useAppSelector } from './store';

export const useAuth = () => {
  const user = useAppSelector((state) => state.auth.user);

  return useMemo(() => ({ user }), [user]);
};
