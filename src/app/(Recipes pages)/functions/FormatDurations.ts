/**
 * @description Formatea la duración en minutos como una cadena mas legible que incluye horas y minutos.
 * @param {number} durationInMinutes - La duración en minutos que se va a formatear.
 * @returns {string} Una cadena que representa la duración en formato "horas:hrs" o "minutos: min".
 */

export function formatDuration(durationInMinutes: number): string {
	if (durationInMinutes < 60) {
		return `${durationInMinutes} min`
	}

	if (durationInMinutes % 60 === 0) {
		const hours = durationInMinutes / 60
		return `${hours} hrs`
	}
	const hours = Math.floor(durationInMinutes / 60)
	const minutes = durationInMinutes % 60
	return `${hours}:${minutes} hrs`
}
