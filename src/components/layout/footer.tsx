import Logo from '@/components/shared/common/logo'
import { GithubIcon, Linkedin02Icon } from 'hugeicons-react'
export default function Footer() {
	const date = new Date()
	const CurrentYear = date.getFullYear()
	return (
		<footer className="bg-gray-200 flex flex-col xl:flex-row justify-center items-center gap-4 xl:gap-0 xl:justify-between w-full p-5 mt-44 2xl:container mx-auto">
			<div>
				<Logo />
			</div>
			<div>
				<p className="text-gray-800 text-center md:text-left flex gap-2">
					&copy; {CurrentYear}
					<span className="text-gray-900 font-bold">GlobalFood</span>
					<span className="text-gray-700">• Por</span>
					<a
						href="https://www.elvportafolio.website"
						target="_blank"
						rel="noreferrer"
						className="border-b-2 border-transparent hover:border-gold transition-colors text-gray-700 hover:text-gray-900"
					>
						Elver David Peñate
					</a>
				</p>
			</div>
			<div className="flex items-center gap-2">
				<a
					href="https://www.linkedin.com/in/elverdavid-dev"
					target="_blank"
					rel="noopener noreferrer"
					className="p-2 bg-white rounded-full shadow-md hover:bg-gold hover:text-white transition-all"
				>
					<Linkedin02Icon
						size={18}
						strokeWidth={2}
						aria-label="Link a linkedin"
					/>
				</a>
				<a
					href="https://github.com/elverdavid-dev"
					target="_blank"
					rel="noopener noreferrer"
					className="p-2 bg-white rounded-full shadow-md hover:bg-gold hover:text-white transition-all"
				>
					<GithubIcon size={18} strokeWidth={2} aria-label="Link a github" />
				</a>
			</div>
		</footer>
	)
}
