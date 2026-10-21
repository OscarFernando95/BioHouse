/** Formatea una fecha como "13 de septiembre de 2025" (las fechas del blog se guardan en UTC). */
export function formatearFecha(fecha: Date): string {
  return fecha.toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
