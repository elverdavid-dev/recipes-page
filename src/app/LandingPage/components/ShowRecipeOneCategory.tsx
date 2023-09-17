"use client";

import { ChildrenProps } from "@interfaces/ChildrenProps.interface";
import { useRouter } from "next/navigation";

interface Props extends ChildrenProps {
  id: string;
}

const ShowRecipeOneCategory = ({ children, id }: Props) => {
  const router = useRouter();

  return (
    <section
      onClick={() => router.push(`/categorias/${id}`)}
      className="cursor-pointer"
    >
      {children}
    </section>
  );
};

export default ShowRecipeOneCategory;
