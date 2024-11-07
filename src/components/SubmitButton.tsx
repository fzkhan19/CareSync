import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

interface ButtonProps {
	isLoading: boolean;
	className?: string;
	children: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
	return (
		<Button
			type="submit"
			disabled={isLoading}
			className={className ?? "w-full"}
		>
			{isLoading ? (
				<div className="flex items-center gap-4">
					<Loader2 width={24} height={24} className="animate-spin" />
					Loading...
				</div>
			) : (
				children
			)}
		</Button>
	);
};

export default SubmitButton;
