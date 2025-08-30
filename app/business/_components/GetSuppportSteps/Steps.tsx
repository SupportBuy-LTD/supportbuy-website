import React from 'react';

export interface StepsProps {
	id: string;
	title: string;
	description: string;
}
function Steps({ id, title, description }: StepsProps) {
	return (
		<div className='py-3'>
			<div className='flex items-center gap-[10px]'>
				<span className='text-base text-sb-primary'>0{id}</span>

				<hr className='text-sb-primary   w-full' />
			</div>
			<div className='mt-4 space-y-2'>
				<h2 className='text-xl font-normal text-sb-dark-one'>{title}</h2>
				<p className='text-sm font-normal text-sb-dark-one'>{description}</p>
			</div>
		</div>
	);
}

export default Steps;
