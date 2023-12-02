const SkeletonOneRecipe = () => {
	return (
		<section className="container px-2 md:px-8 lg:px-10  mx-auto mt-16 lg:flex lg:justify-between gap-x-16 " role="status">
			<div className="lg:w-[700px] w-full">
				<p className="h-3 w-20 bg-gray-300 rounded-full animate-pulse" />
				<p className="h-6 w-[40%] bg-gray-300 rounded-full my-3 animate-pulse" />
				<div className="w-full h-[282px] lg:w-[700px] lg:h-[500px] bg-gray-300 rounded-md animate-pulse" />
				<div className="mt-10">
					<p className="w-[60%] h-4 rounded-full bg-slate-300 animate-pulse my-2" />
					<p className="w-[55%] h-4 rounded-full bg-slate-300 animate-pulse" />
					<p className="w-[40%] h-4 rounded-full bg-slate-300 animate-pulse my-2" />
				</div>
			</div>
		</section>
	)
}

export default SkeletonOneRecipe
