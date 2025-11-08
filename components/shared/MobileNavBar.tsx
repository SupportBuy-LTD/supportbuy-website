'use client';
import React from 'react';
import ButtonLink from './ButtonLink';
import { usePathname } from 'next/navigation';
import BrandIcon from './BrandIcon';

function MobileNavBar() {
	const pathname = usePathname();
	return (
		<nav className='h-20 px-6 bg-sb-white-two fixed z-50 flex justify-between items-center w-full shadow-[0px_1px_4px_0px_#0C0C0D0D] '>
			<div>
				<BrandIcon />
			</div>
			<div className='flex space-x-2'>
				<ButtonLink
					href='.'
					className={`flex text-base text-sb-primary  font-bold justify-center items-center  h-10 px-3 py-[8px] rounded-[48px] ${
						pathname === '/'
							? 'bg-sb-secondary-300 text-sb-primary'
							: 'text-sb-primary '
					}`}
				>
					Personal
				</ButtonLink>
				<ButtonLink
					href='/business'
					className={`flex text-base  text-sb-dark-one font-bold justify-center items-center  h-10 px-3 py-[8px] rounded-[48px] ${
						pathname === '/business'
							? 'bg-sb-secondary-300 text-sb-primary'
							: 'text-[#1D1B20]'
					}`}
				>
					Business
				</ButtonLink>
			</div>
		</nav>
	);
}

export default MobileNavBar;
