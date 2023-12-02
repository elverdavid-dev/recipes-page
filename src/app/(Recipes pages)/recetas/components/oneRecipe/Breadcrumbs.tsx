'use client'
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
const BreadcrumbsComponent = ({ name }: { name: string }) => {
	return (
		<Breadcrumbs size="lg" className="font-nunito mb-3">
			<BreadcrumbItem href="/">Inicio</BreadcrumbItem>
			<BreadcrumbItem href="/recetas">Recetas</BreadcrumbItem>
			<BreadcrumbItem>{name}</BreadcrumbItem>
		</Breadcrumbs>
	)
}

export default BreadcrumbsComponent
