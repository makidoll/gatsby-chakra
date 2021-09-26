import { Button } from "@chakra-ui/button";
import { Badge, Box, Flex, Heading, HStack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { motion, useAnimation } from "framer-motion";
import React from "react";
import Instagram from "../components/instagram";
import { useBehaviorSubject } from "../hooks/use-behavior-subject";
import { useService } from "../services/injector";
import { NamesService } from "../services/names.service";

function Index() {
	const namesService = useService<NamesService>(NamesService);

	const names = useBehaviorSubject(namesService.names$);
	const i = useBehaviorSubject(namesService.i$);

	const badges = [
		["red", "She's cute"],
		["purple", "And girly"],
	];

	const headingControls = useAnimation();
	const badgeControls = useAnimation();
	const buttonControls = useAnimation();

	const changeName = () => {
		(async () => {
			await headingControls.start({ y: -5 });
			namesService.incrementIndex();
			await headingControls.start({ y: 5 });
			await headingControls.start({ y: 0 });
		})();
		(async () => {
			await badgeControls.start(i => ({ y: 2 * i }));
			await badgeControls.start(i => ({ y: -2 * i }));
			await badgeControls.start({ y: 0 });
		})();
		(async () => {
			await buttonControls.start({ rotate: 5 });
			await buttonControls.start({ rotate: -5 });
			await buttonControls.start({ rotate: 0 });
		})();
	};

	return (
		<>
			<Box shadow="2xl" borderRadius="lg" p="8" minW="400" mt="8" mb="8">
				<Flex
					flexDir="column"
					alignItems="center"
					justifyContent="center"
				>
					<motion.div
						animate={headingControls}
						transition={{ duration: 0.05 }}
					>
						<Heading fontSize="6xl">
							Hi,{" "}
							<chakra.span fontWeight="extrabold">
								{names[i]}
							</chakra.span>
						</Heading>
					</motion.div>
					<HStack mt={4} mb={6}>
						{badges.map((badge, i) => (
							<motion.span
								key={i}
								custom={i % 2 == 0 ? -1 : 1}
								animate={badgeControls}
								transition={{ duration: 0.1 }}
							>
								<Badge colorScheme={badge[0]}>{badge[1]}</Badge>
							</motion.span>
						))}
					</HStack>
					<motion.div
						animate={buttonControls}
						transition={{ duration: 0.1 }}
					>
						<Button
							onClick={changeName}
							shadow="lg"
							colorScheme="pink"
						>
							Who else!?
						</Button>
					</motion.div>
				</Flex>
			</Box>
			<Box
				shadow="2xl"
				borderRadius="lg"
				p="8"
				pt="4"
				mt="8"
				mb="24"
				textAlign="center"
			>
				<a href="https://www.instagram.com/makixx_/">
					<Heading mb="4">Instagram</Heading>
				</a>
				<Instagram />
			</Box>
		</>
	);
}

export default Index;
