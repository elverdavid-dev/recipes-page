const SkeletonCard = () => {
	return (
		<div role="status" className="w-[297px] h-[296px] rounded-md">
			<div className="w-full h-[210px] rounded-md bg-gray-300 animate-pulse" />
			<span className="mt-3 mx-3 inline-block h-5 w-[70%] rounded-full bg-gray-300 animate-pulse" />
			<span className="my-3 mx-3 inline-block h-4 w-[40%] rounded-full bg-gray-300 animate-pulse" />
		</div>
	)
}

export default SkeletonCard
