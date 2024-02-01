/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-black/90 text-gray-300 py-4 px-4 sm:py-8 sm:px-8">
			<div className="container mx-auto flex flex-wrap justify-center sm:justify-between">
				<div className="w-full md:w-1/3 text-center md:text-left">
					<h1 className="uppercase mb-2 font-bold">Address</h1>
					<p className="mb-2">Dusty Highway</p>
					<p className="mb-2">St. George, Grenada</p>
				</div>
				<div className="w-full md:w-1/3 text-center">
					<h2 className="uppercase mb-2 font-bold">Email</h2>
					<p className="mb-2">customersupport@grenlec.com</p>
				</div>
				<div className="w-full md:w-1/3 text-center md:text-right ">
					<h3 className="uppercase mb-2 font-bold">Phone</h3>
					<p className="mb-2">237 or (473) 440-2097</p>
				</div>
			</div>
			<div className="container mx-auto flex justify-center space-x-2">
				<span className="uppercase mb-2 font-bold">Follow Us</span>
				<Link href={"https://www.facebook.com/grenlec"}>
					{" "}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-brand-facebook transition duration-500"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
					</svg>
				</Link>
				<Link href={"https://www.instagram.com/grenlec_/"}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-brand-instagram transition duration-500"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
						<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
						<path d="M16.5 7.5l0 .01"></path>
					</svg>
				</Link>
			</div>
			<div className="flex justify-center items-center">
				<Link className="underline" href="https://grenlec.com/">
					Official GRENLEC Site
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
