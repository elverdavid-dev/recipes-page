import Image from "@/globalComponents/Image";
import { RiHeartFill } from "react-icons/ri";
interface Props {
  img: string;
  name: string;
}

export default function CardRecipe({ img, name }: Props) {
  return (
    <>
      <article className="flex flex-col justify-center items-center cursor-pointer bg-[#F1F1F1] shadow-lg rounded-xl overflow-hidden h-full">
        <Image
          url={img}
          name={name}
          width={250}
          height={300}
          customStyles=" rounded-full aspect-square py-4"
        />
        <section className="bg-white w-full flex flex-col items-center relative mt-4 py-2 px-4">
          <div
            className="w-full h-[30px] bg-white -top-4 absolute"
            style={{
              clipPath: "ellipse(50% 55%)",
            }}
          />

          <h4 className="font-bold text-xl z-10 text-center">{name}</h4>
          <p className="text-slate-500 font-medium">lorem ipsum</p>
          <div className="flex w-full justify-between mt-2 items-center">
            <span className="font-bold text-2xl">$20.2</span>

            <RiHeartFill size={26} className="text-[#1d1d1d]" />
          </div>
        </section>
      </article>
    </>
  );
}
