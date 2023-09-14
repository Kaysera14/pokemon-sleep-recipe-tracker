import { Link } from "react-router-dom";

export function NavBar() {
	return (
		<>
			<section>
				<ul
					className="flex justify-around items-center w-[23rem] h-9 bg-[var(--secondary-color)] list-none 
					border border-black rounded-full mt-4 md:mt-0 md:w-screen md:rounded-none md:border-0 md:border-b"
				>
					<li>
						<Link to="/recipes/curry" className="text-[var(--tertiary-color)]">
							<b>Curries</b>
						</Link>
					</li>
					<li>
						<Link
							to="/recipes/drinks-desserts"
							className="text-[var(--tertiary-color)]"
						>
							<b>Drinks/Desserts</b>
						</Link>
					</li>
					<li>
						<Link to="/recipes/salads" className="text-[var(--tertiary-color)]">
							<b>Salads</b>
						</Link>
					</li>
				</ul>
			</section>
		</>
	);
}
