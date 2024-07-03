import ImageWrapper from '@/components/shared/Image'
import Subtitle from '@/components/shared/Subtitle'
import { getLatestRecipes } from '@/services/recipes/get-latest-recipes'
import Link from 'next/link'

const AsideSection = async () => {
	const Recipes = await getLatestRecipes(7)
	return (
		<div className="flex flex-col">
			<Subtitle>Ultimas recetas </Subtitle>
			<aside className="max-w-sm">
				{Recipes?.map(({ _id, image, name, category, slug }) => (
					<Link href={`/recetas/${slug}`} key={_id}>
						<div className="flex items-start gap-x-3 py-1 group">
							<ImageWrapper
								src={image}
								alt={name}
								width={100}
								height={70}
								className="rounded-xl group-hover:scale-105 transition-all w-[100px] h-[70px]"
							/>
							<div>
								<h2 className="font-extrabold capitalize">{category.name}</h2>
								<h3 className="text-gray-700 capitalize group-hover:text-gold group-hover:underline transition-all">
									{name}
								</h3>
							</div>
						</div>
					</Link>
				))}
			</aside>
		</div>
	)
}

export default AsideSection
