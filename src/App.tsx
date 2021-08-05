import React, { useState } from "react";
import Checkout from "./Checkout";
import DataDashboard from "./DataDashboard";
import FormComponent from "./form";
import { User } from "./interfaces";

interface AppProps {
	headerText: string;
	extraText?: string; // optional, not required
}

function Header({ headerText, extraText }: AppProps) {
	return (
		<>
			<h1>{headerText}</h1>
			{extraText && <p>{extraText}</p>}
		</>
	);
}

function ShowUser() {
	const [user, setUser] = useState<User | null>(null);
	const fetchUser = () =>
		setUser({
			name: "saharsh",
			country: "india",
			age: 22,
		});

	return (
		<>
			<button onClick={fetchUser} disabled = {user != null}>Assign the user</button>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
		</>
	);
}

function App() {
	return (
		<>
			<Header headerText="Hi there!" />
			<Header
				headerText="Hello again!"
				extraText="This is totally optional"
			/>
      <hr />
			<ShowUser />
      <hr />
      <FormComponent/>
      <hr />
      <Checkout />
      <hr />
      <DataDashboard />
      <hr />
		</>
	);
}

export default App;
