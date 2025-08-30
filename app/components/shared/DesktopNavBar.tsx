'use client';
import React from 'react';
import ButtonLink from './ButtonLink';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function DesktopNavBar() {
	const pathname = usePathname();

	return (
		<nav className='h-20 md:px-10 lg:px-20 bg-sb-white-two flex justify-between items-center w-full shadow-[0px_1px_4px_0px_#0C0C0D0D]'>
			<div className='flex space-x-2'>
				<ButtonLink
					href='.'
					className={`flex text-base text-sb-dark-one  font-bold justify-center items-center  h-10 px-3 py-[8px] rounded-[48px] ${
						pathname === '/' ? 'bg-sb-secondary-300 text-sb-primary' : ''
					}`}
				>
					Personal
				</ButtonLink>
				<ButtonLink
					href='/business'
					className={`flex text-base text-sb-dark-one  font-bold justify-center items-center  h-10 px-3 py-[8px] rounded-[48px] ${
						pathname === '/business'
							? 'bg-sb-secondary-300 text-sb-primary'
							: ''
					}`}
				>
					Business
				</ButtonLink>
			</div>
			<div>
				<Image src='/sb_logo.svg' height={48} width={155} alt='sb logo' />
			</div>
			<div className='flex space-x-2'>
				<ButtonLink
					href='.'
					className=' flex text-base text-white font-bold justify-center items-center bg-sb-primary h-[34px] px-3.5 py-[7px] rounded-[40px]'
				>
					Log in
				</ButtonLink>
				{pathname == '/' ? (
					<ButtonLink
						href='/business'
						className='flex text-base  text-sb-primary justify-center items-center  bg-sb-secondary h-[34px]  px-3.5 py-[7px] rounded-[40px]'
					>
						Start a Compaign
					</ButtonLink>
				) : (
					<ButtonLink
						href='/business'
						className='flex text-base text-sb-primary  justify-center items-center  bg-sb-secondary h-[34px]  px-3.5 py-[7px] rounded-[40px]'
					>
						List Your Business
					</ButtonLink>
				)}
			</div>
		</nav>
	);
}

export default DesktopNavBar;
