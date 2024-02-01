// ZozaComponent.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@/redux"; // Assurez-vous d'ajuster le chemin en fonction de votre structure de fichiers
import { deleteCookie } from "./cookies/Cookies";
import Verify from "./cookies/Verify";

// Définir le type RootState localement
interface RootState {
  auth: {
    isAuthenticated: boolean;
    // ... autres propriétés du state auth si nécessaire
  };
  // ... autres reducers et leurs propriétés du state si nécessaire
}

interface ZozaComponentProps {}

const ZozaComponent: React.FC<ZozaComponentProps> = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    deleteCookie("token");
    navigate("/auth/connexion");
  };

  return (
    <div>
      {/* Utiliser Verify pour la vérification initiale */}
      <Verify />

      {isAuthenticated ? (
        <div>
          <h2>Bienvenue sur la page Zoza, utilisateur connecté!</h2>
          <button onClick={handleLogout} style={{ backgroundColor: "grey" }}>
            Déconnexion
          </button>
        </div>
      ) : (
        <div>
          <h2>Veuillez vous connecter.</h2>
          {/* Peut-être rediriger vers la page de connexion si non connecté */}
        </div>
      )}
    </div>
  );
};

export default ZozaComponent;
