import React from 'react';
import DesktopNavBar from '../components/shared/DesktopNavBar';
import MobileNavBar from '../components/shared/MobileNavBar';

function Page() {
	return (
		<div>
			<DesktopNavBar />
			<MobileNavBar />
		</div>
	);
}

export default Page;
