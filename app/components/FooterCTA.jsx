import { Button } from '@heroui/react';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import ButtonLink from './shared/ButtonLink';
import { Modal, ModalContent, ModalBody, useDisclosure } from '@heroui/modal';
import ReactPlayer from 'react-player';
import { HEROVIDEO } from '@/utils/constants';

function FooterCTA() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<>
			<section className=' px-6  py-20 xl:px-10  xl:py-[148px] bg-sb-secondary shadow-[0px_1px_4px_0px_#0C0C0D0D] '>
				<div>
					<h2 className=' text-left xl:text-center text-[32px]  xl:text-[40px] text-sb-primary tracking-[-2%] leading-[120%] font-bold'>
						Ready to experience the power of community support?
					</h2>

					<p className='text-left xl:text-center mt-3 2xl:mt-3 text-base 2xl:text-xl font-normal text-sb-dark-one'>
						Join thousands of young Africans already using SupportBuy to get the
						help they need,
						<br className='hidden xl:block' /> transparently and with dignity.
						It's more than just an app; it's a movement.
					</p>
				</div>
				<div className=' pt-[62px] flex flex-col md:flex-row gap-[7px]  justify-center w-fit md:w-full'>
					<ButtonLink
						href='#'
						className='hover:bg-[#144419ee] w-fit px-5 py-3.5 rounded-[50px] bg-sb-primary text-[17px] text-sb-secondary h-[50px]'
					>
						Create Your First Campaign
					</ButtonLink>
					<Button
						onPress={onOpen}
						href='#'
						className='hover:bg-[#dfe7d8] lg:w-fit px-5 py-3.5 rounded-[50px] bg-sb-tertiary cursor-pointer text-[17px] text-sb-primary h-[50px] '
					>
						<IconPlayerPlayFilled /> <span>See How It Works</span>
					</Button>
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

export default FooterCTA;
