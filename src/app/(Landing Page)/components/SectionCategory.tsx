"use client";

import { useStore } from "@/context/Store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Carusel from "react-multi-carousel";

const SectionCategory = () => {
	const router = useRouter();
	const { categories, getCategories } = useStore();
	useEffect(() => {
		getCategories();
	}, []);

	const nextpage = (id: string) => {
		router.push(`/categorias/${id}`);
	};
	const Response = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
			partialVisibilityGutter: 500,
		},
		desktop: {
			breakpoint: {
				max: 3000,
				min: 1024,
			},
			items: 4,
			partialVisibilityGutter: 45,
		},
		mobile: {
			breakpoint: {
				max: 464,
				min: 0,
			},
			items: 2,
			partialVisibilityGutter: -90,
		},
		tablet: {
			breakpoint: {
				max: 1024,
				min: 464,
			},
			items: 3,
			partialVisibilityGutter: -30,
		},
	};

	return (
		<section className="mt-32 lg:mx-10 mx-4 my-10">
			<h2 className="Subtitle">Categorias</h2>
			<Carusel
				responsive={Response}
				infinite
				autoPlay
				autoPlaySpeed={5000}
				removeArrowOnDeviceType={["mobile", "tablet"]}
				partialVisbile
			>
				{categories.length === 0 ? (
					<h2>cargando...</h2>
				) : (
					categories.map(({ _id, image, name }) => (
						<div
							key={_id}
							onClick={() => nextpage(_id)}
							onKeyUp={() => nextpage(_id)}
							className="cursor-pointer"
						>
							<img
								src={image}
								alt={name}
								width="200"
								height="200"
								className="rounded-md"
							/>
							<span className="font-rubik block mt-4 ">{name}</span>
						</div>
					))
				)}
			</Carusel>
		</section>
	);
};

export default SectionCategory;
