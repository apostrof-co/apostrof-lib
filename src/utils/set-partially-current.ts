import { LinkGetProps } from '@reach/router'

/*
 * https://reach.tech/router/api/Link
 * Set prop to Link
 */
export function setPartiallyCurrent({
	href,
	isPartiallyCurrent,
	isCurrent,
}: LinkGetProps) {
	if (isPartiallyCurrent && !isCurrent && href !== '/') {
		return {
			'data-partially-current': true,
		}
	}

	return {}
}
