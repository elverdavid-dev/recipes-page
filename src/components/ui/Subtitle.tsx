import { ChildrenProps } from '@interfaces/ChildrenProps.interface'

const Subtitle = ({ children }: ChildrenProps) => {
	return (
		<h2 className="py-10 text-3xl font-onest-bold text-slate-950  capitalize flex items-center gap-x-1">
			{children}
		</h2>
	)
}

export default Subtitle
