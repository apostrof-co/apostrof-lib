import { CSSObject } from '@emotion/core'

/* Only accepts unitless numbers in px */
export function fluidFontSize(
	minFontSize: number,
	maxFontSize: number,
	minViewportWidth: number,
	maxViewportWidth: number,
): CSSObject {
	const sizeDelta = maxFontSize - minFontSize
	const viewportWidthDelta = maxViewportWidth - minViewportWidth
	const minFontSizeWithPx = `${minFontSize}px`
	const maxFontSizeWithPx = `${maxFontSize}px`
	const minViewportWidthWithPx = `${minViewportWidth}px`
	const maxViewportWidthWithPx = `${maxViewportWidth}px`

	return {
		fontSize: minFontSizeWithPx,
		// fluidity starts
		[`@media (min-width: ${minViewportWidthWithPx})`]: {
			fontSize: `calc(${minFontSizeWithPx} + ${sizeDelta} * ((100vw - ${minViewportWidthWithPx}) / ${viewportWidthDelta}))`,
		},
		// maximum viewport width reached
		[`@media (min-width: ${maxViewportWidthWithPx})`]: {
			fontSize: maxFontSizeWithPx,
		},
	}
}
