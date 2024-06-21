import UiImage from '@/components/shared/Image'
import Subtitle from '@/components/shared/Subtitle'
import { getLatestRecipes } from '@/services/recipes/get-latest-recipes'
import Link from 'next/link'

const AsideSection = async () => {
	const Recipes = await getLatestRecipes(7)
	return (
		<div className="flex flex-col ">
			<Subtitle>Ultimas recetas </Subtitle>
			<aside className="max-w-sm">
				{Recipes?.map(({ _id, image, name, category, slug }) => (
					<Link href={`/recetas/${slug}`} key={_id}>
						<div className="flex items-start gap-x-3 py-3 px-2 group">
							<UiImage
								src={image}
								alt={name}
								width={100}
								height={70}
								className="rounded-md group-hover:scale-105 transition-all w-[100px] h-[70px]"
							/>
							<div>
								<p className="font-extrabold">{category.name} </p>
								<h2 className="group-hover:text-gold group-hover:underline transition-all">
									{name}{' '}
								</h2>
							</div>
						</div>
					</Link>
				))}
			</aside>
		</div>
	)
}

export default AsideSection
