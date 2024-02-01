import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

function GuidelinesPage() {
	return (
		<main className="mt-10">
			<div className="flex justify-center items-center">
				<h1
					className="capitalize font-semibold text-4xl
				 text-center bg-gradient-to-r from-green-400 via-yellow-400 to-green-400
					bg-clip-text inline-flex text-transparent"
				>
					Guidelines for temporary connections
				</h1>
			</div>

			<section className="container space-y-4 p-8">
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">
						Application Process
					</h2>
					<Image
						src="https://www.thebalancemoney.com/thmb/V3ivSUnAeM0hHyGAsn6z5V3MlPM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1186821733-8293b36141c947c68f635ae24eecfaa3.jpg"
						width={200}
						height={200}
						className="h-[20rem] w-full"
						alt="Plan Image"
					/>
					<h3 className="text-base font-black">
						Submit an application for a temporary electrical connection to
						GRENLEC. This may involve filling out a form with details about the
						temporary usage, location, and duration.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">Site Inspection</h2>
					<div className="flex justify-center items-center">
						<Image
							src="https://www.lifewire.com/thmb/wW15ObWefhKptJIRRPvHWNVj0gs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-692915429-5a8f1a1e3418c60037aae970.jpg"
							width={200}
							height={200}
							className="h-[20rem] w-[80%]"
							alt="Plan Image"
						/>
					</div>

					<h3 className="text-base font-black">
						GRENLEC may conduct a site inspection to assess the feasibility and
						safety of providing a temporary connection. This helps determine the
						required infrastructure and potential challenges.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">Fee Structure</h2>
					<Image
						src="https://education.medicaldialogues.in/h-upload/2020/03/05/125200-fee-structure.jpg"
						width={200}
						height={200}
						className="h-[20rem] w-full"
						alt="Plan Image"
					/>
					<h3 className="text-base font-black">
						Inquire about the fees associated with temporary connections.
						Utility companies often charge specific fees for temporary services,
						including installation and removal costs.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">
						Safety Requirements
					</h2>
					<div className="flex justify-center items-center">
						<Image
							src="/safety.jpg"
							width={200}
							height={200}
							className="h-[20rem] w-full"
							alt="Plan Image"
						/>
					</div>
					<h3 className="text-base font-black">
						Adhere to safety guidelines and requirements set by GRENLEC. This
						may include using approved electrical equipment, following
						installation standards, and implementing safety measures during the
						temporary usage.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">Duration Limits</h2>
					<div className="flex justify-center items-center">
						<Image
							src="/duration.png"
							width={200}
							height={200}
							className="h-[20rem] md:w-[40%] w-full"
							alt="Plan Image"
						/>
					</div>

					<h3 className="text-base font-black">
						Temporary connections are typically granted for a specific duration.
						Be aware of the time limits associated with the temporary
						connection, and ensure compliance with the agreed-upon timeframe.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">Documentation</h2>
					<Image
						src="/documentation.png"
						width={200}
						height={200}
						className="h-[20rem] w-full"
						alt="Documentation"
					/>
					<h3 className="text-base font-black">
						Provide any necessary documentation requested by GRENLEC, such as
						proof of ownership or authorization to request a temporary
						connection.
					</h3>
				</div>
				<Separator />
				<div className="flex justify-center items-center">
					<h1
						className="capitalize font-semibold text-4xl
				 text-center bg-gradient-to-r from-green-400 via-yellow-400 to-green-400
					bg-clip-text inline-flex text-transparent"
					>
						Guidelines for permanent connections
					</h1>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">
						Application Process
					</h2>
					<Image
						src="https://www.thebalancemoney.com/thmb/V3ivSUnAeM0hHyGAsn6z5V3MlPM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1186821733-8293b36141c947c68f635ae24eecfaa3.jpg"
						width={200}
						height={200}
						className="h-[20rem] w-full"
						alt="Plan Image"
					/>
					<h3 className="text-base font-black">
						Submit a formal application for a permanent electrical connection.
						This process usually involves providing detailed information about
						the property, load requirements, and intended usage.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">Load Assessment</h2>
					<Image
						src="/load.jpg"
						width={200}
						height={200}
						className="h-[25rem] w-full"
						alt="Plan Image"
					/>
					<h3 className="text-base font-black">
						GRENLEC may assess the electrical load requirements for the property
						to determine the appropriate infrastructure and capacity needed for
						the permanent connection.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">Design Approval</h2>
					<Image
						src="/design.jpg"
						width={200}
						height={200}
						className="h-[20rem] w-full"
						alt="Plan Image"
					/>
					<h3 className="text-base font-black">
						Obtain design approval from GRENLEC for the electrical installation.
						This may involve working with a qualified electrician to create a
						design that complies with safety and regulatory standards.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">
						Payment of Connection Fees
					</h2>
					<Image
						src="/connection.jpg"
						width={200}
						height={200}
						className="h-[20rem] w-full"
						alt="Plan Image"
					/>
					<h3 className="text-base font-black">
						Pay the required connection fees associated with the permanent
						connection. This includes charges for infrastructure installation,
						metering, and any other applicable costs.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">
						Inspection and Approval
					</h2>
					<Image
						src="/inspection.jpg"
						width={200}
						height={200}
						className="h-[20rem] w-full"
						alt="Plan Image"
					/>
					<h3 className="text-base font-black">
						Ongoing maintenance is essential to ensure the continued reliability
						of the electrical infrastructure. This includes periodic
						inspections, repairs, and upgrades as needed.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">
						Meter Installation
					</h2>
					<Image
						src="/meter.jpg"
						width={200}
						height={200}
						className="h-[20rem] w-full"
						alt="Plan Image"
					/>
					<h3 className="text-base font-black">
						Once approved, GRENLEC will install a meter on the property to
						measure electricity consumption accurately.
					</h3>
				</div>
				<Separator />
				<div className="space-y-4">
					<h2 className="text-center text-2xl md:text-3xl">
						Service Activation
					</h2>
					<Image
						src="/service.jpg"
						width={200}
						height={200}
						className="h-[20rem] w-full"
						alt="Plan Image"
					/>
					<h3 className="text-base font-black">
						The property is officially connected to the electrical grid, and
						electricity service is activated.
					</h3>
				</div>
			</section>
		</main>
	);
}

export default GuidelinesPage;
