import { makeInjector, Token } from "@mindspace-io/react";
import { useState } from "react";
import { DiscordService } from "./discord.service";
import { NamesService } from "./names.service";

export const injector = makeInjector([
	{ provide: NamesService, useClass: NamesService, deps: [] },
	{ provide: DiscordService, useClass: DiscordService, deps: [] },
]);

export function useService<T>(service: Token) {
	return useState<T>(injector.get(service))[0];
}
