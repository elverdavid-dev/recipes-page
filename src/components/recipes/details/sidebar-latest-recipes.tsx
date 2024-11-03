import Subtitle from '@/components/shared/common/subtitle'
import { getLatestRecipes } from '@/services/recipes/get-latest-recipes'
import Image from 'next/image'
import Link from 'next/link'

const SidebarLatestRecipe = async () => {
	const Recipes = await getLatestRecipes(7)
	return (
		<div className="flex flex-col">
			<Subtitle>Ultimas recetas </Subtitle>
			<aside className="max-w-sm">
				{Recipes?.map(({ _id, image, name, category, slug }) => (
					<Link href={`/recetas/${slug}`} key={_id}>
						<div className="flex items-start gap-x-3 py-1 group">
							<Image
								src={image}
								alt={name}
								width={100}
								height={70}
								className="rounded-xl group-hover:scale-105 transition-all w-[100px] h-[70px]"
							/>
							<div>
								<h3 className="font-extrabold capitalize group-hover:text-gold group-hover:underline transition-all dark:text-white">
									{name}
								</h3>
								<h2 className="capitalize">{category.name}</h2>
							</div>
						</div>
					</Link>
				))}
			</aside>
		</div>
	)
}

export default SidebarLatestRecipe
