// import { useEffect, useState } from 'react';

// function useWindowSize() {
// 	const [isMobile, setIsMobile] = useState(false);

// 	useEffect(() => {
// 		const handleSize = () => {
// 			setIsMobile(window.innerWidth < 1024);
// 		};
// 		window.addEventListener('resize', handleSize);
// 		handleSize(); // inital check incase the hook is loaded after resize event

// 		return () => {
// 			window.removeEventListener('resize', handleSize);
// 		};
// 	}, []);

// 	return { isMobile };
// }

// export default useWindowSize;
// import { useEffect, useState } from 'react';

// function useWindowSize(debounceDelay = 150) {
// 	const [isMobile, setIsMobile] = useState(false);

// 	useEffect(() => {
// 		let timer: ReturnType<typeof setTimeout>;

// 		const handleSize = () => {
// 			clearTimeout(timer);
// 			timer = setTimeout(() => {
// 				setIsMobile(window.innerWidth < 1024);
// 			}, debounceDelay);
// 		};

// 		window.addEventListener('resize', handleSize);

// 		// initial check
// 		handleSize();

// 		return () => {
// 			clearTimeout(timer);
// 			window.removeEventListener('resize', handleSize);
// 		};
// 	}, [debounceDelay]);

// 	return { isMobile };
// }

// export default useWindowSize;

import { useEffect, useState } from 'react';

function useWindowSize() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const updateSize = () => {
			setIsMobile(window.innerWidth < 1024);
		};

		const observer = new ResizeObserver(() => {
			updateSize();
		});

		// Observe <html> (documentElement reflects viewport size)
		observer.observe(document.documentElement);

		// Initial check
		updateSize();

		return () => {
			observer.disconnect();
		};
	}, []);

	return { isMobile };
}

export default useWindowSize;
