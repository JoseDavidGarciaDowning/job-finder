import { Redirect } from "react-router-dom";

// src/components/PrivateRoute.tsx

interface PrivateRouteProps {
  children: React.ReactNode;
  allowedRoles: ("applicant" | "company")[];
  userRole: string | null; // por ejemplo, viene del contexto o authService
  isAuthenticated: boolean;
}

export const PrivateRoute = ({
  children,
  allowedRoles,
  userRole,
  isAuthenticated,
}: PrivateRouteProps) => {
  if (!isAuthenticated) {
    return <Redirect to="/login/applicant" />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Redirect to="/login/applicant" />;
  }

  return children;
};
