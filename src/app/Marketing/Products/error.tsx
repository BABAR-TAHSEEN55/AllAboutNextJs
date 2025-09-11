"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorBoundary = ({ error, reset }: { error: Error; reset: () => void }) => {
	const router = useRouter();
	const reload = () => {
		startTransition(() => {
			router.refresh();
			reset();
		});
	};
	return (
		<div style={{ backgroundColor: "blue" }}>
			<p>
				{error.name},{error.stack}
			</p>
			<button onClick={reload}>Retry</button>
		</div>
	);
};

export default ErrorBoundary;

//NOTE : You can place Error.tsx and individual level as well as Global level
// 1) IF you place it at individual only that part will have error and if you place it global that entire path will show error
