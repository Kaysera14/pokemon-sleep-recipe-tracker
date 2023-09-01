import { Link } from "react-router-dom";
import notFound from "/assets/404.gif";

export function NotFound() {
	return (
		<section className="flex flex-col justify-center items-center gap-12">
			<h1 className="text-[var(--quaternary-color)] text-3xl">
				There's nothing here! 404
			</h1>
			<img src={notFound} alt="This is fine." />
			<Link
				to="/"
				className="flex text-[var(--tertiary-color)] bg-[var(--secondary-color)] rounded-2xl border-black items-center justify-center w-36 h-8"
			>
				<b>Go back home</b>
			</Link>
		</section>
	);
}
