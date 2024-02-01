// AppRoutes.js
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ComposantTest from "./ComponentTest";
import Connexion from "./pages/auth/Connexion";

import Inscription from "./pages/auth/Inscription";
import Zoza from "./pages/Zoza";
import { Provider } from "react-redux";
import { store } from "./redux";

const MainPage = () => {
  return (
    <div>
      <h1 className=" text-pink-800 mb-9"> Bienvenue sur la page principale</h1>
      <div className="flex  flex-col">
        <Link to="auth/connexion" className=" font-semibold ">
          Cliquez ici pour aller à la page{" "}
          <span className="  text-indigo-500"> ./connexion</span>
        </Link>

        <Link to="auth/inscription" className=" font-semibold ">
          Cliquez ici pour aller à page
          <span className="  text-indigo-500"> ./inscription</span>
        </Link>

        <Link to="/test" className=" font-semibold ">
          Cliquez ici pour aller à la page{" "}
          <span className="  text-indigo-500"> ./test</span>
        </Link>
        <Link to="/auth/*" className="font-semibold">
          Cliquez ici pour aller à la page{" "}
          <span className="text-indigo-500">./auth</span>
        </Link>
      </div>
    </div>
  );
}; //  j ai créé une fonction  mainPage pour mettre mes routes principales  dedans ,  puis je les ai  appélés  dans la route main pour les afficher

const AppRoutes = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="auth/connexion" element={<Connexion />} />
        <Route path="auth/inscription" element={<Inscription />} />
        <Route path="/test" element={<ComposantTest />} />
        <Route path="/zoza" element={<Zoza />} />
      </Routes>
    </Provider>
  ); // mon enselble de route
};

export default AppRoutes;
