import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../utils/hooks/useAuth";

export const AuthenticatedRoute = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const location = useLocation();
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  else {
    if (user) return <>{children}</>;
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};
