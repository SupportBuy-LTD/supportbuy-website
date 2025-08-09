'use client';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

function ThemeToggler() {
	const [mounted, setMounted] = useState(false);

	const { theme, setTheme, systemTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;
	const currentTheme = theme === 'system' ? systemTheme : theme;
	return (
		<button
			className='bg-sb-primary dark:bg-white'
			onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
		>
			{currentTheme === 'dark' ? 'sun icon' : 'Moon icon'}
		</button>
	);
}

export default ThemeToggler;
