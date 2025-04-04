import React from "react";
import ProtectedRoute from "../ProtectedRoute";

const SettingsPage = () => {
  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div className="w-full h-full">
        <img className="w-full h-full" src="/img/bg.png" alt="" />
      </div>
    </ProtectedRoute>
  );
};

export default SettingsPage;
