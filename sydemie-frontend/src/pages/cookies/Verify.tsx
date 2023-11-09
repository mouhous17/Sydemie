import { Navigate } from "react-router-dom";
import { getCookie } from "./Cookies";

const Verify = () => {
  const valeurDuCookie = getCookie("token");

  if (valeurDuCookie) {
    console.log(`La valeur du cookie 'token' est :`, valeurDuCookie);

    return <Navigate to="/zoza" />;
  } else {
    console.log(`Le cookie 'token' n'a pas été trouvé.`);
  }
};

export default Verify;
