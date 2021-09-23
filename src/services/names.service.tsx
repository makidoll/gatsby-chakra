import { BehaviorSubject } from "rxjs";

export class NamesService {
	private static instance: NamesService;
	static getInstance(): NamesService {
		if (!NamesService.instance) NamesService.instance = new NamesService();
		return NamesService.instance;
	}

	// TODO: look at inversifyjs

	names$ = new BehaviorSubject(["Maki", "Caitlyn"]);
}
