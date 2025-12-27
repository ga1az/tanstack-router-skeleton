import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/$lng")({
	component: LanguageLayout,
});

function LanguageLayout() {
	const { lng } = Route.useParams();
	const { i18n } = useTranslation();

	useEffect(() => {
		if (lng && lng !== i18n.language) {
			i18n.changeLanguage(lng);
		}
	}, [lng, i18n]);

	return <Outlet />;
}
