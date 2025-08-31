'use client';
import React from 'react';
import DesktopNavBar from '../components/shared/DesktopNavBar';
import MobileNavBar from '../components/shared/MobileNavBar';
import useWindowSize from '@/hooks/useWindowSize';
import MobileFooter from '../components/shared/MobileFooter';
import DeskTopFooter from '../components/shared/DeskTopFooter';
import FooterCTA from './_components/FooterCTA';
import Faq from './_components/Faq';

import GetSuppportSteps from './_components/GetSuppportSteps/GetSuppportSteps';
import BusinessHeader from './_components/BusinessHeader';
import TurnICantAffortItIntoSales from './_components/TurnICantAffortItIntoSales';

function Page() {
	const { isMobile } = useWindowSize();
	return (
		<div className='bg-sb-primary'>
			<>
				{!isMobile ? <DesktopNavBar /> : <MobileNavBar />}
				<BusinessHeader />
			</>
			<main className='px-4 md:px-10 lg:px-20 '>
				<TurnICantAffortItIntoSales />
				<GetSuppportSteps />

				<Faq />
				<FooterCTA />
			</main>
			{isMobile ? <MobileFooter /> : <DeskTopFooter />}
		</div>
	);
}

export default Page;
