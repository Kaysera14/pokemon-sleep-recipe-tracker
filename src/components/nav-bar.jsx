import { Link } from "react-router-dom";

export function NavBar() {
	return (
		<>
			<section>
				<ul
					style={{
						display: "flex",
						listStyle: "none",
						justifyContent: "space-evenly",
						width: "30.5rem",
						height: "2rem",
						backgroundColor: "var(--secondary-color)",
						border: "1px solid black",
						borderRadius: "2rem",
						alignItems: "center",
					}}
				>
					<li>
						<Link
							to="/recipes/curry"
							style={{ color: "var(--tertiary-color)" }}
						>
							Curries
						</Link>
					</li>
					<li>
						<Link
							to="/recipes/drinks-desserts"
							style={{ color: "var(--tertiary-color)" }}
						>
							Drinks/Desserts
						</Link>
					</li>
					<li>
						<Link
							to="/recipes/salads"
							style={{ color: "var(--tertiary-color)" }}
						>
							Salads
						</Link>
					</li>
				</ul>
			</section>
		</>
	);
}
