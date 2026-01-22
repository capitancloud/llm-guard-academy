import { useState, useEffect, ReactNode } from "react";
import { isAuthenticated } from "@/lib/auth";
import { LoginPage } from "./LoginPage";

interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    setIsAuth(isAuthenticated());
  }, []);

  // Loading state
  if (isAuth === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  // Not authenticated
  if (!isAuth) {
    return <LoginPage onAuthenticated={() => setIsAuth(true)} />;
  }

  // Authenticated
  return <>{children}</>;
}
