'use client'
import { Button, Input } from '@nextui-org/react'
import {useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

interface Props {
  handleValue: (value: string) => void
}
export default function Search({ handleValue }: Props) {
  const [emptyValue, setEmptyValue] = useState('');
  
  const submitSearch = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    //@ts-ignore
    const value = evt.target[0].value
    handleValue(value)
  }
  
  useEffect(() => {
    if(emptyValue === ''){
      handleValue(emptyValue)
    }
  }, [emptyValue])
  return (
    <form
      className='flex gap-x-2 mt-16 justify-center mx-4 items-center'
      onSubmit={submitSearch}
    >
      <Input
        onChange={(e) => {setEmptyValue(e.target.value)}}
        size='lg'
        className='lg:w-[500px] font-inter'
        variant='faded'
        placeholder='Buscar recetas...'
        startContent={<FiSearch className='text-slate-500 text-lg' />}
      />
      <Button type='submit'>Search</Button>
    </form>
  )
}

