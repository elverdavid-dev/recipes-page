import RecipesCardSkeleton from '@/components/shared/skeletons/recipes-card-skeleton'
import { createSkeletons } from '@/libs/common/create-skeletons'
import BackButton from '@/components/shared/common/back-button'

const CountryDetailSkeleton = () => {
	const skeletons = createSkeletons(8)
	return (
		<>
			<section className="2xl:mx-auto 2xl:container px-2 md:px-4 lg:px-16 mt-10">
				<BackButton label={'Paises'} href="/" />
				<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-2 px-2 mt-10">
					{skeletons.map(({ id }) => (
						<RecipesCardSkeleton key={id} />
					))}
				</section>
			</section>
		</>
	)
}

export default CountryDetailSkeleton
