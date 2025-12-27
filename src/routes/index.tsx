import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: () => <Navigate to="/$lng" params={{ lng: "en" }} replace />,
});
