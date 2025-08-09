'use client';

import useWindowSize from '@/hooks/useWindowSize';
import DesktopNavBar from './components/shared/DesktopNavBar';
import MobileNavBar from './components/shared/MobileNavBar';

export default function Home() {
	const { isMobile } = useWindowSize();
	console.log(isMobile);
	return <>{isMobile ? <MobileNavBar /> : <DesktopNavBar />}</>;
}
