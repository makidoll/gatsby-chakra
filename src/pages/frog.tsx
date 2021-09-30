import { Image } from "@chakra-ui/image";
import { Heading, HStack } from "@chakra-ui/layout";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Discord } from "../components/discord";
import frog from "../images/frog.png";

export default function Caitlyn() {
	return (
		<>
			<Heading pt="8" size="2xl">
				I love Caitlyn so much
			</Heading>
			<HStack p="4">
				<Image borderRadius="8" src={frog}></Image>
				<StaticImage
					src="../images/murphy.png"
					width={300}
					quality={90}
					formats={["auto", "webp", "avif"]}
					alt="A Gatsby astronaut"
					style={{ marginBottom: `1.45rem` }}
				/>
			</HStack>
			<Discord />
		</>
	);
}
