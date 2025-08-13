'use client';

import useWindowSize from '@/hooks/useWindowSize';
import DesktopNavBar from './components/shared/DesktopNavBar';
import MobileNavBar from './components/shared/MobileNavBar';
import DeskTopFooter from './components/shared/DeskTopFooter';
import MobileFooter from './components/shared/MobileFooter';
import PersonalHeader from './components/PersonalHeader';
import GetSuppportSteps from './components/GetSuppportSteps/GetSuppportSteps';
import AskConfidently from './components/AskConfidently';

export default function Home() {
	const { isMobile } = useWindowSize();
	console.log(isMobile);
	return (
		<>
			{isMobile ? <MobileNavBar /> : <DesktopNavBar />}
			<PersonalHeader />
			<main className='px-6 md:px-20 '>
				<GetSuppportSteps />
				<AskConfidently />
			</main>
			{isMobile ? <MobileFooter /> : <DeskTopFooter />}
		</>
	);
}
