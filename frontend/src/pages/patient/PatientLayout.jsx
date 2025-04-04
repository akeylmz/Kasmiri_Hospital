import React from "react";
import { Outlet } from "react-router-dom";
import ProtectedRoute from "../../ProtectedRoute";

const PatientLayout = () => {
  return (
    <ProtectedRoute allowedRoles={["admin", "patientgroup"]}>
      <div className="w-full h-full flex border border-gray-300">
        <Outlet />
      </div>
    </ProtectedRoute>
  );
};

export default PatientLayout;
