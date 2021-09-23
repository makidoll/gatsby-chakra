import { BehaviorSubject } from "rxjs";

export class State {
	static names$ = new BehaviorSubject(["Maki", "Caitlyn"]);
}
