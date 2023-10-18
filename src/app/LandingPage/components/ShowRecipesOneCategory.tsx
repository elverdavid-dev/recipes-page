'use client'

import { type ChildrenProps } from '@interfaces/ChildrenProps.interface'
import { useRouter } from 'next/navigation'

interface Props extends ChildrenProps {
  id: string
}

// Al darle click a una categoria redirigue a la pagina de ver todas las recetas de una categoria

const ShowRecipesOneCategory = ({ children, id }: Props) => {
  const router = useRouter()

  return (
    <section
      onClick={() => {
        router.push(`/categorias/${id}`)
      }}
      className="cursor-pointer"
    >
      {children}
    </section>
  )
}

export default ShowRecipesOneCategory
