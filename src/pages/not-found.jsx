import { Link } from "react-router-dom";
import notFound from "../assets/404.gif";

export function NotFound() {
	return (
		<section
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: "3rem",
			}}
		>
			<h1 style={{ color: "var(--quaternary-color)", fontSize: "2rem" }}>
				There's nothing here! 404
			</h1>
			<img src={notFound} alt="This is fine." />
			<Link
				to="/"
				style={{
					display: "flex",
					color: "var(--tertiary-color)",
					backgroundColor: "var(--secondary-color)",
					borderRadius: "1rem",
					border: "1px solid black",
					width: "10rem",
					height: "2rem",
					alignSelf: "center",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<b>Go back home</b>
			</Link>
		</section>
	);
}
