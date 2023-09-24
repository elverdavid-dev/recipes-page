import Image from "@/globalComponents/Image";

interface Props {
  img: string;
  name: string;
}

export default function CardRecipe({ img, name }: Props) {
  return (
    <>
      <article className="flex flex-col cursor-pointer  group">
        <Image
          url={img}
          name={name}
          width={280}
          height={210}
          customStyles="hover:scale-105 transition-all"
        />
        <span className="font-inter capitalize text-lg text-slate-950 py-2  group-hover:text-gold transition-all">
          {name}
        </span>
      </article>
    </>
  );
}
