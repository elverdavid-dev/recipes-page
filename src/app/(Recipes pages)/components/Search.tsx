import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface Props {
  value: string;
  handleValue: (value: string) => void;
}
const Search = ({ value, handleValue }: Props) => {
  return (
    <section className="flex gap-x-2 mt-16 justify-center mx-4">
      <Input
        size="lg"
        isClearable
        className="lg:w-[500px] font-inter"
        variant="faded"
        value={value}
        onValueChange={handleValue}
        placeholder="Buscar recetas..."
        startContent={<FiSearch className="text-slate-500 text-lg" />}
      />
      {/* <Button size='lg' color='primary'>
        Buscar
      </Button> */}
    </section>
  );
};

export default Search;
