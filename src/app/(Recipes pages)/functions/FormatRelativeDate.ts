/**
 * @description Formatea una fecha relativa en formato de lenguaje natural.
 * @param fecha - La fecha en formato ISO 8601 que se desea formatear.
 * @returns Una cadena que representa la fecha relativa en lenguaje natural, 26 oct 2023
 */

export function FormatRelativeDate(fecha: string): string {
	return new Date(fecha).toLocaleDateString('es-ES', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	})
}
