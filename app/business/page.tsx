'use client';
import React from 'react';
import MobileNavBar from '@/components/shared/MobileNavBar';
import useWindowSize from '@/hooks/useWindowSize';
import MobileFooter from '@/components/shared/MobileFooter';
import DeskTopFooter from '@/components/shared/DeskTopFooter';
import FooterCTA from './_components/FooterCTA';
import Faq from './_components/Faq';

import GetSuppportSteps from './_components/GetSuppportSteps/GetSuppportSteps';
import BusinessHeader from './_components/BusinessHeader';
import TurnICantAffortItIntoSales from './_components/TurnICantAffortItIntoSales';
import BusinessTopNavBar from './_components/BusinessTopNavBar';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

function Page() {
	const { isMobile } = useWindowSize();
	const pathname = usePathname();
	return (
		<div className='bg-sb-primary'>
			{!isMobile ? <BusinessTopNavBar /> : <MobileNavBar />}

			<AnimatePresence mode='wait'>
				<motion.div
					key={pathname} // this triggers animation when route changes
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				>
					<BusinessHeader />
					<main className='px-4 md:px-10 lg:px-20 '>
						<TurnICantAffortItIntoSales />
						<GetSuppportSteps />

						<Faq />
					</main>
				</motion.div>
			</AnimatePresence>
			<FooterCTA />
			{isMobile ? <MobileFooter /> : <DeskTopFooter />}
		</div>
	);
}

export default Page;
