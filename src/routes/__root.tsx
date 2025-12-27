import { TanStackDevtools } from "@tanstack/react-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { QueryProvider } from "../components/query-provider";
import { ThemeProvider } from "../components/theme-provider";
import "@/i18n/translations";

export const Route = createRootRoute({
	component: () => (
		<ThemeProvider defaultTheme="system" storageKey="app-theme">
			<QueryProvider>
				<Outlet />
				<ReactQueryDevtools initialIsOpen={false} />
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
			</QueryProvider>
		</ThemeProvider>
	),
});
