'use client';
import Image from 'next/image';
import React, { memo } from 'react';
import ReactPlayer from 'react-player';
import ButtonLink from './shared/ButtonLink';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { Button } from '@heroui/button';
import { Modal, ModalContent, ModalBody, useDisclosure } from '@heroui/modal';
import { HEROVIDEO } from '@/utils/constants';

function PersonalHeader() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<header className='md:flex md:items-center px-6 pt-40 pb-20 md:px-10 lg:px-20 bg-sb-white-one lg:h-[900px]'>
				<div className='max-w-[729px]'>
					<h1 className='text-[48px] lg:text-[72px] text-sb-primary font-bold leading-[120%] tracking-[-3%]'>
						Get financial
						<br /> support <span className=' custom-header-light'>fast</span>,
						transparent & social
					</h1>

					<p className=' text-[20px] mt-6 text-sb-dark-one leading-[120%]'>
						SupportBuy makes it easy for you to
						<br className='lg:hidden block' /> raise funds for daily
						<br className='hidden lg:block' /> needs, from{' '}
						<br className='lg:hidden block' /> bills to shopping, with the power
						of <br className='lg:hidden block' />
						your <br className='hidden lg:block' />
						community.
					</p>
					<div className='mt-[38px] space-y-[7px] md:space-x-[7px] flex  flex-col md:flex-row md:items-center w-fit lg:w-full '>
						<ButtonLink
							href='#'
							className='hover:bg-[#144419ee] w-full md:w-fit px-5 py-3.5 rounded-[50px] bg-sb-primary text-[17px] text-sb-secondary text-center h-[50px] block md:mt-2'
						>
							Get Started Free
						</ButtonLink>
						<Button
							onPress={onOpen}
							href='#'
							className='hover:bg-[#ccf546f1] w-fit px-5 py-3.5 rounded-[50px] bg-sb-secondary cursor-pointer text-[17px] text-sb-primary h-[50px]'
						>
							<IconPlayerPlayFilled /> <span>See How It Works</span>
						</Button>
					</div>
				</div>
				<div className=' mt-10 lg:mt-0 lg:relative  lg:h-[740px] '>
					<img
						src='/hero_image.png'
						alt='Enjoyment'
						className='hidden md:block w-full h-full '
					/>
					<Image
						src='/mobile_hero_illustration.svg'
						width={345}
						height={414}
						alt='Enjoyment'
						className='md:hidden w-full'
					/>
				</div>
			</header>
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

export default memo(PersonalHeader);
