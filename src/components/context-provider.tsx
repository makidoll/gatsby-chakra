import * as React from "react";

export const Context = React.createContext<any>({});

function ContextProvider({ children }) {
	const [names, setNames] = React.useState(["maki", "caitlyn"]);
	return (
		<Context.Provider value={{ names, setNames }}>
			{children}
		</Context.Provider>
	);
}

export default ContextProvider;
