'use client';
import Image from 'next/image';
import React, { memo } from 'react';
import { Button } from '@heroui/react';
import ButtonLink from '@/app/components/shared/ButtonLink';
import useWindowSize from '@/hooks/useWindowSize';

const valPrep = [
	'Increase your reach',
	'Simplify payments',
	'Grow your business',
];
const mvalPrep = ['Increase your reach', 'Grow your business'];

function ValueList() {
	return (
		<ul className='flex  items-center text-sm gap-[10px] text-sb-tertiary lg:text-base'>
			{valPrep.map((item, index) => (
				<li key={index} className='inline-flex items-center'>
					{index > 0 && (
						<span className='mr-2 w-2 h-2 bg-sb-secondary rounded-full inline-block'></span>
					)}
					{item}
				</li>
			))}
		</ul>
	);
}

function MValueList() {
	return (
		<ul className='flex  items-center text-sm gap-[10px] text-sb-tertiary lg:text-base'>
			{mvalPrep.map((item, index) => (
				<li key={index} className='inline-flex items-center'>
					{index > 0 && (
						<span className='mr-2 w-2 h-2 bg-sb-secondary rounded-full inline-block'></span>
					)}
					{item}
				</li>
			))}
		</ul>
	);
}

function BusinessHeader() {
	const { isMobile } = useWindowSize();
	return (
		<>
			<header className=' md:flex md:items-center px-6 py-20 md:px-10 lg:p-20 '>
				<div>
					<div className='mb-6'>
						{!isMobile ? <ValueList /> : <MValueList />}
					</div>

					<h1 className='text-[48px] lg:text-[72px] text-sb-white-two font-[700] leading-[120%] tracking-[-3%]'>
						Unlock new
						<br /> sales channels
						<br />
						<span className='text-sb-secondary'>effortlessly</span>
					</h1>
					<p className=' text-base lg:text-[20px] mt-6 text-sb-white-two leading-[120%]'>
						SupportBuy connects your products and services
						<br className='hidden lg:block' /> directly with customers who get
						community-backed funding.
					</p>
					<div className='mt-10 space-y-[7px] md:space-x-[7px] flex  flex-col md:flex-row md:items-center w-fit lg:w-full'>
						<Button
							href='#'
							className='hover:bg-[#ccf546f1] w-fit px-5 py-3.5 rounded-[50px] bg-sb-secondary cursor-pointer text-[17px] text-sb-primary h-[50px]'
						>
							List Your Products/Services
						</Button>
						<ButtonLink
							href='#'
							className='hover:bg-[#144419ee] w-full md:w-fit px-5 py-3.5 rounded-[50px] bg-sb-primary text-[17px] text-sb-secondary text-center h-[50px] border border-sb-secondary'
						>
							See How It Works
						</ButtonLink>
					</div>
				</div>
				<div className='mt-10 md:mt-0'>
					<Image
						src='/BussinessHeroImage.svg'
						width={621}
						height={608}
						alt='Unlock new sales channels effortlessly'
						className='hidden md:block'
					/>
					<Image
						src='/mobile_BussinessHeroImage.svg'
						width={361}
						height={344}
						alt='Unlock new sales channels effortlessly'
						className='md:hidden w-full'
					/>
				</div>
			</header>
		</>
	);
}

export default memo(BusinessHeader);
