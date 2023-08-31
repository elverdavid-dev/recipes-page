import type { Metadata } from "next";
import Providers from "./providers";
import "./styles/globals.css";

export const metadata: Metadata = {
	title: "Landing page",
	description:
		"Descubre una variedad exquisita de recetas culinarias para todos los gustos y ocasiones. Desde platos clásicos hasta creaciones innovadoras, encuentra inspiración para transformar tus ingredientes en obras maestras gastronómicas. ¡Explora, cocina y degusta la magia de la cocina con nosotros!",
};

export interface ChildrenProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: ChildrenProps) {
	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
