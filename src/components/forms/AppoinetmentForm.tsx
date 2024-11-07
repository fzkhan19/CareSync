"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { type Dispatch, type SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { SelectItem } from "@/components/ui/select";
import { Doctors } from "@/constants";
import {
	createAppointment,
	updateAppointment,
} from "@/lib/actions/appointment.actions";
import { getAppointmentSchema } from "@/lib/validation";
import type { Appointment } from "@/types/appwrite.types";

import "react-datepicker/dist/react-datepicker.css";

import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { Form } from "../ui/form";

export const AppointmentForm = ({
	userId,
	patientId,
	type = "create",
	appointment,
	setOpen,
}: {
	userId: string;
	patientId: string;
	type: "create" | "schedule" | "cancel";
	appointment?: Appointment;
	setOpen?: Dispatch<SetStateAction<boolean>>;
}) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const AppointmentFormValidation = getAppointmentSchema(type);

	const form = useForm<z.infer<typeof AppointmentFormValidation>>({
		resolver: zodResolver(AppointmentFormValidation),
		defaultValues: {
			primaryPhysician: appointment ? appointment?.primaryPhysician : "",
			schedule: appointment
				? // biome-ignore lint/style/noNonNullAssertion: <explanation>
					new Date(appointment?.schedule!)
				: new Date(Date.now()),
			reason: appointment ? appointment.reason : "",
			note: appointment?.note || "",
			cancellationReason: appointment?.cancellationReason || "",
		},
	});

	const onSubmit = async (
		values: z.infer<typeof AppointmentFormValidation>,
	) => {
		setIsLoading(true);

		// biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
		let status;
		switch (type) {
			case "schedule":
				status = "scheduled";
				break;
			case "cancel":
				status = "cancelled";
				break;
			default:
				status = "pending";
		}

		try {
			if (type === "create" && patientId) {
				const appointment = {
					userId,
					patient: patientId,
					primaryPhysician: values.primaryPhysician,
					schedule: new Date(values.schedule),
					// biome-ignore lint/style/noNonNullAssertion: <explanation>
					reason: values.reason!,
					status: status as Status,
					note: values.note,
				};

				const newAppointment = await createAppointment(appointment);

				console.log(newAppointment);

				if (newAppointment) {
					form.reset();
					router.push(
						`/patient/${userId}/new-appointment/success?appointmentId=${newAppointment.$id}`,
					);
				}
			} else {
				const appointmentToUpdate = {
					userId,
					// biome-ignore lint/style/noNonNullAssertion: <explanation>
					appointmentId: appointment?.$id!,
					appointment: {
						primaryPhysician: values.primaryPhysician,
						schedule: new Date(values.schedule),
						status: status as Status,
						cancellationReason: values.cancellationReason,
					},
					timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
					type,
				};

				const updatedAppointment = await updateAppointment(appointmentToUpdate);

				if (updatedAppointment) {
					setOpen?.(false);
					form.reset();
				}
			}
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	// biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
	let buttonLabel;
	switch (type) {
		case "cancel":
			buttonLabel = "Cancel Appointment";
			break;
		case "schedule":
			buttonLabel = "Schedule Appointment";
			break;
		default:
			buttonLabel = "Submit Appointment";
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
				{type === "create" && (
					<section className="mb-12 space-y-4">
						<h1 className="header">New Appointment</h1>
						<p className="text-dark-700">
							Request a new appointment in 10 seconds.
						</p>
					</section>
				)}

				{type !== "cancel" && (
					<>
						<CustomFormField
							fieldType={FormFieldType.SELECT}
							control={form.control}
							name="primaryPhysician"
							label="Doctor"
							placeholder="Select a doctor"
						>
							{Doctors.map((doctor, i) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<SelectItem key={doctor.name + i} value={doctor.name}>
									<div className="flex cursor-pointer items-center gap-2">
										<Image
											src={doctor.image}
											width={32}
											height={32}
											alt="doctor"
											className="rounded-full border border-dark-500"
										/>
										<p>{doctor.name}</p>
									</div>
								</SelectItem>
							))}
						</CustomFormField>

						<CustomFormField
							fieldType={FormFieldType.DATE_PICKER}
							control={form.control}
							name="schedule"
							label="Expected appointment date"
							showTimeSelect
							dateFormat="MM/dd/yyyy  -  h:mm aa"
						/>

						<div
							className={`flex flex-col gap-6 ${type === "create" && "xl:flex-row"}`}
						>
							<CustomFormField
								fieldType={FormFieldType.TEXTAREA}
								control={form.control}
								name="reason"
								label="Appointment reason"
								placeholder="Enter your appointment reason"
								disabled={type === "schedule"}
							/>

							<CustomFormField
								fieldType={FormFieldType.TEXTAREA}
								control={form.control}
								name="note"
								label="Comments/notes"
								placeholder="Add any comments you want to pass onto"
								disabled={type === "schedule"}
							/>
						</div>
					</>
				)}

				{type === "cancel" && (
					<CustomFormField
						fieldType={FormFieldType.TEXTAREA}
						control={form.control}
						name="cancellationReason"
						label="Reason for cancellation"
						placeholder="Please enter your reason for cancellation"
					/>
				)}

				<SubmitButton
					isLoading={isLoading}
					className={`${type === "cancel" ? "shad-danger-btn" : "shad-primary-btn"} w-full`}
				>
					{buttonLabel}
				</SubmitButton>
			</form>
		</Form>
	);
};
