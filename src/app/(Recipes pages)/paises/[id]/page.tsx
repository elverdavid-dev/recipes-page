import { ParamProps } from "@/interfaces/ParamProps.interface";

const page = ({ params }: ParamProps) => {
  const id = params.id;
  return (
    <>
      <h1 className="text-center mt-10">
        {" "}
        Mostrar todas las recetas de 1 pais
      </h1>
    </>
  );
};

export default page;
