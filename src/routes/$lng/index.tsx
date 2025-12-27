import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$lng/")({
	component: HomePage,
});

function HomePage() {
	// const { t } = useTranslation();

	return (
		<div>
			<h1>HOLA</h1>
		</div>
	);
}
