/*
 * Merge classNames together
 */
export function cx(...args: Array<string | boolean | undefined>) {
	return args
		.filter(
			cls =>
				typeof cls !== 'boolean' &&
				typeof cls !== 'undefined' &&
				cls.trim() !== '',
		)
		.join(' ')
}
