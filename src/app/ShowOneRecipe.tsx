"use client";

import { useRouter } from "next/navigation";
import { ChildrenProps } from "./layout";

interface RecipeProps extends ChildrenProps {
  id: string;
}

const ShowOneRecipe = ({ children, id }: RecipeProps) => {
  const router = useRouter();
  console.log(id);
  return (
    <section
      onClick={() => router.push(`/recetas/${id}`)}
      className="cursor-pointer"
    >
      {children}
    </section>
  );
};

export default ShowOneRecipe;
