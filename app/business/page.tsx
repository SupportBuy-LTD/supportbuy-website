'use client';
import React from 'react';
import DesktopNavBar from '../components/shared/DesktopNavBar';
import MobileNavBar from '../components/shared/MobileNavBar';
import useWindowSize from '@/hooks/useWindowSize';
import MobileFooter from '../components/shared/MobileFooter';
import DeskTopFooter from '../components/shared/DeskTopFooter';
import FooterCTA from './_components/FooterCTA';
import Faq from './_components/Faq';
import WordsOfAppreciation from './_components/WordsOfAppreciation';
import GetSuppportSteps from './_components/GetSuppportSteps/GetSuppportSteps';
import BusinessHeader from './_components/BusinessHeader';

function Page() {
	const { isMobile } = useWindowSize();
	return (
		<div className='bg-sb-primary'>
			<>
				{!isMobile ? <DesktopNavBar /> : <MobileNavBar />}
				<BusinessHeader />
			</>
			<main className='px-6 md:px-10 lg:px-20 '>
				<GetSuppportSteps />
				<WordsOfAppreciation />
				<Faq />
				<FooterCTA />
			</main>
			{isMobile ? <MobileFooter /> : <DeskTopFooter />}
		</div>
	);
}

export default Page;
