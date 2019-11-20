import React from 'react'
import { WhatsAppLinkProps } from '../types'
import { createWhatsAppLink } from '../utils/create-whatsapp-link'

export function WhatsAppLink({
	phone,
	text,
	children,
	...restProps
}: WhatsAppLinkProps): React.ReactElement {
	return (
		<a
			href={createWhatsAppLink({ phone, text })}
			target="_blank"
			rel="noopener noreferrer nofollow"
			{...restProps}
		>
			{children}
		</a>
	)
}
