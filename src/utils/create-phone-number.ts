/*
 * Create valid tel: from Indonesia style of writing phone numbers
 */
export function createPhoneNumber({
	phone,
	countryCode = '62',
}: {
	phone: string
	countryCode?: string
}) {
	const splitNumbers =
		phone
			.replace(/-|\s/g, '') // remove hyphens and whitespaces
			.match(/\d+/g) || [] // split into array of numbers (divided by non-numerical characters)

	// check if there’s any number at all
	if (splitNumbers.length > 0) {
		// get the first set of numbers
		const sanitizedNumber = splitNumbers.length > 0 ? splitNumbers[0] : ''

		if (sanitizedNumber.startsWith('0')) {
			// converting to number removes the leading 0
			return countryCode + Number(sanitizedNumber)
		}

		if (sanitizedNumber.startsWith(countryCode)) {
			// if starts with country code, return as is
			return sanitizedNumber
		}

		return countryCode + sanitizedNumber
	}

	throw new Error('Please pass a valid phone number')
}
