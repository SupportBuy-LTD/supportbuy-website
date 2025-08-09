'use client';
import React from 'react';
import ButtonLink from './ButtonLink';
import { usePathname } from 'next/navigation';
import BrandIcon from './BrandIcon';

function MobileNavBar() {
	const pathname = usePathname();
	return (
		<nav className='h-20 px-6 bg-sb-white flex justify-between items-center w-full shadow-[0px_1px_4px_0px_#0C0C0D0D]'>
			<div>
				<BrandIcon />
			</div>
			<div className='flex space-x-2'>
				<ButtonLink
					href='.'
					className={`flex text-base  font-bold justify-center items-center  h-10 px-3 py-[8px] rounded-[48px] ${
						pathname === '/' ? 'bg-sb-secondary-300' : ''
					}`}
				>
					Personal
				</ButtonLink>
				<ButtonLink
					href='/business'
					className={`flex text-base  font-bold justify-center items-center  h-10 px-3 py-[8px] rounded-[48px] ${
						pathname === '/business' ? 'bg-sb-secondary-300' : ''
					}`}
				>
					Business
				</ButtonLink>
			</div>
		</nav>
	);
}

export default MobileNavBar;
