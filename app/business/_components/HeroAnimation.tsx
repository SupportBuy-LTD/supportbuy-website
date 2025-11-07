import React from 'react';
import Pos from './Pos';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function HeroAnimation() {
	return (
		<div className='flex items-center gap-[16px]  absolute bottom-[-95px] lg:bottom-[-110px] left-1/2 -translate-x-1/2 lg:left-[-60px] lg:translate-none'>
			<div className=' hidden lg:block h-[180px]'>
				<Pos />
			</div>
			<div className='p-4 bg-[#D4F6B2] border-4  border-[#144419] rounded-[8px] w-fit lg:h-fit  '>
				<h4 className='mb-[14px]'>Sales</h4>
				<div className=' w-[90px] lg:w-[90px] h-[84px] rounded overflow-hidden'>
					<DotLottieReact
						src='/upsell.lottie'
						loop
						autoplay
						layout={{ fit: 'cover' }}
					/>
				</div>
			</div>
			<div className='p-4 bg-[#D4F6B2] border-4  border-[#144419] rounded-[8px] w-[139px] lg:w-[245px] h-fit '>
				<h4 className='mb-[14px] '>Revenue</h4>
				<div className=' w-[107px] lg:w-[150px] h-[84px] rounded overflow-hidden'>
					<DotLottieReact
						src='/Upward_trend.lottie'
						loop
						autoplay
						layout={{ fit: 'cover' }}
					/>
				</div>
			</div>
		</div>
	);
}

export default HeroAnimation;
