/**
 * @description Formatea una fecha relativa en formato de lenguaje natural.
 * @param fechaISO - La fecha en formato ISO 8601 que se desea formatear.
 * @returns Una cadena que representa la fecha relativa en lenguaje natural, como "hace X días" o "en X días".
 */

export function FormatRelativeDate(fechaISO: string): string {
  // Convierte la fecha en un objeto Date
  const fecha = new Date(fechaISO)

  // Obtiene la fecha actual
  const fechaActual = new Date()

  // Si es el mismo día, mostrar "hoy".
  if (
    fecha.getDate() === fechaActual.getDate() &&
    fecha.getMonth() === fechaActual.getMonth() &&
    fecha.getFullYear() === fechaActual.getFullYear()
  ) {
    return 'hoy'
  }

  // Calcula la diferencia de tiempo en milisegundos
  const diferenciaTiempo = fecha.getTime() - fechaActual.getTime()

  // Calcula la diferencia en días
  const diferenciaDias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24))

  // Crea una instancia de Intl.RelativeTimeFormat para formatear la diferencia de días
  const rtf = new Intl.RelativeTimeFormat('es', { numeric: 'auto' })

  // Formatea la diferencia de días y devuelve la cadena resultante
  return rtf.format(diferenciaDias, 'day')
}
