import Image from "next/image";

function FinancialAssistancePage() {
	return (
		<div className="mt-2 p-4 mx-auto">
			<section className="container ml-4 space-y-4">
				<div className="flex justify-center items-center">
					<h1
						className="capitalize font-semibold text-4xl
				 text-center mb-10 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400
					bg-clip-text inline-flex text-transparent
				 "
					>
						List of Criteria
					</h1>
				</div>

				<Image
					src="/grenlecbanner.png"
					alt="Grenlec Banner"
					height={100}
					width={300}
					className="hidden object-cover h-48 w-full md:block"
				/>

				<h2 className="text-base md:text-lg font-extralight text-center md:text-justify">
					You are eligible to financial assistance if:
				</h2>
				<div className="text-base ml-10 space-y-4 font-semibold">
					<li>
						You live in an area where there are no poles or lines, near to an
						erected building, which needs electricity
					</li>
					<li>
						That building building is within 400ft of the last building
						connected to an electricity pole.
					</li>
					<li>Your customer contribution is less $5000</li>
				</div>
			</section>

			<div className="flex justify-center items-center">
				<Image
					src="/grenlecinstall.jpg"
					alt="Grenlec installation"
					width={200}
					height={200}
					className="h-40 w-60"
				/>
			</div>
		</div>
	);
}

export default FinancialAssistancePage;
