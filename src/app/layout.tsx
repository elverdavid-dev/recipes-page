import type { Metadata } from "next";
import { Kanit, Readex_Pro, Rubik } from "next/font/google";
import "react-multi-carousel/lib/styles.css";
import Providers from "./providers";
import "./styles/globals.css";

export interface ChildrenProps {
  children: React.ReactNode;
}
//Metadata
export const metadata: Metadata = {
  title: "Landing page",
  description:
    "Descubre una variedad exquisita de recetas culinarias para todos los gustos y ocasiones. Desde platos clásicos hasta creaciones innovadoras, encuentra inspiración para transformar tus ingredientes en obras maestras gastronómicas. ¡Explora, cocina y degusta la magia de la cocina con nosotros!",
};

//Font

const kanit = Kanit({
  subsets: ["latin"],
  preload: true,
  display: "auto",
  weight: "500",
  style: "normal",
  variable: "--kanit",
});

const rubik = Rubik({
  subsets: ["latin"],
  preload: true,
  display: "auto",
  weight: "400",
  style: "normal",
  variable: "--rubik",
});

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" className={` ${kanit.variable} ${rubik.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
