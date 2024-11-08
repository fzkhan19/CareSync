import clsx from "clsx";
import Image from "next/image";

type StatCardProps = {
	type: "appointments" | "pending" | "cancelled";
	count: number;
	label: string;
	icon: string;
};

export const StatCard = ({ count = 0, label, icon, type }: StatCardProps) => {
	return (
		<div
			className={clsx(
				"flex flex-1 flex-col gap-6 rounded-2xl bg-cover p-6 shadow-lg",
				{
					"bg-appointments": type === "appointments",
					"shadow-yellow-500/20": type === "appointments",
					"bg-pending": type === "pending",
					"shadow-blue-500/20": type === "pending",
					"bg-cancelled": type === "cancelled",
					"shadow-red-500/20": type === "cancelled",
				},
			)}
		>
			<div className="flex items-center gap-4">
				<Image
					src={icon}
					height={32}
					width={32}
					alt="appointments"
					className="mt-1.5 size-10 w-fit"
				/>
				<h2 className="font-bold text-4xl md:text-5xl">{count}</h2>
			</div>

			<p className="text-sm">{label}</p>
		</div>
	);
};
