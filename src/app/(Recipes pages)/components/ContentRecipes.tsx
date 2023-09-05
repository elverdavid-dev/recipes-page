import { GetAllRecipes } from "../functions/GetAllRecipes";

const ContentRecipes = async () => {
	const data = await GetAllRecipes();
	console.log(data);
	return (
		<>
			<div className="flex items-center justify-between px-5">
				<h2 className="Subtitle">Recetas</h2>
				<span>Total de recetas {data?.totalRecipes} </span>
			</div>
			<section className="mt-16 lg:mx-16 mx-4 grid grid-cols-4 gap-5">
				{!data ? (
					<span>Cargando...</span>
				) : (
					data?.data.map(({ _id, image, name }) => (
						<div key={_id}>
							<img src={image} alt={name} />
							<span>{name} </span>
						</div>
					))
				)}
			</section>
		</>
	);
};

export default ContentRecipes;
