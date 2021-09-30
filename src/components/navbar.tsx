import { Button } from "@chakra-ui/button";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import { graphql, Link, StaticQuery } from "gatsby";
import * as React from "react";
import { FaFrog } from "react-icons/fa";
import { MdHelp, MdHome } from "react-icons/md";
import { useBehaviorSubject } from "../hooks/use-behavior-subject";
import { useService } from "../services/injector";
import { NamesService } from "../services/names.service";
import { Discord } from "./discord";

function Navbar() {
	const routes = [
		{ icon: <MdHome />, name: "Home", link: "/" },
		{ icon: <FaFrog />, name: "Frog", link: "/frog" },
		{ icon: <MdHelp />, name: "Helping", link: "/helping" },
	];

	const namesService = useService<NamesService>(NamesService);
	const names = useBehaviorSubject(
		namesService.names$, //.pipe(map(n => n.length)),
	);

	return (
		<Box backgroundColor="red.400" color="white" w="100%" p="1" mb="2">
			<Container
				maxW="container.md"
				display="flex"
				flexDirection="row"
				alignItems="center"
			>
				<Link to="/">
					<StaticQuery
						query={graphql`
							query NavbarQuery {
								site {
									siteMetadata {
										title
									}
								}
							}
						`}
						render={data => (
							<Heading size="lg" mr="2">
								{data.site.siteMetadata.title}
							</Heading>
						)}
					></StaticQuery>
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
				<Text ml="4">{names.length} names</Text>
				<Flex flex="1" />
				<Discord light flipped small />
			</Container>
		</Box>
	);
}

export default Navbar;
