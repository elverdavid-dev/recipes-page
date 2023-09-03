"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<header>
			<nav className="flex lg:justify-between items-center py-5 lg:px-24 px-4 bg-light">
				<Image src="logoFood.svg" alt="logo" width="120" height="40" />
				<div className="lg:flex hidden items-center gap-x-8 ">
					<Link href="/">Inicio</Link>
					<Link href="/">Recetas</Link>
					<Link href="/">Categorias</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
