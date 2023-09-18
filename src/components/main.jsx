export function Main({ children }) {
	return (
		<main className="overflow-x-scroll flex flex-row flex-wrap flex-grow gap-y-4 gap-x-4 justify-evenly text-center pt-2 md:justify-center md:items-start md:py-4">
			{children}
		</main>
	);
}
