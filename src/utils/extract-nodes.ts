import { GraphQLEdges } from '../types'

/*
 * Extract data from Relay GraphQL style edge node
 */
export function extractNodes<T>(arr: GraphQLEdges<T>): T[] {
	return arr.edges.map(({ node }) => node)
}
