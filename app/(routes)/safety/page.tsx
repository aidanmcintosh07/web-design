import Image from "next/image";

function SafetyPage() {
	return (
		<div className="mx-auto space-y-2 p-4">
			<div className="flex items-center justify-center mt-2">
				<h1
					className="capitalize font-semibold text-xl md:text-4xl
				 text-center mb-10 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400
					bg-clip-text inline-flex text-transparent
				 "
				>
					Comprehensive Electrical Safety Tips
				</h1>
			</div>

			<p className="text-sm text-gray-400 font-light text-center">By GRENLEC</p>
			<div className="w-full bg-gray-300 flex justify-center items-center mt-2">
				<Image
					src="/homesafety.jpg"
					alt="Home Safety Picture"
					height={300}
					width={300}
					className="object-fill rounded-sm shadow-sm"
				/>
			</div>
			<section>
				<div className="flex items-center justify-center mt-2">
					<h1
						className="capitalize font-semibold text-xl md:text-4xl
				 text-center mb-10 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400
					bg-clip-text inline-flex text-transparent
				 "
					>
						Home Safety Tips
					</h1>
				</div>
				<div className="container sapce-y-2">
					<li>
						1. Regular Inspections: Schedule periodic inspections of your
						home&apos;s electrical system by a qualified professional. Identify
						and address any potential hazards or outdated wiring to ensure the
						safety of your family.
					</li>
					<li>
						2. Install Ground Fault Circuit Interrupters (GFCIs): Use GFCIs in
						areas where water and electricity may come into contact, such as
						kitchens, bathrooms, and outdoor outlets. GFCIs help prevent
						electric shocks and are crucial for home safety.
					</li>
					<li>
						3. Smart Electrical Practices: Unplug electrical appliances and
						devices when not in use, and teach family members to do the same.
						This not only saves energy but also reduces the risk of electrical
						fires.
					</li>
					<li>
						4. Proper Appliance Use: Follow manufacturer guidelines for the use
						of appliances and electronics. Avoid overloading outlets and use
						appropriate extension cords for temporary setups.
					</li>
					<li>
						5. Child Safety: Childproof your home by using outlet covers and
						securing electrical cords out of reach. Teach children about the
						dangers of playing with electrical outlets and devices.
					</li>
				</div>
			</section>

			<section>
				<div className="flex items-center justify-center mt-2">
					<h1
						className="capitalize font-semibold text-xl md:text-4xl
				 text-center mb-10 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400
					bg-clip-text inline-flex text-transparent
				 "
					>
						School Safety Tips
					</h1>
				</div>
				<div className="container space-y-2">
					<li>
						1. Regular Maintenance: Conduct routine inspections of school
						buildings to identify and address any electrical issues. Timely
						maintenance helps prevent disruptions and ensures a safe learning
						environment.
					</li>
					<li>
						2. Electrical Safety Education: Integrate electrical safety
						education into the school curriculum. Teach students about the
						dangers of electrical hazards and the importance of responsible
						electrical use.
					</li>
					<li>
						3. Emergency Drills: Practice emergency drills that include
						procedures for electrical incidents. Ensure that students and staff
						know how to respond calmly and efficiently in case of power outages
						or electrical emergencies.
					</li>
					<li>
						4. Safe Use of Electronics: Implement guidelines for the responsible
						use of electronic devices in classrooms. Educate students about the
						importance of following safety protocols and reporting any damaged
						equipment.
					</li>
				</div>
			</section>

			<section>
				<div className="flex items-center justify-center mt-2">
					<h1
						className="capitalize font-semibold text-xl md:text-4xl
				 text-center mb-10 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400
					bg-clip-text inline-flex text-transparent
				 "
					>
						Workplace Safety Tips
					</h1>
				</div>
				<div className="container space-y-2">
					<li>
						1. Employee Training Programs: Develop comprehensive training
						programs for employees to raise awareness about electrical safety.
						Ensure that workers are knowledgeable about potential hazards and
						follow proper safety protocols.
					</li>
					<li>
						2. Regular Equipment Inspections: Implement a proactive approach to
						equipment maintenance. Regularly inspect and maintain electrical
						machinery, tools, and systems to prevent accidents and ensure
						optimal functionality.
					</li>
					<li>
						3. Emergency Response Plans: Establish clear emergency response
						plans for electrical incidents. Conduct regular drills to ensure
						that employees are well-prepared to respond to power outages,
						electrical fires, or other emergencies.
					</li>
					<li>
						4. Personal Protective Equipment (PPE): Provide employees with
						appropriate PPE, including insulated gloves and safety goggles, for
						tasks involving electrical work. Emphasize the importance of using
						protective gear to minimize risks.
					</li>
					<li>
						5. Labeling and Signage: Clearly label electrical panels, circuits,
						and emergency shut-off switches. Use signage to indicate potential
						electrical hazards and provide instructions for safe practices in
						the workplace.
					</li>
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

export default SafetyPage;
