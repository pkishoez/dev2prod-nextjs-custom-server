import { useState } from "react";

export default function Index() {
	const [state, setState] = useState(0);
	return (
		<div className="bg-gray-200 p-8">
			<h1 onClick={(e) => setState(state + 1)}>Kishore!!{state}</h1>
			<h2 onClick={(e) => setState(state + 2)}>Kishore!!{state}</h2>
			<h3 onClick={(e) => setState(state + 2)}>Kishore!!{state}</h3>
			<h4 onClick={(e) => setState(state + 2)}>Kishore!!{state}</h4>
		</div>
	);
}
