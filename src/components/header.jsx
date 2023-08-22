export function Header() {
	return (
		<header
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				backgroundColor: "grey",
				border: "1px solid black",
				borderRadius: "2rem",
			}}
		>
			<a href="/">
				<img
					style={{ width: "15.625rem" }}
					src="https://imgur.com/UIXuHPh.png"
					alt="logo de pokemon sleep"
				/>
				Recipe Tracker
			</a>
		</header>
	);
}
