import React from 'react'
import { PhoneLinkProps } from '../types'
import { createPhoneNumber } from '../utils'

export function PhoneLink({
	phone,
	children,
	...restProps
}: PhoneLinkProps): React.ReactElement {
	return (
		<a href={`tel:+${createPhoneNumber({ phone })}`} {...restProps}>
			{children}
		</a>
	)
}
