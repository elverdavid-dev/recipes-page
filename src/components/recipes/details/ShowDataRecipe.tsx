import UiImage from '@/components/shared/Image'
import Subtitle from '@/components/shared/Subtitle'
import GenerateJsonLD from '@/libs/common/GenerateJsonLD'
import { formatDate } from '@/libs/common/format-date'
import { getRecipeBySlug } from '@/services/recipes/get-recipes-by-slug'
import { notFound } from 'next/navigation'
import { RiListCheck3, RiListOrdered2 } from 'react-icons/ri'
import BreadcrumbsComponent from './Breadcrumbs'
import CheckBoxComponent from './CheckBox'
import ChipComponent from './Chip'
import RecipeInfoTags from './RecipeInfoTags'

const ShowDataRecipe = async ({ slug }: { slug: string }) => {
	const recipe = await getRecipeBySlug(slug)
	if (recipe === undefined) {
		notFound()
	}
	const fechaFormateada = formatDate(recipe.createdAt)

	const jsonLd = GenerateJsonLD(recipe)
	return (
		<section className="lg:w-[700px]">
			<BreadcrumbsComponent name={recipe.name} />

			<h2 className="font-extrabold capitalize text-xl text-gold">
				{recipe.country?.name}
			</h2>

			{/* Title */}

			<h1 className="font-extrabold tracking-tight text-3xl md:text-4xl text-slate-900 py-3 capitalize text-balance">
				{recipe.name}
			</h1>

			{/* Image */}

			<UiImage
				src={recipe.image}
				alt={recipe.name}
				width={700}
				height={500}
				className="w-full h-auto"
			/>

			{/* Tags */}

			<RecipeInfoTags
				fecha={fechaFormateada}
				category={recipe.category.name}
				duration={recipe.duration}
				portions={recipe.portions}
			/>

			{/* Description */}

			<article className="text-lg  mt-10 text-pretty">
				{recipe.description}
			</article>

			{/* Ingredients */}

			<div className="mt-16 flex items-center gap-x-2">
				<RiListCheck3 className="text-gold" size={32} />
				<Subtitle>Ingredientes</Subtitle>
			</div>
			<div className="flex flex-col">
				{recipe.ingredients.map((recipe, i) => (
					<CheckBoxComponent key={i + recipe}>{recipe} </CheckBoxComponent>
				))}
			</div>

			{/* Steps */}

			<div className="mt-16 flex items-center gap-x-2">
				<RiListOrdered2 className="text-gold" size={32} />
				<Subtitle>Preparación </Subtitle>
			</div>
			<ul className="lg:mb-16">
				{recipe.steps.map((recipe, i) => (
					<li key={i + recipe} className="py-5">
						<ChipComponent>Paso {i + 1} </ChipComponent>
						<p className="pt-3 text-lg text-pretty">{recipe}</p>
					</li>
				))}
			</ul>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
		</section>
	)
}

export default ShowDataRecipe
