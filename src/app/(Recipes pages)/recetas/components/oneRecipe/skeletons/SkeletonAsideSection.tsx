const SkeletonAsideSection = () => {
	return (
		<div className="flex flex-col ">
			<p className="h-4 w-28 bg-gray-300 rounded-full animate-pulse" />
			<aside className="max-w-sm">
				{[...Array(8)]?.map((_, index) => (
					<div
						className="flex items-start gap-x-3 py-3 px-2 group"
						key={index + 1}
					>
						<p className="w-[100px] h-[72px] bg-gray-300 rounded-md" />
						<div>
							<p className="h-3 w-32 bg-gray-300 rounded-full animate-pulse mb-2" />
							<p className="h-3 w-28 bg-gray-300 rounded-full animate-pulse" />
						</div>
					</div>
				))}
			</aside>
		</div>
	)
}

export default SkeletonAsideSection
