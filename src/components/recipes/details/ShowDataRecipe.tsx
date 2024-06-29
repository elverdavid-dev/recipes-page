import BreadcrumbsComponent from '@/components/recipes/details/Breadcrumbs'
import CheckBoxComponent from '@/components/recipes/details/CheckBox'
import ChipComponent from '@/components/recipes/details/Chip'
import RecipeInfoTags from '@/components/recipes/details/RecipeInfoTags'
import ImageWrapper from '@/components/shared/Image'
import Subtitle from '@/components/shared/Subtitle'
import GenerateJsonLD from '@/libs/common/GenerateJsonLD'
import { formatDate } from '@/libs/common/format-date'
import { getRecipeBySlug } from '@/services/recipes/get-recipes-by-slug'
import {
	CheckListIcon,
	LeftToRightListNumberIcon,
	Location01Icon,
} from 'hugeicons-react'
import { notFound } from 'next/navigation'

const ShowDataRecipe = async ({ slug }: { slug: string }) => {
	const recipe = await getRecipeBySlug(slug)
	if (recipe === undefined) {
		notFound()
	}
	const dateFormated = formatDate(recipe.createdAt)

	const jsonLd = GenerateJsonLD(recipe)
	return (
		<section className="lg:w-[700px]">
			<BreadcrumbsComponent name={recipe.name} />

			<span className="font-extrabold capitalize text-xl text-gold flex items-center gap-x-1">
				<Location01Icon size={18} strokeWidth={2} />
				{recipe.country?.name}
			</span>

			{/* Title */}

			<h1 className="font-extrabold tracking-tight text-3xl md:text-4xl pb-3 capitalize text-balance">
				{recipe.name}
			</h1>

			{/* Image */}

			<ImageWrapper
				src={recipe.image}
				alt={recipe.name}
				width={700}
				height={500}
				className="w-full h-auto rounded-xl"
			/>

			{/* Tags */}

			<RecipeInfoTags
				date={dateFormated}
				category={recipe.category.name}
				duration={recipe.duration}
				portions={recipe.portions}
			/>

			{/* Description */}

			<article className="text-lg mt-10 text-pretty text-gray-800">
				{recipe.description}
			</article>

			{/* Ingredients */}

			<div className="mt-16 flex items-center gap-x-2">
				<CheckListIcon className="text-gold" size={32} />
				<Subtitle>Ingredientes</Subtitle>
			</div>
			<div className="flex flex-col">
				{recipe.ingredients.map((recipe, i) => (
					<CheckBoxComponent key={i + recipe}>{recipe} </CheckBoxComponent>
				))}
			</div>

			{/* Steps */}

			<div className="mt-16 flex items-center gap-x-2">
				<LeftToRightListNumberIcon className="text-gold" size={32} />
				<Subtitle>Preparación </Subtitle>
			</div>
			<ul className="lg:mb-16">
				{recipe.steps.map((recipe, i) => (
					<li key={i + recipe} className="py-5">
						<ChipComponent>Paso {i + 1} </ChipComponent>
						<p className="pt-3 text-lg text-pretty text-gray-800">{recipe}</p>
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
