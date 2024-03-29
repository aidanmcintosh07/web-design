import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "GRENLEC Financial Assistance Program",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<div className="flex flex-col h-screen">
					<main className="flex-grow">{children}</main>
					<div className="mt-20">
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
}
