import Image from 'next/image'

const NotFound = ({ description }: { description: string | undefined }) => {
  return (
    <section className="mx-auto">
      <Image
        src="/404/404-notFound.svg"
        alt="404 not found"
        width={400}
        height={300}
        className="mx-auto"
      />
      <p className="text-center text-3xl font-readexPro text-slate-950">
        {description}
      </p>
    </section>
  )
}

export default NotFound
