"use client";

import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
const Search = () => {
	const [value, setValue] = useState("");

	return (
		<section className="flex gap-x-2 mt-16 justify-center mx-4">
			<Input
				size="lg"
				isClearable
				className="lg:w-[500px] font-rubik"
				variant="faded"
				value={value}
				onValueChange={setValue}
				placeholder="Buscar recetas..."
				startContent={<FiSearch className="text-slate-500 text-lg" />}
			/>
			<Button size="lg" color="primary">
				Buscar
			</Button>
		</section>
	);
};

export default Search;
