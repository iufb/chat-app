import { useContext, useEffect, useState } from "react";
import { getAuthUser } from "../api";
import { AuthContext } from "../context/user.context";

export const useAuth = () => {
  const { user, updateAuthUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const controller = new AbortController();
  useEffect(() => {
    getAuthUser()
      .then(({ data }) => {
        updateAuthUser(data);
        console.log(user);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });

    return controller.abort();
  }, []);
  return { user, loading };
};
