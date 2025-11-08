import { Button } from '@heroui/button';
import Image from 'next/image';
import React from 'react';

const valPrep = ['Shopping', 'Bills', 'Emergency', 'Education', 'Celebration'];

function ValueList() {
	return (
		<ul className='flex  flex-wrap items-center text-sm gap-[10px] text-sb-dark-one lg:text-base '>
			{valPrep.map((item, index) => (
				<li
					key={index}
					className='inline-flex items-center text-[#272626] font-[600]'
				>
					{index > 0 && (
						<span className='mr-2 w-2 h-2 bg-sb-secondary rounded-full inline-block'></span>
					)}
					{item}
				</li>
			))}
		</ul>
	);
}
function AskConfidently() {
	return (
		<section className=' px-6  py-6 xl:px-10  xl:py-[177px] bg-sb-white-two shadow-[0px_1px_4px_0px_#0C0C0D0D] mt-10 rounded-2xl'>
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
						It’s all about giving
						<br />
						and support.
					</h2>
					<p className=' mt-3 2xl:mt-4 2xl:text-xl font-normal text-sb-dark-one'>
						Getting financial help for daily needs often means awkward social
						media requests, lack of transparency, and unreliable outcomes.
						It&apos;s time for a better way.
					</p>
					{/* <ul className=' list lg:flex flex-wrap list-inside list-disc mb-[36px]  gap-2.5 2xl:mb-[58px] mt-3 2xl:mt-4 w-full text-sb-dark-one'>
						<li>Medical</li>
						<li>Education</li>
						<li>Emergency</li>
						<li>Business</li>
						<li>Celebration</li>
					</ul> */}
					<div className='mt-4 mb-8'>
						<ValueList />
					</div>
					<Button
						href='#'
						className='hover:bg-[#ccf546] w-fit px-5 py-3.5 rounded-[50px] bg-sb-secondary cursor-pointer text-[17px] text-sb-primary h-[34px]'
					>
						Get Support Now
					</Button>
				</div>
			</div>
		</section>
	);
}

export default AskConfidently;
