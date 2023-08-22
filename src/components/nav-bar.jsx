export function NavBar() {
	return (
		<>
			<section>
				<ul
					style={{
						display: "flex",
						listStyle: "none",
						justifyContent: "space-evenly",
						border: "1px solid black",
						borderRadius: "2rem",
					}}
				>
					<li>
						<a href="/recipes/curry">Curries</a>
					</li>
					<li>
						<a href="/recipes/drinks-desserts">Drinks/Desserts</a>
					</li>
					<li>
						<a href="/recipes/salads">Salads</a>
					</li>
				</ul>
			</section>
		</>
	);
}
