import Subtitle from '@/components/shared/common/subtitle'
import CardRecipe from '@/components/shared/recipes-card'
import type { Recipes } from '@/types/recipes/recipes-interface'
import Link from 'next/link'
import type { FC } from 'react'

interface Props {
	recipes: Recipes[]
}

const SectionRecipesLatest: FC<Props> = async ({ recipes }) => {
	return (
		<section className="mt-20 lg:px-16 px-2 2xl:container mx-auto">
			<Subtitle>Ultimas recetas</Subtitle>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5">
				{recipes?.map(({ _id, name, image, duration, portions, slug }) => (
					<Link href={`/recetas/${slug}`} key={_id}>
						<CardRecipe
							img={image}
							name={name}
							duration={duration}
							portions={portions}
						/>
					</Link>
				))}
			</div>
		</section>
	)
}

export default SectionRecipesLatest
