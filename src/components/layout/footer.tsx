import Logo from '@/components/shared/common/logo'
import { GithubIcon, Linkedin02Icon } from 'hugeicons-react'
export default function Footer() {
	const date = new Date()
	const CurrentYear = date.getFullYear()
	return (
		<footer className="bg-gray-200 dark:bg-background flex flex-col xl:flex-row justify-center items-center gap-4 xl:gap-0 xl:justify-between w-full p-5 mt-44 2xl:container mx-auto">
			<div>
				<Logo />
			</div>
			<div>
				<p className="text-center md:text-left flex gap-2">
					&copy; {CurrentYear}
					<span className="text-gray-900 dark:text-white font-bold">
						GlobalFood
					</span>
					<span>• Por</span>
					<a
						href="https://www.elvportafolio.website"
						target="_blank"
						rel="noreferrer"
						className="underline hover:text-gold transition-all"
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
					className="p-2 bg-white dark:bg-white/10 rounded-full shadow-md hover:bg-gold hover:text-white transition-all"
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
					className="p-2 bg-white dark:bg-white/10 rounded-full shadow-md hover:bg-gold hover:text-white transition-all"
				>
					<GithubIcon size={18} strokeWidth={2} aria-label="Link a github" />
				</a>
			</div>
		</footer>
	)
}
