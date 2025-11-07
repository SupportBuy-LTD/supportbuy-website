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

import Faq from './components/Faq';
import FooterCTA from './components/FooterCTA';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Home() {
	const { isMobile } = useWindowSize();
	const pathname = usePathname();

	return (
		<>
			{isMobile ? <MobileNavBar /> : <DesktopNavBar />}
			<AnimatePresence mode='wait'>
				<motion.div
					key={pathname} // this triggers animation when route changes
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				>
					<PersonalHeader />
					<main className='px-6 md:px-10 lg:px-20 '>
						<GetSuppportSteps />
						<AskConfidently />
						<SupportBuyEmpowers />

						<Faq />
					</main>
				</motion.div>
			</AnimatePresence>
			<FooterCTA />
			{isMobile ? <MobileFooter /> : <DeskTopFooter />}
		</>
	);
}
