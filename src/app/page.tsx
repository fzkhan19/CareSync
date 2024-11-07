import PassKeyModal from "@/components/PassKeyModal";
import PatientForm from "@/components/forms/PatientForm";
import { Navbar } from "@/components/layout/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home({ searchParams }: SearchParamProps) {
	const isAdmin = searchParams?.admin === "true";

	return (
		<article className="flex h-full flex-1 gap-12">
			{isAdmin && <PassKeyModal />}
			<div className="flex w-1/2 flex-col gap-2 pr-24 pl-12">
				<Navbar className="static px-0 pt-8 pb-20" />
				<PatientForm />
				<div className="flex justify-between">
					<p className="text-accent text-sm">
						© 2024 CareSync. All rights reserved.
					</p>
					<Link href={"/?admin=true"} className="text-primary/80 text-sm">
						Admin
					</Link>
				</div>
			</div>{" "}
			<div className="flex w-1/2">
				<Image
					src={"/assets/login-hero.jpg"}
					alt="logo"
					width={1000}
					height={1000}
					className="rounded-s-3xl object-cover"
				/>
			</div>
		</article>
	);
}
