import Image from "next/image";

import { AppointmentForm } from "@/components/forms/AppoinetmentForm";
import { Navbar } from "@/components/layout/navbar";
import { getPatient } from "@/lib/actions/patient.actions";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
	const patient = await getPatient(userId);

	return (
		<div className="flex h-screen max-h-screen">
			<section className="remove-scrollbar container my-auto">
				<div className="sub-container max-w-[860px] flex-1 justify-between">
					<Navbar className="static px-0 pt-8 pb-20" />

					<AppointmentForm
						patientId={patient?.$id}
						userId={userId}
						type="create"
					/>

					<p className="copyright mt-10 py-12">© 2024 CarePluse</p>
				</div>
			</section>

			<Image
				src="/assets/appointment-img.jpg"
				alt="appointment"
				width={1000}
				height={1000}
				className="hidden h-screen rounded-s-xl object-cover md:block"
			/>
		</div>
	);
};

export default Appointment;
