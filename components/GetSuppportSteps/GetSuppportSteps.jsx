import React from 'react';
import { STEPSDATA } from '@/utils/data';
import Steps from './Steps';

function GetSuppportSteps() {
	return (
		<section className='mt-10  bg-sb-primary rounded-2xl px-6 py-6 md:px-20 md:py-[200px] shadow-[0px_1px_4px_0px_#0C0C0D0D]'>
			<h2 className=' text-4xl md:text-5xl text-sb-secondary-300 tracking-[-2%] leading-[120%] font-bold'>
				You’re not alone. Ask Confidently
			</h2>
			<p className='text-sb-white-one md:leading-[120%]  mt-3 text-base font-normal leading-6 tracking-[0.15px] '>
				Embark on your fundraising journey effortlessly with SupportBuy - a
				platform where creating a campaign
				<br /> takes just a few minutes, streamlining the process of turning
				your financial need into a community support.
			</p>
			<div className='grid md:grid-cols-3 gap-2 lg:gap-[88.5px] mt-10 py-[33.5px] '>
				{STEPSDATA.map((item) => (
					<Steps
						key={item.id}
						id={item.id}
						title={item.title}
						description={item.description}
					/>
				))}
			</div>
		</section>
	);
}

export default GetSuppportSteps;
