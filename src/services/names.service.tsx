import { BehaviorSubject } from "rxjs";

export class NamesService {
	i$ = new BehaviorSubject(0);
	names$ = new BehaviorSubject(["maki", "caitlyn"]);

	incrementIndex() {
		let newI = this.i$.value + 1;
		if (newI >= this.names$.value.length) newI = 0;
		this.i$.next(newI);
	}

	addUniqueName(newName: string) {
		newName = newName.toLowerCase();
		if (this.names$.value.includes(newName)) return;
		this.names$.next([...this.names$.value, newName]);
	}
}
