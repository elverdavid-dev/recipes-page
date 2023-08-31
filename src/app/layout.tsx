import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import Providers from "./providers";
import "./styles/globals.css";

//Metadata
export const metadata: Metadata = {
	title: "Landing page",
	description:
		"Descubre una variedad exquisita de recetas culinarias para todos los gustos y ocasiones. Desde platos clásicos hasta creaciones innovadoras, encuentra inspiración para transformar tus ingredientes en obras maestras gastronómicas. ¡Explora, cocina y degusta la magia de la cocina con nosotros!",
};

//Font
const readexPro = Readex_Pro({
	subsets: ["latin"],
	preload: true,
	display: "swap",
	weight: "400",
	variable: "--readexPro",
});

export interface ChildrenProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: ChildrenProps) {
	return (
		<html lang="en" className={`${readexPro.variable}`}>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
