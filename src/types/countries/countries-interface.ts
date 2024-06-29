export interface Countries {
	_id: string
	name: string
	image: string
}

export interface CountriesData {
	page: number
	totalPages: number
	totalItems: number
	data: Countries[]
}
