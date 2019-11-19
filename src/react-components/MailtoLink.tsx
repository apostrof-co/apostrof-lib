import React from 'react'
import { MailtoLinkProps } from '../types'

export function MailtoLink({
	email,
	children,
	...restProps
}: MailtoLinkProps): React.ReactElement {
	return (
		<a href={`mailto:${email}`} {...restProps}>
			{children}
		</a>
	)
}
