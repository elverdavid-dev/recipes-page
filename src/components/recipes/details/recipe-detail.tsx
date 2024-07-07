import RecipeBreadcrumbs from '@/components/recipes/details/recipe-breadcrumbs'
import IngredientCheckList from '@/components/recipes/details/ingredient-check-list'
import StepChip from '@/components/recipes/details/step-chip'
import RecipeInfoTags from '@/components/recipes/details/recipe-info-tag'
import ImageWrapper from '@/components/shared/common/image-wrapper'
import Subtitle from '@/components/shared/common/subtitle'
import GenerateJsonLD from '@/libs/common/generate-json-LD'
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

	const jsonLd = GenerateJsonLD(recipe)
	return (
		<section className="lg:w-[700px]">
			<RecipeBreadcrumbs name={recipe.name} />

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
					<IngredientCheckList key={i + recipe}>{recipe} </IngredientCheckList>
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
						<StepChip>Paso {i + 1} </StepChip>
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