import { HEROVIDEO } from '@/utils/constants';
import { HowSupportBuyempowersyou } from '@/utils/data';
import { Modal, ModalBody, ModalContent, useDisclosure } from '@heroui/react';
import { IconChartDots2, IconShare } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';
import ReactPlayer from 'react-player';

function SupportBuyEmpowers() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<>
			<section className=' px-6  py-6 xl:px-[66px]  xl:py-[137px] bg-sb-white-two shadow-[0px_1px_4px_0px_#0C0C0D0D] mt-10 rounded-2xl'>
				<div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
					<div>
						<h2 className='text-4xl text-sb-primary xl:text-5xl font-bold'>
							How SupportBuy empowers you
						</h2>
						<p className='mt-3 text-base 2xl:text-xl text-sb-dark-one'>
							We&apos;ve built a platform where support isn&apos;t charity,
							it&apos;s <br className=' hidden xl:block' />
							community. Experience a new level of ease, trust, and
							<br className=' hidden xl:block' />
							connection.
						</p>
					</div>
					<div className='p-4 mt-3 xl:mt-0 bg-sb-white-one shadow-[0px_1px_4px_0px_#0C0C0D0D] rounded-2xl xl:bg-none xl:shadow-[0px_0px_0px_0px]'>
						<Image
							src='/HowSupportBuyempowersyou.svg'
							role='button'
							alt='How SupportBuy empowers you'
							width={513}
							height={282}
							className='w-full cursor-pointer'
							onClick={onOpen}
						/>
					</div>
				</div>
				<div className='grid grid-auto gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  mt-6 xl:mt-10 '>
					{HowSupportBuyempowersyou.map((data) => {
						return (
							<div
								key={data.id}
								className='rounded-2xl bg-sb-white-one px-6 pt-6 pb-[60px]'
							>
								<div className='flex gap-2 items-center'>
									<data.icon className='text-sb-primary' />

									<h3 className=' text-base lg:text-[22px] text-sb-primary font-normal'>
										{data.title}
									</h3>
								</div>
								<p className='text-sm text-sb-dark-one leading-[140%] pl-9 mt-4'>
									{data.description}
								</p>
							</div>
						);
					})}
				</div>
			</section>
			<Modal
				isDismissable={false}
				isKeyboardDismissDisabled={true}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				size='5xl'
				backdrop='opaque'
				classNames={{
					body: 'py-6',
					backdrop: 'bg-sb-primary/50 backdrop-opacity-40',
					base: 'border-[#292f46] bg-sb-primary dark:bg-[#19172c] text-[#a8b0d3]',
				}}
				radius='lg'
			>
				<ModalContent>
					<>
						<ModalBody>
							<ReactPlayer
								src={HEROVIDEO}
								style={{
									width: '100%',
									height: 'auto',
									aspectRatio: '16/9',
									borderRadius: '24px',
									marginTop: '24px',
								}}
							/>
						</ModalBody>
					</>
				</ModalContent>
			</Modal>
		</>
	);
}

export default SupportBuyEmpowers;
