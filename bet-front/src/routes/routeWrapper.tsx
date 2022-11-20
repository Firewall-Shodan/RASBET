import { useAuth } from '~/hooks';
import { Navigate, useLocation } from '~/modules';

const RouteWrapper = ({ isPrivate, element: Element }: RouteWrapperProps) => {
  const { user } = useAuth();

  const location: any = useLocation();

  const from = location.state?.from?.pathname || '/';

  if (!user && isPrivate) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  if (user && !isPrivate) {
    return <Navigate to={from} replace />;
  }

  return <Element />;
};

export default RouteWrapper;
