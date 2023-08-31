"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<header>
			<nav className="flex justify-between items-center py-5 px-24 bg-light">
				<Image src="logoFood.svg" alt="logo" width="120" height="40" />
				<div className="flex items-center gap-x-8">
					<Link href="/">Inicio</Link>
					<Link href="/">Recetas</Link>
					<Link href="/">Categorias</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
