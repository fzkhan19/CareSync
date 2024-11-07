"use client";

import type { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { Doctors } from "@/constants";
import { formatDateTime } from "@/lib/utils";
import type { Appointment } from "@/types/appwrite.types";

import { AppointmentModal } from "../AppointmentModal";
import { StatusBadge } from "../StatusBadge";

export const columns: ColumnDef<Appointment>[] = [
	{
		header: "#",
		cell: ({ row }) => {
			return <p className="font-medium text-sm ">{row.index + 1}</p>;
		},
	},
	{
		accessorKey: "patient",
		header: "Patient",
		cell: ({ row }) => {
			const appointment = row.original;
			return <p className="font-medium text-sm">{appointment.patient.name}</p>;
		},
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {
			const appointment = row.original;
			return (
				<div className="min-w-[115px]">
					<StatusBadge status={appointment.status} />
				</div>
			);
		},
	},
	{
		accessorKey: "schedule",
		header: "Appointment",
		cell: ({ row }) => {
			const appointment = row.original;
			return (
				<p className="min-w-[100px] text-sm">
					{formatDateTime(appointment.schedule).dateTime}
				</p>
			);
		},
	},
	{
		accessorKey: "primaryPhysician",
		header: "Doctor",
		cell: ({ row }) => {
			const appointment = row.original;

			const doctor = Doctors.find(
				(doctor) => doctor.name === appointment.primaryPhysician,
			);

			return (
				<div className="flex items-center gap-3">
					<Image
						// biome-ignore lint/style/noNonNullAssertion: <explanation>
						src={doctor?.image!}
						alt="doctor"
						width={100}
						height={100}
						className="size-8"
					/>
					<p className="whitespace-nowrap">Dr. {doctor?.name}</p>
				</div>
			);
		},
	},
	{
		id: "actions",
		header: () => <div className="pl-4">Actions</div>,
		cell: ({ row }) => {
			const appointment = row.original;

			return (
				<div className="flex gap-1">
					<AppointmentModal
						patientId={appointment.patient.$id}
						userId={appointment.userId}
						appointment={appointment}
						type="schedule"
						title="Schedule Appointment"
						description="Please confirm the following details to schedule."
					/>
					<AppointmentModal
						patientId={appointment.patient.$id}
						userId={appointment.userId}
						appointment={appointment}
						type="cancel"
						title="Cancel Appointment"
						description="Are you sure you want to cancel your appointment?"
					/>
				</div>
			);
		},
	},
];