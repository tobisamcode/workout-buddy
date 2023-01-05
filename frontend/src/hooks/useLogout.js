import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // remove user from the global state
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
