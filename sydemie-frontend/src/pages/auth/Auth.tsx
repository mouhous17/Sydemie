import { Toaster } from "@/components/ui/toaster";
import Footer from "@/myComponents/Footer";
import Header, { HeaderData } from "@/myComponents/Header";
import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const Auth: React.FC<AuthLayoutProps> = ({ children }) => {
  const fakeData: HeaderData[] = [
    { value: "A propos" },
    { value: "Connexion " },
    { value: "Inscrivez vous" },
  ];
  return (
    <div className="ez">
      <Toaster />
      <Header data={fakeData} />

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Auth;
