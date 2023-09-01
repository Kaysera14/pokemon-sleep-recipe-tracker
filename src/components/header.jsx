import { Link } from "react-router-dom";

export function Header() {
	return (
		<>
			<header className="flex flex-row items-center text-[var(--quaternary-color)] justify-center bg-[var(--secondary-color)] border-b-black min-h-[4rem] border-black border-b">
				<img
					className="h-12 "
					style={{ visibility: "hidden" }}
					src="/assets/pikachu.png"
					alt="pikachu with a nightcap"
				/>
				<Link className="m-auto" to="/">
					Recipe Tracker
				</Link>
				<Link to="https://youtu.be/wFRTzOzp95M">
					<img
						className="h-12 "
						src="/assets/pikachu.png"
						alt="pikachu with a nightcap"
					/>
				</Link>
			</header>
		</>
	);
}
