interface Props {
  img: string
  name: string
}

export default function CardRecipe({ img, name }: Props) {
  return (
    <>
      <article className='flex flex-col justify-center items-center cursor-pointer bg-[#F1F1F1] shadow-lg rounded-xl overflow-hidden max-w-[280px] h-full'>
        <img
          src={img}
          alt={name}
          className='w-4/6 rounded-full aspect-square py-4'
        />
        <section className='bg-white w-full flex flex-col items-center relative mt-4 py-2 px-4'>
          <div
            className='w-full h-[30px] bg-white -top-4 absolute'
            style={{
              clipPath: 'ellipse(50% 55%)'
            }}   
          />
        
          <h4 className='font-bold text-xl z-10 text-center'>{name}</h4>
          <p className='text-slate-500 font-medium'>lorem ipsum</p>
          <div className='flex w-full justify-between mt-2 items-center'>
            <span className='font-bold text-2xl'>$20.2</span>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              className='h-6 w-6'
            >
              <path
                d='M11.9646 6.12856C8.29143 0.454848 0.857147 3.5457 0.857147 9.72628C0.857147 14.3674 11.0491 21.6274 11.9646 22.5714C12.8863 21.6274 22.5714 14.3674 22.5714 9.72628C22.5714 3.59256 15.6446 0.454848 11.9646 6.12856Z'
                fill='#1D1D1D'
                fillOpacity='0.7'
              />
            </svg>
          </div>
        </section>
      </article>
    </>
  )
}
