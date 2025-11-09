import { useEffect, useState } from 'react';

function useWindowSize() {
	// const [isMobile, setIsMobile] = useState(false);

	// useEffect(() => {
	// 	const updateSize = () => {
	// 		setIsMobile(window.innerWidth < 1024);
	// 	};

	// 	const observer = new ResizeObserver(() => {
	// 		updateSize();
	// 	});

	// 	// Observe <html> (documentElement reflects viewport size)
	// 	observer.observe(document.documentElement);

	// 	// Initial check
	// 	updateSize();

	// 	return () => {
	// 		observer.disconnect();
	// 	};
	// }, []);

	// return { isMobile };

	const [isMobile, setIsMobile] = useState(
		typeof window !== 'undefined' ? window.innerWidth < 1024 : false
	);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 1024);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return { isMobile };
}

export default useWindowSize;
