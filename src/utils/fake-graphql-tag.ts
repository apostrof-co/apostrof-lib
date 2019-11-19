/*
 * Helper for Gatsby’s createPages graphql query
 */
export function fakeGraphQLTag(_query: TemplateStringsArray) {
	const tagArgs = arguments

	return tagArgs[0].reduce(
		(accumulator: string, string: string, index: number) => {
			accumulator += string
			if (index + 1 in tagArgs) accumulator += tagArgs[index + 1]
			return accumulator
		},
		'',
	)
}
