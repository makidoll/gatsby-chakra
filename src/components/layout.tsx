import { VStack } from "@chakra-ui/layout";
import { ChakraProvider, extendTheme, useColorMode } from "@chakra-ui/react";
import "@fontsource/roboto";
import * as React from "react";
import "../styles/styles.scss";
import Navbar from "./navbar";

const theme = extendTheme({
	config: {
		initialColorMode: "light",
		useSystemColorMode: false,
	},
	fonts: {
		heading: "KG Always A Good Time",
		body: "Roboto",
	},
	components: {
		Heading: {
			baseStyle: {
				fontWeight: "normal",
				textTransform: "lowercase",
			},
		},
	},
});

function LayoutContent({ children }) {
	const { setColorMode } = useColorMode();
	setColorMode("light");

	return (
		<VStack>
			<Navbar />
			{children}
		</VStack>
	);
}

export default function Layout({ children }) {
	return (
		<ChakraProvider theme={theme}>
			<LayoutContent>{children}</LayoutContent>
		</ChakraProvider>
	);
}
