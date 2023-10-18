'use client'
import { Button, Input } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

interface Props {
  handleValue: (value: string) => void
}
export default function Search({ handleValue }: Props) {
  const [emptyValue, setEmptyValue] = useState('')

  useEffect(() => {
    if (emptyValue === '') {
      handleValue(emptyValue)
    }
  }, [emptyValue])
  return (
    <div className="flex gap-x-2 mt-16 justify-center mx-4 items-center">
      <Input
        value={emptyValue}
        onValueChange={setEmptyValue}
        isClearable
        size="lg"
        className="lg:w-[500px] font-nunito"
        variant="faded"
        placeholder="Buscar recetas..."
        startContent={<FiSearch className="text-slate-500 text-lg" />}
      />
      <Button
        type="submit"
        size="lg"
        onClick={() => {
          handleValue(emptyValue)
        }}
      >
        Buscar
      </Button>
    </div>
  )
}
