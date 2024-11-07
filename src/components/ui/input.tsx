// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input
"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import * as React from "react";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	fileValue?: File | File[]; // File value for type="file"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		const radius = 100; // change this to increase the radius of the hover effect
		const [visible, setVisible] = React.useState(false);

		const mouseX = useMotionValue(0);
		const mouseY = useMotionValue(0);

		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		function handleMouseMove({ currentTarget, clientX, clientY }: any) {
			const { left, top } = currentTarget.getBoundingClientRect();

			mouseX.set(clientX - left);
			mouseY.set(clientY - top);
		}
		return (
			<motion.div
				style={{
					background: useMotionTemplate`
        radial-gradient(
          ${visible ? `${radius}px` : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--green-400),
          transparent 80%
        )
      `,
				}}
				onMouseMove={handleMouseMove}
				onMouseEnter={() => setVisible(true)}
				onMouseLeave={() => setVisible(false)}
				className="group/input w-full rounded-lg p-[2px] transition duration-300"
			>
				<input
					type={type}
					className={cn(
						"flex h-10 w-full rounded-md border-none px-3 py-2 text-sm",
						"shadow-input transition duration-400",
						"file:border-0 file:bg-transparent file:font-medium file:text-sm",
						"placeholder:text-muted",
						"focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-primary",
						"disabled:cursor-not-allowed disabled:opacity-50",
						"group-hover/input:shadow-none",
						"dark:bg-neutral-900",
						"dark:placeholder:text-muted",
						"dark:shadow-none",
						"dark:focus-visible:ring-primary",
						className,
					)}
					ref={ref}
					{...props}
				/>
			</motion.div>
		);
	},
);
Input.displayName = "Input";

export { Input };
