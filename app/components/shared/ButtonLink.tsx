import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
// sematic versioning
interface ButtonLinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
}
function ButtonLink({
	href,
	children,
	...props
}: PropsWithChildren<ButtonLinkProps>) {
	return (
		<Link href={href} {...props}>
			{children}
		</Link>
	);
}

export default ButtonLink;
