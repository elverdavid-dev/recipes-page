"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const RedirectPageCountry = () => {
  const router = useRouter();
  return (
    <section className="flex justify-center items-center mt-10">
      <Button
        size="lg"
        variant="ghost"
        className="px-12 font-inter"
        onClick={() => router.push("/paises")}
      >
        Ver mas
      </Button>
    </section>
  );
};

export default RedirectPageCountry;
