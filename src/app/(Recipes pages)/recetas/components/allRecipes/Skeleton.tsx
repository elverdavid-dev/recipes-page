const Skeleton = () => {
	return (
		<>
			<div className="flex items-center justify-between px-5">
				<h2 className="Subtitle">Recetas</h2>
				<span className="inline-block h-5 w-32 rounded-full bg-gray-300 animate-pulse" />
			</div>
			<section className="mt-16 px-4 mx-auto  grid grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-3">
				{[...Array(8)].map((_, index) => (
					<div
						key={index + 1}
						role="status"
						className="w-[297px] h-[296px] rounded-md"
					>
						<div className="w-full h-[210px] rounded-md bg-gray-300 animate-pulse" />
						<span className="mt-3 mx-3 inline-block h-5 w-[70%] rounded-full bg-gray-300 animate-pulse" />
						<span className="my-3 mx-3 inline-block h-4 w-[40%] rounded-full bg-gray-300 animate-pulse" />
					</div>
				))}
			</section>
			<div className="mt-10 flex justify-center">
				<span className="h-8 w-24 bg-gray-300 rounded-md animate-pulse" />
			</div>
		</>
	)
}

export default Skeleton
