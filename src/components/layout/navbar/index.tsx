"use client";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

import Image from "next/image";
import { ToggleTheme as ToggleThemeComponent } from "../toggle-theme";

const ToggleTheme = React.memo(ToggleThemeComponent);

export const Navbar = ({ className }: { className?: string }) => {
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
				<Image
					src={"/assets/icons/logo.svg"}
					alt="logo"
					width={28}
					height={28}
				/>
				<h1>CareSync</h1>
			</Link>

			<ToggleTheme />
		</header>
	);
};
