import { useEffect, useState } from 'react';

function useWindowSize() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleSize = () => {
			setIsMobile(window.innerWidth < 1024);
		};
		window.addEventListener('resize', handleSize);
		handleSize(); // inital check incase the hook is loaded after resize event

		return window.removeEventListener('resize', handleSize);
	}, []);

	return { isMobile };
}

export default useWindowSize;
