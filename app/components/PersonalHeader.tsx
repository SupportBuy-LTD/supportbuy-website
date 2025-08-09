'use client';
import Image from 'next/image';
import React from 'react';
import ReactPlayer from 'react-player';
import ButtonLink from './shared/ButtonLink';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import { Button } from '@heroui/react';
import { Modal, ModalContent, ModalBody, useDisclosure } from '@heroui/modal';
import { HEROVIDEO } from '@/utils/constants';
function PersonalHeader() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<header className=' flex items-center p-20 bg-sb-white-one '>
			<div>
				<h1 className='text-[72px] text-sb-primary font-[700] leading-[120%] tracking-[-3%]'>
					Get financial
					<br /> support <span className=' font-light'>fast</span>, transparent
					& social
				</h1>
				<p className='mt-6 text-sb-dark-one leading-[120%]'>
					SupportBuy makes it easy for you to raise funds for daily
					<br /> needs, from bills to shopping, with the power of your
					<br />
					community.
				</p>
				<div className='mt-10 space-x-[7px] flex items-center'>
					<ButtonLink
						href='#'
						className='px-5 py-3.5 rounded-[50px] bg-sb-primary text-[17px] text-sb-secondary h-[50px]'
					>
						Get Started Free
					</ButtonLink>
					<Button
						onPress={onOpen}
						href='#'
						className='px-5 py-3.5 rounded-[50px] bg-sb-secondary cursor-pointer text-[17px] text-sb-primary h-[50px]'
					>
						<IconPlayerPlayFilled /> <span>See How It Works</span>
					</Button>
				</div>
			</div>
			<div>
				<Image
					src='/personal_hero_illustration.svg'
					width={498}
					height={740}
					alt='Enjoyment'
				/>
			</div>

			<Modal
				isDismissable={false}
				isKeyboardDismissDisabled={true}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				size='2xl'
				backdrop='opaque'
				classNames={{
					body: 'py-6',
					backdrop: 'bg-sb-primary/50 backdrop-opacity-40',
					base: 'border-[#292f46] bg-sb-dark-one dark:bg-[#19172c] text-[#a8b0d3]',
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
		</header>
	);
}

export default PersonalHeader;
