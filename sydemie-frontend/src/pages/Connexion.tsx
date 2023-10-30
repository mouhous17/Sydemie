import { Input } from "@/components/ui/input";
import Header, { HeaderData } from "@/myComponents/Header";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Footer from "@/myComponents/Footer";

export default function Connexion() {
  const fakeData: HeaderData[] = [
    { value: "A propos" },
    { value: "Connexion " },
    { value: "Inscrivez vous" },
  ];
  return (
    <div style={{ backgroundColor: "#C8D7EE" }}>
      <Header data={fakeData} />

      <div className="w-8/12  mx-auto mb-20  mt-20">
        <div className="flex " style={{ height: "450px" }}>
          <div
            className="w-1/2 border-r border-black  p-14"
            style={{
              background:
                "var(--Dgrad, linear-gradient(215deg, #040F77 3.57%, #132094 32.21%, #2F3EC5 49.28%, #3A48CA 58.33%, #000748 93.99%))",
            }}
          >
            <p className="text-3xl  font-monFont  text-cyan-50 mb-4">
              Inscrivez vous
            </p>
            <p className="mb-5 font-monFont  text-cyan-50 text-xs  opacity-95">
              Des cours de soutien pour une meilleure compréhension, une toute
              nouvelle approche de l’enseignement pour une qualité de cours
              exceptionnel
            </p>
            <p className="mb-5  text-cyan-50 font-monFont  text-xs opacity-95">
              Inscrivez-vous sur SYDEMIE et bénéficiez d’une méthode de travail
              et d’un accompagnement personnalisé.a
            </p>
            <p className="mb-5 font-monFont  text-cyan-50  text-xs opacity-95">
              En vous inscrivant sur SYDEMIE, vous acceptez nos Conditions
              d’utilisation et notre Politique de confidentialité
            </p>
          </div>

          <div className="w-1/2 p-10  flex flex-col  bg-white">
            <div className=" h-5/6 ">
              <div className="grid w-full max-w-sm items-center gap-1.5 mb-3">
                <Label htmlFor="Nom d'utilisateur">Nom d'utilisateur</Label>
                <Input
                  type="text"
                  id="Nom d'utilisateur"
                  placeholder="Nom d'utilisateur"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1 mb-3">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1 mb-3">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" />
              </div>

              <div className=" flex justify-end  w-full max-w-sm items-center gap-1">
                <Button className=" bg-monBleu text-neutral-50  ">
                  S'inscrire
                </Button>
              </div>
            </div>
            <div className=" h-1/6 ">
              <Separator className="my-2 w-10/12 mx-auto max-w-sm " />
              <div className="flex justify-center">
                <p className="mr-2">Vous avez déjà un compte ?</p>
                <div className="text-blue-500 hover:text-blue-800 cursor-pointer ">
                  Se connecter
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
