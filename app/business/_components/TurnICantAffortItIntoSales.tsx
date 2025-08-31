import { TurnICantAffortItIntoSalesData } from '@/utils/data';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

function TurnICantAffortItIntoSales() {
	return (
		<section className='bg-sb-tertiary px-6 py-10 xl:p-20 rounded-3xl flex gap-8 2xl:gap-10'>
			<div className=' hidden xl:block shrink-0 w-full max-w-[621px] '>
				<Image
					src='/Desktop_TurnICantAffortItIntoSales.svg'
					alt='hh'
					width={621}
					height={1056}
					className='w-full'
				/>
			</div>
			<div className='w-full '>
				<h2 className='text-3xl lg:text-[40px] 2xl:text-5xl text-sb-primary font-bold'>
					Turn “I can’t afford it” into sales
				</h2>
				<p className=' text-base lg:text-xl text-sb-dark-one mt-4 mb-6'>
					We empower your customers to get community funding for your offerings,
					ensuring you get paid directly and reliably.
				</p>

				<div className=' lg:hidden  w-full  '>
					<Image
						src='/Mobile_TurnICantAffortItIntoSales.svg'
						alt='hh'
						width={313}
						height={397}
						className='w-full'
					/>
				</div>

				<div className='flex flex-col gap-2 mt-10 xl:mt-6'>
					{TurnICantAffortItIntoSalesData.map((data) => {
						return (
							<div
								key={data.id}
								className='rounded-2xl bg-sb-primary px-6 pt-6 pb-[60px]'
							>
								<div className='flex gap-2 items-center'>
									<data.icon className='text-sb-tertiary' />

									<h3 className=' text-base lg:text-lg 2xl:text-[22px] text-sb-tertiary font-normal'>
										{data.title}
									</h3>
								</div>
								<p className='text-sm text-sb-white-one leading-[140%] pl-9 mt-4'>
									{data.description}
								</p>
							</div>
						);
					})}
					<div className='flex  justify-center lg:justify-start mt-12'>
						<Button
							href='#'
							className='hover:bg-[#ccf546f1] w-fit px-5 py-3.5 rounded-[50px] bg-sb-secondary cursor-pointer text-[17px] text-sb-primary h-[50px]'
						>
							Open Your Business Account Now
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TurnICantAffortItIntoSales;
// import Image from 'next/image';
// import React from 'react';

// function TurnICantAffortItIntoSales() {
// 	return (
// 		<section className='bg-sb-tertiary p-20 rounded-3xl flex gap-10 '>
// 			{/* Fixed-width image container */}
// 			<div className='flex-shrink-0 w-[621px]'>
// 				<Image
// 					src='/Desktop_TurnICantAffortItIntoSales.svg'
// 					alt='Turn sales illustration'
// 					width={621}
// 					height={1056}
// 					className='w-full h-auto'
// 				/>
// 			</div>

// 			{/* Text grows freely */}
// 			<div className='flex-1'>
// 				<h2 className=' lg:text-[40px] 2xl:text-5xl text-sb-primary font-bold'>
// 					Turn “I can’t afford it” into sales
// 				</h2>
// 				<p className='text-xl text-sb-dark-one mt-4'>
// 					We empower your customers to get community funding for your offerings,
// 					ensuring you get paid directly and reliably.
// 				</p>
// 			</div>
// 		</section>
// 	);
// }

// export default TurnICantAffortItIntoSales;
