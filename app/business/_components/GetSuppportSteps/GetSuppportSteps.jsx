import React from 'react';

import Steps from './Steps';
import { BUSINESSSTEPSDATA } from '@/utils/data';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function GetSuppportSteps() {
	return (
		<section className=' lg:flex gap-10 items-center mt-10  bg-sb-white-two rounded-2xl px-6 py-6 md:px-20 md:py-[200px] shadow-[0px_1px_4px_0px_#0C0C0D0D]'>
			<div>
				<h2 className=' text-4xl md:text-5xl text-sb-primary tracking-[-2%] leading-[120%] font-bold'>
					How It Works for Your Business
				</h2>
				<p className='text-sb-primary md:leading-[120%]  mt-3 text-base font-normal leading-6 tracking-[0.15px] '>
					Your journey to more sales starts with
					<br /> these easy steps
				</p>

				<div className='hidden lg:block pt-6 h-[152px] w-[424px] '>
					<DotLottieReact
						src='/Your-journey-animation.lottie'
						loop
						autoplay
						layout={{ fit: 'cover' }}
					/>
				</div>
			</div>
			<div className='lg:gap-[88.5px] mt-10 py-[33.5px] w-full max-w-[490px] '>
				{BUSINESSSTEPSDATA.map((item) => (
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
