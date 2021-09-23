import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

export const useBehaviorSubject = <T,>(behaviorSubject: BehaviorSubject<T>) => {
	const [state, setState] = useState<T>(behaviorSubject.value);

	useEffect(() => {
		const sub = behaviorSubject.subscribe(setState);
		return () => sub.unsubscribe();
	}, [behaviorSubject]);

	return state;
};
