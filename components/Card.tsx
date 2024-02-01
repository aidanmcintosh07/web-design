"use client";

interface CardProps {
	xmlns: string;
	title: string;
	description: string;
}

function Card({ xmlns, title, description }: CardProps) {
	return (
		<div className="flex flex-col items-center rounded-lg shadow-md p-8">
			<svg
				className="h-10 w-10 mb-4 text-green-500"
				xmlns={xmlns}
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fillRule="evenodd"
					d="M3 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zm3-2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6zm0-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2"
					clip-rule="nonzeroxpath"
				/>
			</svg>
			<h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
			<p className="text-gray-600 leading-relaxed">{description}</p>
		</div>
	);
}

export default Card;
