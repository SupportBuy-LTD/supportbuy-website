'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
	children: ReactNode;
	direction?: 'up' | 'down' | 'left' | 'right' | 'none';
	delay?: number;
	duration?: number;
	className?: string;
	staggerChildren?: number;
}

export default function ScrollReveal({
	children,
	direction = 'up',
	delay = 0,
	duration = 0.6,
	className = '',
	staggerChildren = 0,
}: ScrollRevealProps) {
	const getVariants = () => {
		const transition = { duration, delay, ease: 'easeOut', staggerChildren };
		switch (direction) {
			case 'up':
				return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition } };
			case 'down':
				return { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0, transition } };
			case 'left':
				return { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition } };
			case 'right':
				return { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition } };
			case 'none':
			default:
				return { hidden: { opacity: 0 }, visible: { opacity: 1, transition } };
		}
	};

	return (
		<motion.div
			className={className}
			variants={getVariants()}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.15 }}
		>
			{children}
		</motion.div>
	);
}

interface ItemRevealProps {
	children: ReactNode;
	direction?: 'up' | 'down' | 'left' | 'right' | 'none';
	className?: string;
}

export function ItemReveal({ children, direction = 'up', className = '' }: ItemRevealProps) {
	const getVariants = () => {
		switch (direction) {
			case 'up':
				return { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
			case 'down':
				return { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } };
			case 'left':
				return { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } };
			case 'right':
				return { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } };
			case 'none':
			default:
				return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
		}
	};
	return (
		<motion.div variants={getVariants()} className={className}>
			{children}
		</motion.div>
	);
}
