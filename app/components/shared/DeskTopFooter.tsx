import { getYear } from '@/utils/getYear';
import React from 'react';
import BrandIconFooter from './BrandIconFooter';
import { BRANDNAME } from '@/utils/constants';
import Link from 'next/link';

function DeskTopFooter() {
	return (
		<footer>
			<div className='px-20 py-4 bg-sb-primary text-sb-white-one text-base flex justify-between items-center h-[88px] '>
				<div className='flex items-center space-x-2'>
					<BrandIconFooter />
					<p>
						&copy; {getYear} {BRANDNAME}. All rights reserved.
					</p>
				</div>
				<div className='flex gap-[34px]'>
					<Link href='#'>Privacy Policy</Link>
					<Link href='#'>Terms of Use</Link>
					<Link href='#'>Contact us</Link>
				</div>
			</div>
		</footer>
	);
}

export default DeskTopFooter;
