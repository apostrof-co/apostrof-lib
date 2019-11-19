export interface GraphQLNode<T> {
	node: T
}

export interface GraphQLEdges<T> {
	edges: GraphQLNode<T>[]
}

export interface BaseFormData {
	'form-name': string
}

export type FormDataWithFile = BaseFormData & Record<string, string | File>
export type FormDataWithoutFile = BaseFormData & Record<string, string>

export type Anchor = React.AnchorHTMLAttributes<HTMLAnchorElement>
export type AnchorExcludeHref = Omit<Anchor, 'href'>

export type ExternalLinkProps = Anchor & {
	href: string
	children: React.ReactNode
}

export type MailtoLinkProps = AnchorExcludeHref & {
	email: string
	children: React.ReactNode
}

export type PhoneLinkProps = AnchorExcludeHref & {
	phone: string
	children: React.ReactNode
}

export type WhatsAppLinkProps = AnchorExcludeHref & {
	phone: string
	text?: string
	children: React.ReactNode
}
