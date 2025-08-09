import React from 'react';
import DesktopNavBar from '../components/shared/DesktopNavBar';
import MobileNavBar from '../components/shared/MobileNavBar';

function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div>{children}</div>;
}

export default Layout;
