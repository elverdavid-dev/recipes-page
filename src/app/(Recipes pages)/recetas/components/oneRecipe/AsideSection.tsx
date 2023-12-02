import { GetLatestRecipes } from '@/LandingPage/functions/GetLatestRecipes'
import Image from '@/SharedComponents/Image'
import ShowOneRecipe from '@/SharedComponents/ShowOneRecipe'

const AsideSection = async () => {
	const Recipes = await GetLatestRecipes(7)
	return (
		<div className="flex flex-col ">
			<h2 className="font-lora text-xl py-4">Ultimas recetas </h2>
			<aside className="max-w-sm">
				{Recipes?.map(({ _id, image, name, category }) => (
					<ShowOneRecipe id={_id} key={_id}>
						<div className="flex items-start gap-x-3 py-3 px-2 group">
							<Image
								src={image}
								alt={name}
								width={100}
								height={70}
								className="rounded-md group-hover:scale-105 transition-all"
							/>
							<div>
								<p className="font-readexPro">{category.name} </p>
								<h2 className="font-nunito group-hover:text-gold group-hover:underline transition-all">
									{name}{' '}
								</h2>
							</div>
						</div>
					</ShowOneRecipe>
				))}
			</aside>
		</div>
	)
}

export default AsideSection
