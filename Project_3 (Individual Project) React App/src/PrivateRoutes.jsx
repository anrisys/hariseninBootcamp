import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {
    const isLoginValid = JSON.parse(localStorage.getItem("user-data")).state
        .isLoginValid;

    return isLoginValid ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
