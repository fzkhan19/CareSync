"use client";
import { Separator } from "@/components/ui/separator";
import { BLUR_FADE_DELAY, DATA } from "@/constants/resume";
import { cn } from "@/lib/utils";
import { BadgeCheck, ChevronDown } from "lucide-react";
import { useState } from "react";
import BlurFade from "../ui/blur-fade";
import { Button } from "../ui/button";

export default function LifeChangelog() {
	const [showAll, setShowAll] = useState(false);

	const handleToggle = () => {
		setShowAll(!showAll);
	};

	return (
		<section id="changelog">
			<div className="w-full space-y-12 py-6">
				<BlurFade delay={BLUR_FADE_DELAY * 8}>
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-foreground px-3 py-1 text-background text-sm">
								Life Changelog & Updates
							</div>
							<h2 className="font-bold text-3xl tracking-tighter md:text-5xl">
								My Adventure Log 🚀
							</h2>
							<p className="text-muted-foreground md:text-lg">
								Hey there! Welcome to my adventure log. This is where I spill
								the tea on all the exciting stuff I’ve been up to—whether it’s
								hitting new milestones, tackling cool projects, or just figuring
								things out one step at a time. Stick around, it’s gonna be a fun
								ride!
							</p>
						</div>
					</div>
				</BlurFade>
				<div className="mx-auto max-w-[800px] space-y-12">
					{DATA.lifeChangelog.slice(0, 2).map((yearEntry, yearIndex) => (
						<div className="mb-8" key={yearEntry.year}>
							<BlurFade delay={BLUR_FADE_DELAY * 9 + yearIndex * 0.05}>
								<h3 className="font-semibold text-2xl">{yearEntry.year}</h3>
								{yearEntry.events.map((event, eventIndex) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<div key={eventIndex} className="mt-4 space-y-1.5">
										<div className="flex items-center">
											<BadgeCheck
												className="mr-2 font-bold text-white"
												fill="#3e81f4"
												strokeWidth={1.3}
												size={22}
											/>
											<span className="font-semibold">{event.heading}</span>
										</div>
										<p className="ml-[30px] whitespace-pre-wrap text-sm opacity-70">
											{event.description}
										</p>
									</div>
								))}
								{yearIndex <
									DATA.lifeChangelog.slice(
										0,
										showAll ? DATA.lifeChangelog.length : 2,
									).length -
										1 && <Separator className="mt-12" />}
							</BlurFade>
						</div>
					))}

					{showAll &&
						DATA.lifeChangelog
							.slice(2, DATA.lifeChangelog.length)
							.map((yearEntry, yearIndex) => (
								<div className="mb-8" key={yearEntry.year}>
									<h3 className="font-semibold text-2xl">{yearEntry.year}</h3>
									{yearEntry.events.map((event, eventIndex) => (
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										<div key={eventIndex} className="mt-4 space-y-1.5">
											<div className="flex items-center">
												<BadgeCheck
													className="mr-2 font-bold text-white"
													fill="#3e81f4"
													strokeWidth={1.3}
													size={22}
												/>
												<span className="font-semibold">{event.heading}</span>
											</div>
											<p className="ml-[30px] whitespace-pre-wrap text-sm">
												{event.description}
											</p>
										</div>
									))}
									{yearIndex <
										DATA.lifeChangelog.slice(
											0,
											showAll ? DATA.lifeChangelog.length : 3,
										).length -
											1 && <Separator className="mt-12" />}
								</div>
							))}

					<div className="col-span-full mt-2 flex justify-center">
						<BlurFade delay={BLUR_FADE_DELAY * 10}>
							<Button
								onClick={handleToggle}
								variant={"ghost"}
								className="flex items-center gap-1 font-medium text-sm hover:bg-transparent"
							>
								{showAll ? "See Less" : "See More"}
								<ChevronDown
									size={20}
									className={cn(
										"mt-0.5 transition-transform duration-200",
										showAll && "rotate-180",
									)}
								/>
							</Button>
						</BlurFade>
					</div>
				</div>
			</div>
		</section>
	);
}
