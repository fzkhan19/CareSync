import Image from "next/image";
import Link from "next/link";

import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import { Calendar } from "lucide-react";

const RequestSuccess = async ({
	searchParams,
	params: { userId },
}: SearchParamProps) => {
	const appointmentId = (searchParams?.appointmentId as string) || "";
	const appointment = await getAppointment(appointmentId);

	const doctor = Doctors.find(
		(doctor) => doctor.name === appointment.primaryPhysician,
	);

	return (
		<div className=" flex h-screen max-h-screen px-[5%]">
			<Navbar />
			<div className="success-img pt-12">
				<section className="flex flex-col items-center">
					<Image
						src="/assets/gifs/success.gif"
						height={300}
						width={280}
						alt="success"
					/>
					<h2 className="mb-6 max-w-[600px] text-center font-bold text-3xl md:text-4xl">
						Your <span className="text-green-500">appointment request</span> has
						been successfully submitted!
					</h2>
					<p>We&apos;ll be in touch shortly to confirm.</p>
				</section>

				<section className="flex w-full flex-col items-center gap-8 border-neutral-900 border-y-2 py-8 md:w-fit md:flex-row dark:border-muted">
					<p>Requested appointment details: </p>
					<div className="flex items-center gap-3">
						<Image
							// biome-ignore lint/style/noNonNullAssertion: <explanation>
							src={doctor?.image!}
							alt="doctor"
							width={100}
							height={100}
							className="size-6"
						/>
						<p className="whitespace-nowrap">Dr. {doctor?.name}</p>
					</div>
					<div className="flex items-center gap-2">
						<Calendar size={20} />
						<p> {formatDateTime(appointment.schedule).dateTime}</p>
					</div>
				</section>

				<Button className="" asChild>
					<Link href={`/patient/${userId}/new-appointment`}>
						New Appointment
					</Link>
				</Button>

				<p className="copyright">© 2024 CarePluse</p>
			</div>
		</div>
	);
};

export default RequestSuccess;
