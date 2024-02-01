import Card from "@/components/Card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

function Home() {
	return (
		<>
			<main className="container mt-8 md:mt-28 mx-auto px-4 md:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="text-center md:text-left">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">
							Powering Remote Grenadian Communities
						</h2>
						<Separator />
						<p className="text-gray-600 leading-relaxed mt-4">
							Bring reliable electricity to your off-grid building with
							GRENLEC&apos;s Off-Grid Connections program. Discover financial
							assistance options from the Government of Grenada, learn about
							safety measures, and connect with GRENLEC to get started.
						</p>
						<h3 className="font-semibold text-2xl p-6">
							In partner with{" "}
							<span className="underline capitalize">
								The Ministry of Infrastructure
							</span>
						</h3>
						<div className="flex items-center justify-center">
							<Image
								src="/Ministry.png"
								priority
								width={200}
								height={200}
								alt="Ministry of Infrastructure Logo"
								className="flex items-center rounded-sm w-[70%] object-contain shadow-lg"
							/>
						</div>
					</div>
					<Image
						src="/house.png"
						width={500}
						height={500}
						alt="Off-grid house with solar panels"
						className="h-full object-cover md:rounded-lg shadow-lg"
					/>
				</div>
			</main>

			<section className="my-20 px-4 md:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<Card
						xmlns="http://www.w3.org/2000/svg"
						title="Government Assistance"
						description="Explore grant and loan programs offered by the Government of Grenada to
				help finance your off-grid connection."
					/>
					<Card
						xmlns="http://www.w3.org/2000/svg"
						title="Your Safety"
						description="Discover how to safely connect your off-grid building to
							GRENLEC's grid."
					/>
					<Card
						xmlns="http://www.w3.org/2000/svg"
						title="Connect with GRENLEC"
						description="Connect with GRENLEC to get started on your off-grid connection."
					/>
				</div>
			</section>

			<section className="container space-y-4">
				<h1 className="text-center font-semibold text-3xl md:text-4xl">
					Overview
				</h1>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">
						Planning and Design
					</h2>
					<div className="flex justify-center items-center">
						<Image src="/plan.jpg" width={500} height={200} alt="Plan Image" />
					</div>

					<h3 className="text-base font-black">
						Before installing new electricity poles and lines, a detailed
						planning and design phase takes place. This involves assessing the
						need for additional infrastructure, considering population growth,
						urban development, and other factors.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">
						Regulatory Approvals
					</h2>
					<div className="flex justify-center items-start">
						<Image
							src="/approval.jpg"
							width={400}
							height={800}
							alt="Plan Image"
						/>
					</div>

					<h3 className="text-base font-black">
						Electrical utilities must adhere to regulatory requirements.
						GRENLEC, like other similar companies, obtains necessary permits and
						approvals from regulatory bodies to ensure compliance with safety
						and environmental standards.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">Site Survey</h2>
					<div className="flex justify-center items-center">
						<Image
							src="/survey.png"
							width={500}
							height={500}
							alt="Plan Image"
						/>
					</div>

					<h3 className="text-base font-black">
						Conducting a site survey is crucial to determine the optimal
						locations for new poles and lines. This includes considering factors
						such as terrain, accessibility, and existing infrastructure.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">
						Material Procurement
					</h2>
					<div className="flex justify-center items-center">
						<Image
							src="/procurement.jpg"
							width={200}
							height={200}
							className="h-[20rem] md:w-[50%] w-full"
							alt="Plan Image"
						/>
					</div>
					<h3 className="text-base font-black">
						The company procures the necessary materials, including electricity
						poles, conductors, insulators, transformers, and other components
						required for the installation.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">
						Pole Installation
					</h2>
					<div className="flex justify-center items-center">
						<Image src="/pole.jpg" width={500} height={500} alt="Plan Image" />
					</div>

					<h3 className="text-base font-black">
						Once the materials are ready, the installation of electricity poles
						begins. This involves digging holes for the poles, placing them
						securely, and ensuring they meet safety standards and load-bearing
						requirements.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">
						Line Installation
					</h2>
					<div className="flex items-center justify-center">
						<Image src="/line.jpg" width={500} height={200} alt="Plan Image" />
					</div>

					<h3 className="text-base font-black">
						After the poles are in place, the electrical lines are installed.
						This includes attaching conductors, insulators, and other components
						to create the network that will carry electricity.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">
						Transformer Installation
					</h2>
					<div className="flex justify-center items-center">
						<Image
							src="/transformer.jpg"
							width={500}
							height={500}
							alt="Plan Image"
						/>
					</div>

					<h3 className="text-base font-black">
						Transformers may be installed at various points to regulate voltage
						and ensure the efficient distribution of electricity.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">
						Testing and Quality Assurance
					</h2>
					<Image
						src="/assurance.png"
						width={200}
						height={200}
						className="h-[16rem] w-full"
						alt="Plan Image"
					/>
					<h3 className="text-base font-black">
						After the installation is complete, thorough testing is conducted to
						ensure the reliability and safety of the newly installed
						infrastructure. This includes checks for voltage stability,
						insulation integrity, and other performance parameters.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">
						Connection to the Grid
					</h2>
					<Image
						src="/grid.svg"
						width={200}
						height={200}
						className="h-[16rem] w-full"
						alt="Plan Image"
					/>
					<h3 className="text-base font-black">
						Once the installation passes all necessary tests and inspections, it
						is connected to the overall electrical grid, allowing the new
						infrastructure to contribute to the distribution of electricity.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">
						Maintenance and Upkeep
					</h2>
					<div className="flex justify-center items-center">
						<Image
							src="/upkeep.jpg"
							width={700}
							height={200}
							alt="Plan Image"
						/>
					</div>

					<h3 className="text-base font-black">
						Ongoing maintenance is essential to ensure the continued reliability
						of the electrical infrastructure. This includes periodic
						inspections, repairs, and upgrades as needed.
					</h3>
				</div>

				<h1 className="text-center capitalize font-semibold text-xl">
					Video on electricity connections
				</h1>
				<div className="flex justify-center items-center">
					<iframe
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						frameBorder="0"
						allow-same-origin
						width="560"
						height="315"
						allowFullScreen
						src="https://www.youtube.com/watch?v=W0_1xRqT8uU?html5=1"
					></iframe>
				</div>
			</section>
		</>
	);
}

export default Home;
