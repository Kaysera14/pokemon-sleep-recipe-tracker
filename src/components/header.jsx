import { Link } from "react-router-dom";
import { NavBar } from "./nav-bar";

export function Header() {
	return (
		<>
			<header
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "1rem",
				}}
			>
				<Link to="/">
					<img
						style={{ width: "15.625rem" }}
						src="/assets/logo.png"
						alt="logo de pokemon sleep"
					/>
				</Link>
				<NavBar />
			</header>
		</>
	);
}
