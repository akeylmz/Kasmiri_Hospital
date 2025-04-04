import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useRefreshTokenMutation } from "./store/patient2";
import { useEffect } from "react";
import { setAuth } from "./store/authSlice";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const dispatch = useDispatch();
  const { token, refreshToken } = useSelector((state) => state.auth);
  const [refreshTokenRequest] = useRefreshTokenMutation();

  let userRole;

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      userRole = decodedToken.groups;
    } catch (error) {
      return <Navigate to="/login" />;
    }
  }

  useEffect(() => {
    const getNewAccessToken = async () => {
      if (!refreshToken) return;

      try {
        const response = await refreshTokenRequest(refreshToken).unwrap();
        if (response) {
          dispatch(
            setAuth({
              token: response.access,
              refreshToken: response.refresh,
              user: "user_name",
              role: "user_role",
            })
          );

          localStorage.setItem("accessToken", response.access);
          localStorage.setItem("refreshToken", response.refresh);
        }
      } catch (error) {
        console.error("Yeni token alınırken hata oluştu:", error);
      }
    };

    if (!token && refreshToken) {
      getNewAccessToken();
    }
  }, [token, refreshToken, dispatch, refreshTokenRequest]);

  const roleRedirectMap = {
    leedgroup: "/lead",
    patientgroup: "/patients",
    billgroup: "/billing/patient-list",
    stockgroup: "/stock/overwiev",
    hrgroup: "/human-resources/hierarchy",
  };

  if (!token && !refreshToken) return <Navigate to="/login" />;

  if (
    allowedRoles &&
    userRole &&
    !allowedRoles.some((role) => userRole.includes(role))
  ) {
    const redirectPath = userRole.find((role) => roleRedirectMap[role])
      ? roleRedirectMap[userRole.find((role) => roleRedirectMap[role])]
      : "/";

    return <Navigate to={redirectPath} />;
  }

  return children;
};

export default ProtectedRoute;
