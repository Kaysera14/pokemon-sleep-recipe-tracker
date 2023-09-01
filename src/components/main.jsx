import { NavBar } from "./nav-bar";

export function Main({ children }) {
	return (
		<main className="overflow-scroll flex flex-row flex-wrap flex-grow gap-y-4 gap-x-4 justify-evenly text-center md:justify-center md:items-start xl:flex-none">
			<NavBar />
			{children}
		</main>
	);
}
