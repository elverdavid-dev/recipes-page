/**
 * Formatea una fecha en un formato específico.
 * @param {Date} date - La fecha que se desea formatear.
 * @returns {string} - La fecha formateada como una cadena de texto.
	*/

export function formatDate(date: Date): string {
	const formatter = new Intl.DateTimeFormat("es-CO", {
		year: "numeric",
		month: "short",
		day: "numeric"
	})

	return formatter.format(date)
}