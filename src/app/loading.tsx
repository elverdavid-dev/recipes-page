import { Spinner } from '@nextui-org/react'

const loading = () => {
	return (
		<div className="flex justify-center my-16 min-h-80">
			<Spinner label="Cargando..." />
		</div>
	)
}

export default loading
