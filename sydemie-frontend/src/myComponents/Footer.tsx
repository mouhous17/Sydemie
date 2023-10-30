import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col  text-slate-200">
        <div
          className="grid grid-cols-1 gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-5"
          style={{
            background:
              "var(--Dgrad, linear-gradient(215deg, #040F77 3.57%, #132094 32.21%, #2F3EC5 49.28%, #3A48CA 58.33%, #000748 93.99%))",
          }}
        >
          <div className="   p-10 md:col-span-2">
            <div className="flex flex-col ">
              <p className="text-sm mb-3  font-semibold">SYDEMIE</p>
              <p className="  text-xs mb-3 font-monFont">
                Nous nous battons jour et nuit pour rendre l'éducation plus
                accessible et plus ludique.
              </p>
              <p className="  text-xs font-monFont">
                Apprendre et réussir, c'est notre objectif. Que ce soit une
                révision pour un examen, un suivi continu ou une nouvelle
                compétence que vous souhaitez acquérir, vous ne pourrez que
                trouver votre bonheur chez SYDEMIE
              </p>
            </div>
          </div>

          <div className=" p-9 font-monFont  text-sm">
            <ul>
              <li className="mb-4 font-semibold  ">Liens utiles</li>

              <li className="mb-2 text-xs">Protection de l’achteur</li>
              <li className="mb-2 text-xs">Politique de vente</li>
              <li className="mb-2 text-xs">Signaler une infraction</li>
              <li className="mb-2 text-xs">Devenir prof</li>
            </ul>
          </div>
          <div className="p-9 font-monFont text-sm">
            <ul>
              <li className="mb-4 font-semibold  ">Informations</li>
              <li className="mb-2 text-xs">Qui somme nous</li>
              <li className="mb-2 text-xs"> Centre d’aide</li>
              <li className="mb-2 text-xs">FAQ </li>
              <li className="mb-2 text-xs">Avis des utilisateurs</li>

              <li className="mb-2 text-xs">Devenir prof</li>
            </ul>
          </div>
          <div className="p-9 font-monFont text-sm">
            <ul>
              <li className="mb-4 font-semibold  ">Cours</li>
              <li className="mb-2 text-xs">Math</li>
              <li className="mb-2 text-xs"> Physique</li>
              <li className="mb-2 text-xs">Anglais </li>
              <li className="mb-2 text-xs">Français</li>
              <li className="mb-2 text-xs">Voir plus</li>
            </ul>
          </div>
        </div>
        <div
          className="   text-center p-2  "
          style={{ backgroundColor: "#0E0B82" }}
        >
          <p className="text-sm opacity-95">
            Copyright © 2022,
            <span className=" font-semibold text-white"> SYDEMIE</span> . All
            Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
