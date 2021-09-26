import { makeInjector, Token } from "@mindspace-io/react";
import { useState } from "react";
import { NamesService } from "./names.service";

export const injector = makeInjector([
	{ provide: NamesService, useClass: NamesService, deps: [] },
]);

export function useService<T>(service: Token) {
	return useState<T>(injector.get(service))[0];
}
