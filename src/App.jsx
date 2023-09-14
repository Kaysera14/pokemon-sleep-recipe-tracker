import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";
import { CurryRecipes } from "./pages/curry-recipes-page";
import { IndexPage } from "./pages/index-page";
import { SaladRecipes } from "./pages/salads-recipes-page";
import { DrinksDessertsRecipes } from "./pages/drinks-desserts-recipes";
import { NotFound } from "./pages/not-found";
import { NavBar } from "./components/nav-bar";

function App() {
	return (
		<>
			<Header />
			<NavBar />
			<Routes>
				<Route path="/" element={<IndexPage />} />
				<Route path="/recipes/curry" element={<CurryRecipes />} />
				<Route path="/recipes/salads" element={<SaladRecipes />} />
				<Route
					path="/recipes/drinks-desserts"
					element={<DrinksDessertsRecipes />}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
