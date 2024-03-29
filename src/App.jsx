import "./App.css";

import ContactForm from "./Components/ContactFrom/ContactForm";
import ContactHeader from "./Components/ContactHeader/ContactHeader";
import Navigation from "./Components/Navigation/Navigation";

function App() {
	return (
		<>
			<Navigation />
			<main className="main-container">
				<ContactHeader />
				<ContactForm />
			</main>
		</>
	);
}

export default App;
