import { faq } from '@/utils/faq';
import { Accordion, AccordionItem } from '@heroui/react';
import { IconPlus, IconX } from '@tabler/icons-react';
function Faq() {
	const itemClasses = {
		base: 'py-0 w-full',
		title:
			'text-sb-dark-one dark:text-sb-dark-one text-base xl:text-xl font-semibold',
		indicator: 'text-medium cursor-pointer',
		content: 'text-sb-dark-one text-sm font-normal',
	};
	return (
		<>
			<section className=' px-6  py-6 xl:px-[66px]  xl:py-[137px] bg-sb-white-two shadow-[0px_1px_4px_0px_#0C0C0D0D] mt-10 rounded-2xl'>
				<div className='grid grid-cols-1 lg:grid-cols-2 '>
					<div>
						<h2 className='text-4xl text-sb-primary  xl:text-5xl font-bold'>
							Frequently Asked Questions
						</h2>
					</div>
					<div>
						<Accordion defaultExpandedKeys={['0']} itemClasses={itemClasses}>
							{faq.map((faq, i) => (
								<AccordionItem
									key={i}
									aria-label={faq.question}
									title={faq.question}
									indicator={({ isOpen }) =>
										isOpen ? <IconX /> : <IconPlus />
									}
								>
									{faq.answer}
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>
		</>
	);
}

export default Faq;
