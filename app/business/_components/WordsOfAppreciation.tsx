import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const slidesData = [
	{
		id: 1,
		title: 'Onyeka O',
		des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nobis delectus quos. Blanditiis eveniet quis saepe, voluptatem culpa tempore optio!',
	},
	{
		id: 2,
		title: 'Wisdom O',
		des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nobis delectus quos. Blanditiis eveniet quis saepe, voluptatem culpa tempore optio!',
	},
	{
		id: 3,
		title: 'Collins C',
		des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nobis delectus quos. Blanditiis eveniet quis saepe, voluptatem culpa tempore optio!',
	},
];
function WordsOfAppreciation() {
	const [initial, setInitial] = useState(1);
	const [currentSlide, setCurrentSlide] = useState(0);
	console.log(currentSlide);
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slidesData.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [slidesData.length]);

	const handleSlideChange = (slideIndex: number) => {
		setCurrentSlide(slideIndex);
	};

	// Clickable controls
	const handlePrevSlide = () => {
		setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
	};

	const handleNextSlide = () => {
		setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
	};

	return (
		<section className=' px-6  py-6 xl:px-10  xl:py-[148px] bg-sb-white-two shadow-[0px_1px_4px_0px_#0C0C0D0D] mt-10 rounded-2xl'>
			<div>
				<h2 className=' text-left text-4xl  xl:text-[48px] text-sb-primary tracking-[-2%] leading-[120%] font-bold'>
					Words of confirmation
				</h2>

				<p className='text-left mt-3 2xl:mt-3 2xl:text-xl font-normal text-sb-dark-one'>
					See how businesses like yours are thriving with SupportBuy
				</p>
				<div>
					<div className='flex justify-between items-center'>
						<div className='flex'>
							<Image
								src='/testimonial.svg'
								width={56}
								height={56}
								className='rounded-full'
								alt=''
							/>
							<Image
								src='/testimonial.svg'
								width={56}
								height={56}
								className='rounded-full'
								alt=''
							/>
						</div>
						<div>
							<div className='flex justify-center  items-center gap-2 '>
								<button
									className='w-8 h-8 bg-sb-white-one rounded-sm p-1 cursor-pointer'
									onClick={handlePrevSlide}
								>
									<IconChevronLeft width={24} height={24} color='#CDF546' />
								</button>
								<span>
									{/* {currentSlide + 1}
									<span>/</span>
									{slidesData.length} */}
								</span>

								<button
									className='w-8 h-8 bg-sb-white-one rounded-sm p-1 cursor-pointer'
									onClick={handleNextSlide}
								>
									<IconChevronRight width={24} height={24} color='#CDF546' />
								</button>
							</div>
						</div>
					</div>

					<div></div>
				</div>
			</div>
		</section>
	);
}

export default WordsOfAppreciation;
