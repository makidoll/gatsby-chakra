import { Button } from "@chakra-ui/button";
import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import { StaticQuery, graphql, Link } from "gatsby";
import * as React from "react";
import { FaFrog } from "react-icons/fa";
import { MdHelp, MdHome } from "react-icons/md";
import { useBehaviorSubject } from "../hooks/use-behavior-subject";
import { NamesService } from "../services/names.service";

function Navbar({ data }) {
	const routes = [
		{ icon: <MdHome />, name: "Home", link: "/" },
		{ icon: <FaFrog />, name: "Frog", link: "/frog" },
		{ icon: <MdHelp />, name: "Helping", link: "/helping" },
	];

	const names = useBehaviorSubject(NamesService.getInstance().names$);

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
							query HomePageQuery {
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
			</Container>
		</Box>
	);
}

export default Navbar;
