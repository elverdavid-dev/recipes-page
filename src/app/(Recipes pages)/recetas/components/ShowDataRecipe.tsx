import { FormatRelativeDate } from '@/(Recipes pages)/functions/FormatRelativeDate'
import { GetRecipeById } from '@/(Recipes pages)/functions/GetRecipeById'
import CheckBoxComponent from '@/(Recipes pages)/recetas/components/CheckBox'
import ChipComponent from '@/(Recipes pages)/recetas/components/Chip'
import ImageComponent from '@/globalComponents/Image'
import { notFound } from 'next/navigation'
import { BiCategory } from 'react-icons/bi'
import { FiCalendar, FiClock, FiList } from 'react-icons/fi'

const ShowDataRecipe = async ({ id }: { id: string }) => {
  const recipe = await GetRecipeById(id)
  if (recipe === undefined) {
    notFound()
  }
  const fechaFormateada = FormatRelativeDate(recipe.createdAt)

  return (
    <section className="lg:w-[700px]">
      <h2 className="font-kanit text-lg text-gold">{recipe.country?.name}</h2>

      {/* Title */}

      <h1 className="font-lora text-3xl text-slate-900 py-3 capitalize">
        {recipe.name}
      </h1>

      {/* Image */}

      <ImageComponent
        src={recipe.image}
        alt={recipe.name}
        width={700}
        height={500}
      />

      {/* Tags */}

      <div className="flex items-center gap-x-10 py-3 font-kanit">
        <span className="Tags">
          <FiCalendar className="text-gold" size={20} /> {fechaFormateada}
        </span>
        <span className="Tags">
          <FiClock className="text-gold" size={20} /> {recipe.duration}
          {' Mins '}
        </span>
        <span className="Tags">
          <BiCategory className="text-gold" size={20} />
          {recipe.category.name}
        </span>
      </div>

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
    </section>
  )
}

export default ShowDataRecipe
