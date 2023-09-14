import { useEffect, useState } from "react";

const TABLET_BREAKPOINT = 480;
const LAPTOP_BREAKPOINT = 720;
const DESKTOP_BREAKPOINT = 1024;

export function useMediaBreakpoint() {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return {
		isTablet: width >= TABLET_BREAKPOINT,
		isLaptop: width >= LAPTOP_BREAKPOINT,
		isDesktop: width >= DESKTOP_BREAKPOINT,
	};
}
