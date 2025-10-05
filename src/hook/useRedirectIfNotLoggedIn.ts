import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "@tanstack/react-router";

export function useRedirectIfNotLoggedIn() {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate({ to: "/" });
  }, [token, navigate]);
}
