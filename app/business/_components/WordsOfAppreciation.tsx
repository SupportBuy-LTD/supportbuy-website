import { Button } from '@heroui/react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
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
				<h2 className=' text-center text-4xl  xl:text-[48px] text-sb-primary tracking-[-2%] leading-[120%] font-bold'>
					Words of appreciation
				</h2>

				<p className='text-center mt-3 2xl:mt-3 2xl:text-xl font-normal text-sb-dark-one'>
					Hear from our users who have transformed the way they
					<br /> give and receive support.
				</p>
			</div>
			<div>
				<div className='flex justify-center  items-center gap-2 mt-6'>
					<button
						className='w-8 h-8 bg-sb-white-one rounded-sm p-1 cursor-pointer'
						onClick={handlePrevSlide}
					>
						<IconChevronLeft width={24} height={24} color='#CDF546' />
					</button>
					<span>
						{currentSlide + 1}
						<span>/</span>
						{slidesData.length}
					</span>
					{/* {slidesData.map((_, slideIndex) => (
						<span key={slideIndex}>{slideIndex}</span>
					))} */}
					<button
						className='w-8 h-8 bg-sb-white-one rounded-sm p-1 cursor-pointer'
						onClick={handleNextSlide}
					>
						<IconChevronRight width={24} height={24} color='#CDF546' />
					</button>
				</div>
				<div className='overflow-hidden relative w-full max-w-[391px] mx-auto mt-6'>
					<div
						className='flex transition-transform duration-700 ease-in-out'
						style={{ transform: `translateX(-${currentSlide * 100}%)` }}
					>
						{slidesData.map((slide, index) => (
							<div
								key={slide.id}
								className='bg-sb-white-one py-8 px-5 rounded-lg min-w-full'
							>
								<h2 className='text-center text-base font-medium text-black'>
									{slide.title}
								</h2>
								<p className='text-black text-center mt-12'>{slide.des}</p>
							</div>
						))}
					</div>
				</div>
				<div className='flex item-center justify-center gap-2 mt-8'>
					{slidesData.map((_, slideIndex) => (
						<div
							key={slideIndex}
							className={`h-2 w-2 rounded-full cursor-pointer bg-gray-800 ${
								currentSlide === slideIndex
									? ' bg-sb-primary w-4'
									: 'bg-zinc-600'
							}`}
							onClick={() => handleSlideChange(slideIndex)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default WordsOfAppreciation;
