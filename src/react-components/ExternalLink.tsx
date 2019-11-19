import React from 'react'
import { ExternalLinkProps } from '../types'

export function ExternalLink({
	href,
	children,
	...restProps
}: ExternalLinkProps): React.ReactElement {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" {...restProps}>
			{children}
		</a>
	)
}
