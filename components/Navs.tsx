import { cn } from "@/lib/utils";
import Link from "next/link";

async function Navs({ className }: React.HTMLAttributes<HTMLElement>) {
	const routes = [
		{
			href: "/",
			label: "Home",
		},
		{
			href: "/financial-assistance",
			label: "Financial Assistance",
		},
		{
			href: "/guidelines",
			label: "Connection Guidelines",
		},
		{
			href: "/safety",
			label: "Safety Tips",
		},
	];

	return (
		<nav className={cn("flex items-center gap-4 lg:gap-8", className)}>
			{routes.map((route) => (
				<Link
					key={route.href}
					href={String(route.href)}
					className={cn(
						"font-medium text-base text-black hover:opacity-50",
						className
					)}
				>
					{route.label}
				</Link>
			))}
		</nav>
	);
}

export default Navs;
