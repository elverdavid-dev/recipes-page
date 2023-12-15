const SkeletonCardRecipe = () => {
	return (
		<div
			role="status"
			className="w-full h-[220px] md:w-[249px] md:h-[343px] lg:w-[297px] lg:h-[296px] rounded-md"
		>
			<div className="w-full h-[130px] md:h-[178px] lg:h-[210px] rounded-md bg-gray-300 animate-pulse" />
			<span className="mt-3 mx-3 inline-block h-5 w-[70%] rounded-full bg-gray-300 animate-pulse" />
			<span className="my-3 mx-3 inline-block h-4 w-[40%] rounded-full bg-gray-300 animate-pulse" />
		</div>
	)
}

export default SkeletonCardRecipe
