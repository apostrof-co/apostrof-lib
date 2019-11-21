import { CSSObject } from '@emotion/core'

export function autoGrid(
	min: string,
	gutter: string,
	autoRepeat: 'auto-fit' | 'auto-fill' = 'auto-fit',
): CSSObject {
	return {
		display: 'grid',
		gridTemplateColumns: `repeat(${autoRepeat}, minmax(${min}, 1fr))`,
		gridGap: gutter,
	}
}
