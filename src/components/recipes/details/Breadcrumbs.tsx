'use client'
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
const BreadcrumbsComponent = ({ name }: { name: string }) => {
	return (
		<Breadcrumbs size="lg" className="mb-5">
			<BreadcrumbItem href="/">Inicio</BreadcrumbItem>
			<BreadcrumbItem href="/recetas">Recetas</BreadcrumbItem>
			<BreadcrumbItem className="capitalize">{name}</BreadcrumbItem>
		</Breadcrumbs>
	)
}

export default BreadcrumbsComponent
