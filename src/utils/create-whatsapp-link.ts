import { createPhoneNumber } from './create-phone-number'

/*
 * Create WhatsApp link from phone number, with optional text
 */
export function createWhatsAppLink({
	phone,
	text,
}: {
	phone: string
	text?: string
}) {
	let link = `https://wa.me/${createPhoneNumber({ phone })}`

	if (text) {
		link += `?text=${encodeURIComponent(text)}`
	}

	return link
}
