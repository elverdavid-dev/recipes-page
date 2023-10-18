'use client'

import { type ChildrenProps } from '@interfaces/ChildrenProps.interface'
import { useRouter } from 'next/navigation'

interface Props extends ChildrenProps {
  id: string
}

// Al darle click a un pais redirigue a la pagina de ver todas las recetas de una pais
const ShowRecipesOneCountry = ({ children, id }: Props) => {
  const router = useRouter()

  return (
    <section
      onClick={() => {
        router.push(`/paises/${id}`)
      }}
      className="cursor-pointer"
    >
      {children}
    </section>
  )
}

export default ShowRecipesOneCountry
