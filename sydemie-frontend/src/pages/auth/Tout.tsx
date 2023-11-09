import React from "react";
import AuthLayout from "./Auth";
import Connexion from "./Connexion";
import Inscription from "./Inscription";

const tout: React.FC = () => {
  return (
    <AuthLayout>
      <Connexion />
      <Inscription />
    </AuthLayout>
  );
};

export default tout;
