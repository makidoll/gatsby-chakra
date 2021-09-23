import { Button } from "@chakra-ui/button";
import { Box, Container, Heading } from "@chakra-ui/layout";
import { Link } from "gatsby";
import * as React from "react";
import { FaFrog } from "react-icons/fa";
import { MdHelp, MdHome } from "react-icons/md";

export default function Navbar() {
	const routes = [
		{ icon: <MdHome />, name: "Home", link: "/" },
		{ icon: <FaFrog />, name: "Frog", link: "/frog" },
		{ icon: <MdHelp />, name: "Helping", link: "/helping" },
	];

	return (
		<Box backgroundColor="red.400" color="white" w="100%" p="1" mb="2">
			<Container
				maxW="container.md"
				display="flex"
				flexDirection="row"
				alignItems="center"
			>
				<Link to="/">
					<Heading size="lg" mr="2">
						Maki
					</Heading>
				</Link>
				{routes.map(route => (
					<Link to={route.link} key={route.link}>
						<Button
							leftIcon={route.icon}
							size="sm"
							variant="solid"
							color="black"
							background="white"
							ml="2"
						>
							{route.name}
						</Button>
					</Link>
				))}
			</Container>
		</Box>
	);
}
