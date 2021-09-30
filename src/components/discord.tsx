import {
	Avatar,
	Text,
	HStack,
	VStack,
	AvatarBadge,
	Link,
} from "@chakra-ui/react";
import React from "react";
import { DiscordService } from "../services/discord.service";
import { useService } from "../services/injector";
import { useBehaviorSubject } from "../hooks/use-behavior-subject";

export function Discord({ light = false, flipped = false, small = false }) {
	// const discordData = useLanyard("72139729285427200");

	const discordService = useService<DiscordService>(DiscordService);
	const discordData = useBehaviorSubject(discordService.data$);

	const textColor = light ? "white" : "black";

	const AvatarElem = () => (
		<Avatar
			src={
				"https://cdn.discordapp.com/avatars/" +
				discordService.discordId +
				"/" +
				discordData.discord_user.avatar +
				".webp?size=128"
			}
			size={small ? "sm" : "md"}
		>
			<AvatarBadge
				boxSize="1em"
				bg={
					discordData.discord_status == "online"
						? "green.500"
						: "gray.500"
				}
			/>
		</Avatar>
	);

	const TextElem = () => (
		<VStack
			alignItems={flipped ? "flex-end" : "flex-start"}
			spacing="-2"
			pr={small ? 0 : flipped ? 1 : 0}
			pl={small ? 0 : flipped ? 0 : 1}
		>
			<Text
				fontWeight={"bold"}
				color={textColor}
				opacity={light ? 1 : 0.8}
				fontSize={small ? 16 : 24}
			>
				{discordData.discord_user.username}
			</Text>
			<Text
				fontWeight={"bold"}
				color={textColor}
				opacity={light ? 0.6 : 0.4}
				fontSize={small ? 10 : 16}
			>
				{"#" + discordData.discord_user.discriminator}
			</Text>
		</VStack>
	);

	return discordData == null ? (
		<></>
	) : (
		<a href={"https://discord.com/users/" + discordService.discordId}>
			{flipped ? (
				<HStack>
					<TextElem />
					<AvatarElem />
				</HStack>
			) : (
				<HStack>
					<AvatarElem />
					<TextElem />
				</HStack>
			)}
		</a>
	);
}
