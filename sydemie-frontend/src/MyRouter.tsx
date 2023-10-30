// AppRoutes.js
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ComposantTest from "./ComponentTest";
import Connexion from "./pages/Connexion";

const MainPage = () => {
  return (
    <div>
      <h1 className=" text-pink-800 mb-9"> Bienvenue sur la page principale</h1>
      <div className="flex  flex-col">
        <Link to="/connexion" className=" font-semibold ">
          Cliquez ici pour aller à la page{" "}
          <span className="  text-indigo-500"> ./connexion</span>
        </Link>

        <Link to="/inscription" className=" font-semibold ">
          Cliquez ici pour aller à page
          <span className="  text-indigo-500"> ./inscription</span>
        </Link>

        <Link to="/admin" className=" font-semibold ">
          Cliquez ici pour aller à la page{" "}
          <span className="  text-indigo-500"> ./test</span>
        </Link>
      </div>
    </div>
  );
}; //  j ai créé une fonction  mainPage pour mettre mes routes principales  dedans ,  puis je les ai  appélés  dans la route main pour les afficher

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/connexion" element={<Connexion />} />
      {/* <Route path="/moncomposant" element={<MonComposant />} /> */}
      <Route path="/admin/*" element={<ComposantTest />} />
    </Routes>
  ); // mon enselble de route
};

export default AppRoutes;
