import "./App.css";
import { Header } from "./components/header";
import { NavBar } from "./components/nav-bar";
import { Recipes } from "./components/recipes";

function App() {
	return (
		<>
			<Header />
			<NavBar />
			<Recipes />
		</>
	);
}

export default App;
