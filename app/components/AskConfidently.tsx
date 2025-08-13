import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

function AskConfidently() {
	return (
		<section className='  px-10 md:px-20 py-[177px] bg-sb-white-two shadow-[0px_1px_4px_0px_#0C0C0D0D] mt-10 rounded-2xl'>
			<div className='grid md:grid-cols-2 items-center gap-6 2xl:gap-10'>
				<div>
					<Image
						src='/askconfidently_illus.svg'
						width={621}
						height={626}
						alt='ask confidently'
						className='w-full hidden md:block'
					/>
					<Image
						src='/Mobile_askconfidently_illus.svg.svg'
						width={297}
						height={268}
						alt='ask confidently'
						className='w-full h-full md:hidden'
					/>
				</div>
				<div>
					<h2 className=' text-4xl  xl:text-[48px] text-sb-primary tracking-[-2%] leading-[120%] font-bold'>
						You’re not alone. Ask confidently
					</h2>
					<p className=' mt-3 2xl:mt-4 2xl:text-xl font-normal'>
						Getting financial help for daily needs often means awkward social
						media requests, lack of transparency, and unreliable outcomes. It's
						time for a better way.
					</p>
					<ul className='flex list-inside list-disc mb-[36px] 2xl:mb-[58px] mt-3 2xl:mt-4'>
						<li>Medical</li>
						<li>Education</li>
						<li>Emergency</li>
						<li>Business</li>
						<li>Celebration</li>
					</ul>
					<Button
						href='#'
						className='hover:bg-green-600 w-fit px-5 py-3.5 rounded-[50px] bg-sb-secondary cursor-pointer text-[17px] text-sb-primary h-[34px]'
					>
						Get Support Now
					</Button>
				</div>
			</div>
		</section>
	);
}

export default AskConfidently;
