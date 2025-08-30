import { getYear } from '@/utils/getYear';
import React from 'react';
import BrandIconFooter from './BrandIconFooter';
import { BRANDNAME } from '@/utils/constants';
import Link from 'next/link';

function MobileFooter() {
	return (
		<footer className='px-6 py-4 bg-sb-primary text-sb-white-one text-sm md:text-base flex space-y-2 flex-col items-center '>
			<div className='flex  items-center space-x-2 '>
				<BrandIconFooter />
				<p>
					&copy; {getYear} {BRANDNAME}. All rights reserved.
				</p>
			</div>
			<div className='flex gap-[20px] text-xs'>
				<Link href='#' className='hover:text-sb-secondary'>
					Privacy Policy
				</Link>
				<Link href='#' className='hover:text-sb-secondary'>
					Terms of Use
				</Link>
				<Link href='#' className='hover:text-sb-secondary'>
					Contact us
				</Link>
			</div>
		</footer>
	);
}

export default MobileFooter;
