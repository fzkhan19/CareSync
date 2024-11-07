import RegisterForm from "@/components/forms/RegisterForm";
import { Navbar } from "@/components/layout/navbar";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

export default async function Register({
	params: { userId },
}: SearchParamProps) {
	const user = await getUser(userId);

	return (
		<article className="flex h-screen flex-1 gap-12">
			<div className="no-scrollbar flex max-h-screen w-full flex-col gap-2 overflow-y-scroll px-4 md:pr-16 md:pl-12">
				<Navbar className="static px-0 pt-8 pb-20" />
				<RegisterForm user={user} />
				<div className="flex justify-between">
					<p className="text-accent text-sm">
						© 2024 CareSync. All rights reserved.
					</p>
					<Link href={"/"} className="text-accent text-sm">
						Admin
					</Link>
				</div>
			</div>
			<div className="hidden w-[90%] md:flex">
				<Image
					src={"/assets/register-img.jpg"}
					alt="logo"
					width={1000}
					height={1000}
					className="h-screen rounded-s-xl object-cover"
				/>
			</div>
		</article>
	);
}
