'use client';

import useWindowSize from '@/hooks/useWindowSize';
import DesktopNavBar from './components/shared/DesktopNavBar';
import MobileNavBar from './components/shared/MobileNavBar';
import DeskTopFooter from './components/shared/DeskTopFooter';
import MobileFooter from './components/shared/MobileFooter';
import PersonalHeader from './components/PersonalHeader';
import GetSuppportSteps from './components/GetSuppportSteps/GetSuppportSteps';
import AskConfidently from './components/AskConfidently';
import SupportBuyEmpowers from './components/SupportBuyEmpowers';
import WordsOfAppreciation from './components/WordsOfAppreciation';
import Faq from './components/Faq';
import FooterCTA from './components/FooterCTA';
import BusinessHeader from './business/_components/BusinessHeader';

export default function Home() {
	const { isMobile } = useWindowSize();

	return (
		<>
			{isMobile ? <MobileNavBar /> : <DesktopNavBar />}
			<PersonalHeader />
			<main className='px-6 md:px-10 lg:px-20 '>
				<GetSuppportSteps />
				<AskConfidently />
				<SupportBuyEmpowers />
				<WordsOfAppreciation />
				<Faq />
			</main>
			<FooterCTA />
			{isMobile ? <MobileFooter /> : <DeskTopFooter />}
		</>
	);
}
