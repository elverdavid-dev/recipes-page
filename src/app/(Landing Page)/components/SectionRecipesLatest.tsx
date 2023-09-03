import { GetLatestRecipes } from "../functions/GetLatestRecipes";

const SectionRecipesLatest = async () => {
	const data = await GetLatestRecipes();
	console.log(data);
	return (
		<section className="mt-32 lg:mx-10 mx-4">
			<h2 className="py-5 text-3xl font-readexPro text-gold font-bold">
				Ultimas recetas agregadas
			</h2>
			<div className="grid grid-cols-4 justify-items-center gap-y-5">
				{data?.map(({ _id, name, image }) => (
					<div key={_id}>
						<img
							src={image}
							alt={name}
							width="250"
							height="200"
							className="rounded-md"
						/>
						<span>{name} </span>
					</div>
				))}
			</div>
		</section>
	);
};

export default SectionRecipesLatest;
