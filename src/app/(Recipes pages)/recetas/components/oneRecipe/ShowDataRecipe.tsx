import { FormatRelativeDate } from '@app/(Recipes pages)/functions/FormatRelativeDate'
import { GetRecipeBySlug } from '@app/(Recipes pages)/functions/GetRecipeBySlug'
import CheckBoxComponent from '@app/(Recipes pages)/recetas/components/oneRecipe/CheckBox'
import ChipComponent from '@app/(Recipes pages)/recetas/components/oneRecipe/Chip'
import GenerateJsonLD from '@libs/GenerateJsonLD'
import { UiImage } from '@shared-components/ui'
import { notFound } from 'next/navigation'
import { FiList } from 'react-icons/fi'
import BreadcrumbsComponent from './Breadcrumbs'
import RecipeInfoTags from './RecipeInfoTags'

const ShowDataRecipe = async ({ slug }: { slug: string }) => {
	const recipe = await GetRecipeBySlug(slug)
	if (recipe === undefined) {
		notFound()
	}
	const fechaFormateada = FormatRelativeDate(recipe.createdAt)

	const jsonLd = GenerateJsonLD(recipe)
	return (
		<section className="lg:w-[700px]">
			<BreadcrumbsComponent name={recipe.name} />
			<h2 className="font-readexPro text-lg text-gold">
				{recipe.country?.name}
			</h2>

			{/* Title */}

			<h1 className="font-lora text-3xl text-slate-900 py-3 capitalize">
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

			<article className="font-nunito text-lg  mt-10">
				{recipe.description}
			</article>

			{/* Ingredients */}

			<div className="mt-16 flex items-center gap-x-2">
				<FiList className="text-gold" size={32} />
				<h2 className="Subtitle">Ingredientes</h2>
			</div>
			<div className="flex flex-col font-nunito">
				{recipe.ingredients.map((recipe, i) => (
					<CheckBoxComponent key={i + recipe}>{recipe} </CheckBoxComponent>
				))}
			</div>

			{/* Steps */}

			<div className="mt-16 flex items-center gap-x-2">
				<FiList className="text-gold" size={32} />
				<h2 className="Subtitle">Pasos </h2>
			</div>
			<ul className="lg:mb-16">
				{recipe.steps.map((recipe, i) => (
					<li key={i + recipe} className="py-5">
						<ChipComponent>Paso {i + 1} </ChipComponent>
						<p className="pt-3 font-nunito text-lg">{recipe}</p>
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
