"use client";

import { type ChildrenProps } from "@interfaces/ChildrenProps.interface";
import { useRouter } from "next/navigation";

interface Props extends ChildrenProps {
  id: string;
}

const ShowRecipesOneCategory = ({ children, id }: Props) => {
  const router = useRouter();

  return (
    <section
      onClick={() => {
        router.push(`/categorias/${id}`);
      }}
      className="cursor-pointer"
    >
      {children}
    </section>
  );
};

export default ShowRecipesOneCategory;
