/*
 * Hex to rgb or rgba
 */
export function hexToRGB(hex: string, alpha: number = 1) {
	const r = parseInt(hex.slice(1, 3), 16)
	const g = parseInt(hex.slice(3, 5), 16)
	const b = parseInt(hex.slice(5, 7), 16)

	if (alpha < 0 || alpha > 1) {
		throw new Error('Alpha value must be between 0 and 1.')
	}

	return alpha === 1
		? `rgb(${r}, ${g}, ${b})`
		: `rgba(${r}, ${g}, ${b}, ${alpha})`
}
