import ButtonLink from '@/components/shared/ButtonLink';

function FooterCTA() {
	return (
		<>
			<section className=' rounded-3xl my-20 px-6  py-20 xl:px-10  xl:py-[148px] bg-sb-secondary shadow-[0px_1px_4px_0px_#0C0C0D0D] '>
				<div>
					<h2 className='text-left xl:text-center text-[32px]  xl:text-[40px] text-sb-primary tracking-[-2%] leading-[120%] font-bold'>
						Ready to Transform Your Sales?
					</h2>

					<p className=' text-left xl:text-center mt-3 2xl:mt-3 text-base 2xl:text-xl font-normal text-sb-dark-one'>
						Join the growing network of businesses leveraging community power on
						SupportBuy.
						<br className='hidden xl:block' /> Expand your customer base and
						simplify your payment collection.
					</p>
				</div>
				<div className='flex justify-center'>
					<div className=' pt-[62px] flex flex-col md:flex-row gap-[7px]  justify-center w-fit md:w-full'>
						<ButtonLink
							href='#'
							className='hover:bg-[#144419ee] w-fit px-5 py-3.5 rounded-[50px] bg-sb-primary text-[17px] text-sb-secondary h-[50px]'
						>
							Register Your Business Today
						</ButtonLink>
					</div>
				</div>
			</section>
		</>
	);
}

export default FooterCTA;
