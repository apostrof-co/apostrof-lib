/*
 * Check if email is valid
 */
export function isValidEmail(email: string) {
	return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
}
