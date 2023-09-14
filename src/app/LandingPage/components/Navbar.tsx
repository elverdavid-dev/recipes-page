"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<header>
			<nav className="flex lg:justify-between items-center bg-light py-5 lg:px-24 px-4">
				<Image src="logoFood.svg" alt="logo" width="120" height="40" />
				<div className="lg:flex hidden items-center gap-x-8 font-rubik">
					<Link href="/" className="hover:text-gold transition-all">
						Inicio
					</Link>
					<Link href="/recetas" className="hover:text-gold transition-all">
						Recetas
					</Link>
					<Link href="/" className="hover:text-gold transition-all">
						Categorias
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
