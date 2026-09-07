import React from 'react';
import Pos from './Pos';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function HeroAnimation() {
	return (
		<div className='flex items-center gap-2 sm:gap-3 lg:gap-4 absolute bottom-[-45px] min-[400px]:bottom-[-55px] sm:bottom-[-60px] md:bottom-[-75px] lg:bottom-[-85px] xl:bottom-[-100px] left-1/2 -translate-x-1/2 sm:left-[-25px] md:left-[-35px] lg:left-[-45px] xl:left-[-60px] sm:translate-x-0 w-max max-w-[96%] justify-center'>
			<div className='hidden sm:block w-[110px] md:w-[140px] xl:w-[200px]'>
				<Pos />
			</div>
			<div className='p-2 sm:p-3 lg:p-3.5 bg-[#D4F6B2] border-3 sm:border-4 border-[#144419] rounded-[8px] w-fit'>
				<h4 className='mb-1.5 sm:mb-2 text-[#272626] font-semibold text-xs sm:text-sm'>Sales</h4>
				<div className='w-[65px] min-[400px]:w-[75px] sm:w-[80px] lg:w-[90px] h-[55px] min-[400px]:h-[65px] sm:h-[70px] lg:h-[84px] rounded overflow-hidden'>
					<DotLottieReact
						src='/upsell.lottie'
						loop
						autoplay
						layout={{ fit: 'cover' }}
					/>
				</div>
			</div>
			<div className='p-2 sm:p-3 lg:p-3.5 bg-[#D4F6B2] border-3 sm:border-4 border-[#144419] rounded-[8px] w-fit'>
				<h4 className='mb-1.5 sm:mb-2 text-[#272626] font-semibold text-xs sm:text-sm'>Revenue</h4>
				<div className='w-[85px] min-[400px]:w-[95px] sm:w-[100px] lg:w-[140px] h-[55px] min-[400px]:h-[65px] sm:h-[70px] lg:h-[84px] rounded overflow-hidden'>
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
