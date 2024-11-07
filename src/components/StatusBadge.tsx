import { StatusIcon } from "@/constants";
import clsx from "clsx";

export const StatusBadge = ({ status }: { status: Status }) => {
	const Icon = StatusIcon[status];
	return (
		<div
			className={clsx("flex w-fit rounded-full px-4 py-2", {
				"bg-green-600": status === "scheduled",
				"bg-blue-600": status === "pending",
				"bg-red-600": status === "cancelled",
			})}
		>
			<p
				className={clsx(
					"flex items-center gap-2 font-semibold text-xs capitalize",
					{
						"text-green-200": status === "scheduled",
						"text-blue-200": status === "pending",
						"text-red-200": status === "cancelled",
					},
				)}
			>
				<Icon className="mt-0.5 h-fit w-3" />
				{status}
			</p>
		</div>
	);
};
