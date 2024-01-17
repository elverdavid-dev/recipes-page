import UiImage from '@/components/shared/Image'
import ShowOneRecipe from '@/components/shared/ShowOneRecipe'
import { GetLatestRecipes } from '@/services/GetLatestRecipes'

const AsideSection = async () => {
	const Recipes = await GetLatestRecipes(7)
	return (
		<div className="flex flex-col ">
			<h2 className="font-poppins-bold text-xl py-4">Ultimas recetas </h2>
			<aside className="max-w-sm">
				{Recipes?.map(({ _id, image, name, category, slug }) => (
					<ShowOneRecipe slug={slug} key={_id}>
						<div className="flex items-start gap-x-3 py-3 px-2 group">
							<UiImage
								src={image}
								alt={name}
								width={100}
								height={70}
								className="rounded-md group-hover:scale-105 transition-all w-[100px] h-[70px]"
							/>
							<div>
								<p className="font-poppins-bold">{category.name} </p>
								<h2 className="group-hover:text-gold group-hover:underline transition-all">
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
