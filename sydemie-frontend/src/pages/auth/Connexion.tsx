import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router-dom";
import Auth from "./Auth";
import { api } from "@/api/init";
import { useState } from "react";
// import { useToast } from "@/components/ui/use-toast";
// import { setCookie } from "../cookies/Cookies";
import {} from "react-router-dom";
// import { useDispatch } from "react-redux";
import { login } from "@/redux";

export default function Connexion() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [donne, setDonne] = useState({
    email: "",
    password: "",
  });
  // const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("api/auth/connexion", {
        json: donne,
      });
      const responseData: { auth: boolean } = await response.json();

      if (responseData.auth) {
        console.log("Authentification réussie!");
      } else {
        console.log("Échec de l'authentification.");
      }

      // const token = responseData.token;

      // if (token) {
      //   dispatch(login());
      //   navigate("/zoza");
      //   setCookie("token", token, 1);
      // }

      // console.log(responseData.token);
      // toast({
      //   description: responseData.message,
      // });
    } catch (error) {
      console.error("Erreur lors de l'envoi de la requête :", error);
    }
  };

  return (
    <Auth>
      {loading && <div>Chargement en cours...</div>}
      <div style={{ backgroundColor: "#C8D7EE" }}>
        <div className="w-8/12  mx-auto pb-20  pt-20">
          <div className="flex " style={{ height: "450px" }}>
            <div
              className="w-1/2 border-r border-black  p-14"
              style={{
                background:
                  "var(--Dgrad, linear-gradient(215deg, #040F77 3.57%, #132094 32.21%, #2F3EC5 49.28%, #3A48CA 58.33%, #000748 93.99%))",
              }}
            >
              <p className="text-3xl  font-monFont  text-cyan-50 mb-4">
                Se connecter
              </p>
              <p className="mb-5 font-monFont  text-cyan-50 text-xs  opacity-95">
                Ravis de vous retrouver !
              </p>
              <p className="mb-5  text-cyan-50 font-monFont  text-xs opacity-95">
                En vous connectant sur SYDEMIE, vous acceptez nos Conditions
                d’utilisation et notre Politique de confidentialité.
              </p>
            </div>

            <div className="w-1/2 p-10  flex flex-col  bg-white">
              <div className=" h-5/6 ">
                <form onSubmit={handleSubmit}>
                  <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
                    <Label htmlFor="Nom d'utilisateur">Nom d'utilisateur</Label>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Email"
                      onChange={(e) =>
                        setDonne({ ...donne, email: e.target.value })
                      }
                      value={donne.email}
                    />
                  </div>

                  <div className="grid w-full max-w-sm items-center gap-1 mb-3">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      onChange={(e) =>
                        setDonne({ ...donne, password: e.target.value })
                      }
                      value={donne.password}
                    />
                  </div>

                  <div className=" flex justify-end  w-full max-w-sm items-center gap-1">
                    <Button
                      className=" bg-monBleu text-neutral-50  "
                      onSubmit={handleSubmit}
                    >
                      Se connecter
                    </Button>
                  </div>
                </form>
              </div>
              <div className=" h-1/6 ">
                <Separator className="my-2 w-10/12 mx-auto max-w-sm " />
                <div className="flex justify-center">
                  <p className="mr-2">Vous n'avez pas de compte ?</p>
                  <div className="text-blue-500 hover:text-blue-800 cursor-pointer ">
                    <Link to="/auth/inscription">Inscrivez-vous ici</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Auth>
  );
}
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function SignIn() {
//   const [donne, setDonne] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:3000/api/auth/connexion", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(donne),
//       });
//       const data = await res.json();
//       if (data.success === false) {
//         return;
//       }

//       navigate("/");
//     } catch (error) {
//       console.log("first");
//     }
//   };
//   return (
//     <div className="p-3 max-w-lg mx-auto">
//       <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="email"
//           placeholder="Email"
//           id="email"
//           className="bg-slate-100 p-3 rounded-lg"
//           onChange={(e) => setDonne({ ...donne, email: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           id="password"
//           className="bg-slate-100 p-3 rounded-lg"
//           onChange={(e) => setDonne({ ...donne, password: e.target.value })}
//         />
//         <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
//           {" "}
//           se connecte
//         </button>
//       </form>
//       <div className="flex gap-2 mt-5">
//         <p>Dont Have an account?</p>
//         <Link to="/sign-up">
//           <span className="text-blue-500">Sign up</span>
//         </Link>
//       </div>
//     </div>
//   );
// }
