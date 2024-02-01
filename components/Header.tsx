import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import Navs from "./Navs";

function Header() {
	return (
		<header className="m-auto w-full">
			<div className="flex justify-between items-center p-4">
				<Link href="/">
					<div className="flex items-center gap-2 cursor-pointer">
						<Image
							className="rounded-sm hover:scale-125 transition duration-500 ease-in-out cursor-pointer"
							src="/grenlec.jpg"
							alt="API Logo"
							width={60}
							height={60}
							priority
						/>
						<span className="font-medium hidden lg:text-lg lg:inline-flex text-black hover:opacity-90">
							GRENLEC Financial Assistance Program
						</span>
					</div>
				</Link>

				<div className="flex items-center gap-8">
					<Navs className="text-sm md:text-base" />
				</div>
			</div>
			<Separator />
		</header>
	);
}

export default Header;
