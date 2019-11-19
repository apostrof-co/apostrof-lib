/*
 * Format to how many decimal places
 */
export function formatNumber(val: number, decimalPlaces: number) {
	var multiplier = Math.pow(10, decimalPlaces)
	return Number(
		(Math.round(val * multiplier) / multiplier).toFixed(decimalPlaces),
	)
}
