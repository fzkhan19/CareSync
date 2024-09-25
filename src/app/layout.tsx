import Providers from "@/components/layout/Providers";
import { Navbar } from "@/components/layout/navbar";
import { JSON_LD, METADATA } from "@/constants/Metadata";
import { siteMetadata } from "@/lib/siteMetaData";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const font = Plus_Jakarta_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	variable: "--font-sans",
});

export const metadata: Metadata = METADATA;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn("font-sans antialiased", font.variable, font.className)}
			>
				<main className="no-scrollbar overflow-x-hidden overflow-y-scroll scroll-smooth">
					<Script
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
						type="application/ld+json"
					/>
					<h1 className="sr-only">{siteMetadata.description}</h1>
					<h1 className="sr-only">{siteMetadata.keywords.join(" | ")}</h1>
					<h2 className="sr-only">{siteMetadata.title}</h2>
					<h2 className="sr-only">{siteMetadata.description}</h2>
					<Providers>
						{/* <Navbar /> */}
						<main className="flex min-h-[100dvh] flex-1 flex-col">
							{children}
						</main>
					</Providers>
				</main>
			</body>
		</html>
	);
}
