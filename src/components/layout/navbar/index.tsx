"use client";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

import { Label } from "@/components/ui/label";
import Image from "next/image"; // Ensure using next/image for optimization
import { ToggleTheme as ToggleThemeComponent } from "../toggle-theme";

const ToggleTheme = React.memo(ToggleThemeComponent);

export const Navbar = ({
	className,
	isAdmin,
}: { className?: string; isAdmin?: boolean }) => {
	return (
		<header
			className={cn(
				"fixed top-0 right-0 left-0 z-40 flex w-full items-center justify-between",
				"px-24 py-12",
				"transition-all duration-500 ease-in-out",
				"bg-transparent",
				className,
			)}
		>
			<Link
				className="flex items-center gap-3 px-2 font-bold text-xl tracking-wide"
				href="/"
			>
				{/* Use next/image for optimized image loading */}
				<Image
					src={"/assets/icons/logo.svg"}
					alt="logo"
					width={28}
					height={28}
					priority // Add priority for important images to load faster
				/>
				<h1>CareSync</h1>
			</Link>

			<div className="flex items-center gap-4">
				{isAdmin && <Label> Admin Dashboard</Label>}
				<ToggleTheme />
			</div>
		</header>
	);
};
