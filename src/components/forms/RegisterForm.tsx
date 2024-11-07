"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SelectItem } from "@/components/ui/select";
import {
	Doctors,
	GenderOptions,
	IdentificationTypes,
	PatientFormDefaultValues,
} from "@/constants";
import { registerPatient } from "@/lib/actions/patient.actions";
import { useRouter } from "next/navigation";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import { FileUploader } from "../FileUploader";
import SubmitButton from "../SubmitButton";

const PatientFormValidation = z.object({
	name: z
		.string()
		.min(2, "Name must be at least 2 characters")
		.max(50, "Name must be at most 50 characters"),
	email: z.string().email("Invalid email address"),
	phone: z
		.string()
		.refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
	birthDate: z.coerce.date(),
	gender: z.enum(["male", "female", "other"]),
	address: z
		.string()
		.min(5, "Address must be at least 5 characters")
		.max(500, "Address must be at most 500 characters"),
	occupation: z
		.string()
		.min(2, "Occupation must be at least 2 characters")
		.max(500, "Occupation must be at most 500 characters"),
	emergencyContactName: z
		.string()
		.min(2, "Contact name must be at least 2 characters")
		.max(50, "Contact name must be at most 50 characters"),
	emergencyContactNumber: z
		.string()
		.refine(
			(emergencyContactNumber) => /^\+\d{10,15}$/.test(emergencyContactNumber),
			"Invalid phone number",
		),
	primaryPhysician: z.string().min(2, "Select at least one doctor"),
	insuranceProvider: z
		.string()
		.min(2, "Insurance name must be at least 2 characters")
		.max(50, "Insurance name must be at most 50 characters"),
	insurancePolicyNumber: z
		.string()
		.min(2, "Policy number must be at least 2 characters")
		.max(50, "Policy number must be at most 50 characters"),
	allergies: z.string().optional(),
	currentMedication: z.string().optional(),
	familyMedicalHistory: z.string().optional(),
	pastMedicalHistory: z.string().optional(),
	identificationType: z.string().optional(),
	identificationNumber: z.string().optional(),
	identificationDocument: z.custom<File[]>().optional(),
	treatmentConsent: z
		.boolean()
		.default(false)
		.refine((value) => value === true, {
			message: "You must consent to treatment in order to proceed",
		}),
	disclosureConsent: z
		.boolean()
		.default(false)
		.refine((value) => value === true, {
			message: "You must consent to disclosure in order to proceed",
		}),
	privacyConsent: z
		.boolean()
		.default(false)
		.refine((value) => value === true, {
			message: "You must consent to privacy in order to proceed",
		}),
});

const RegisterForm = ({ user }: { user: User }) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const form = useForm<z.infer<typeof PatientFormValidation>>({
		resolver: zodResolver(PatientFormValidation),
		defaultValues: {
			...PatientFormDefaultValues,
			name: user.name,
			email: user.email,
			phone: user.phone,
		},
	});

	const onSubmit = async (values: z.infer<typeof PatientFormValidation>) => {
		setIsLoading(true);

		// Store file info in form data as
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		let formData: any;
		if (
			values.identificationDocument &&
			values.identificationDocument?.length > 0
		) {
			const blobFile = new Blob([values.identificationDocument[0]], {
				type: values.identificationDocument[0].type,
			});

			formData = new FormData();
			formData.append("blobFile", blobFile);
			formData.append("fileName", values.identificationDocument[0].name);
		}

		try {
			const patient = {
				userId: user.$id,
				name: values.name,
				email: values.email,
				phone: values.phone,
				birthDate: new Date(values.birthDate),
				gender: values.gender,
				address: values.address,
				occupation: values.occupation,
				emergencyContactName: values.emergencyContactName,
				emergencyContactNumber: values.emergencyContactNumber,
				primaryPhysician: values.primaryPhysician,
				insuranceProvider: values.insuranceProvider,
				insurancePolicyNumber: values.insurancePolicyNumber,
				allergies: values.allergies,
				currentMedication: values.currentMedication,
				familyMedicalHistory: values.familyMedicalHistory,
				pastMedicalHistory: values.pastMedicalHistory,
				identificationType: values.identificationType,
				identificationNumber: values.identificationNumber,
				identificationDocument: values.identificationDocument
					? formData
					: undefined,
				privacyConsent: values.privacyConsent,
			};

			const newPatient = await registerPatient(patient);

			if (newPatient) {
				router.push(`/patient/${user.$id}/new-appointment`);
			}
		} catch (error) {
			console.log(error);
		}

		setIsLoading(false);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex-1 space-y-12"
			>
				<section className="space-y-3">
					<h1 className="font-bold text-4xl">Welcome 👋</h1>
					<p className="text-muted">Let us know more about yourself.</p>
				</section>

				<section className="space-y-6">
					<div className="mb-9 space-y-1">
						<h2 className="">Personal Information</h2>
					</div>

					{/* NAME */}

					<CustomFormField
						fieldType={FormFieldType.INPUT}
						control={form.control}
						name="name"
						placeholder="Enter your name"
					/>

					{/* EMAIL & PHONE */}
					<div className="flex flex-col gap-6 lg:flex-row">
						<CustomFormField
							fieldType={FormFieldType.INPUT}
							control={form.control}
							name="email"
							label="Email address"
							placeholder="Enter your email address"
						/>

						<CustomFormField
							fieldType={FormFieldType.PHONE_INPUT}
							control={form.control}
							name="phone"
							label="Phone Number"
							placeholder="Enter your phone number"
						/>
					</div>

					{/* BirthDate & Gender */}
					<div className="flex flex-col gap-6 lg:flex-row">
						<CustomFormField
							fieldType={FormFieldType.DATE_PICKER}
							control={form.control}
							name="birthDate"
							label="Date of birth"
							placeholder="Enter your date of birth"
						/>

						<CustomFormField
							fieldType={FormFieldType.SKELETON}
							control={form.control}
							name="gender"
							label="Gender"
							renderSkeleton={(field) => (
								<FormControl>
									<RadioGroup
										className="flex h-11 gap-6 xl:justify-between"
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										{GenderOptions.map((option, i) => (
											<div
												// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
												key={option + i}
												className="flex h-full flex-1 items-center gap-2 p-3"
											>
												<RadioGroupItem value={option} id={option} />
												<Label
													htmlFor={option}
													className="cursor-pointer capitalize"
												>
													{option}
												</Label>
											</div>
										))}
									</RadioGroup>
								</FormControl>
							)}
						/>
					</div>

					{/* Address & Occupation */}
					<div className="flex flex-col gap-6 lg:flex-row">
						<CustomFormField
							fieldType={FormFieldType.INPUT}
							control={form.control}
							name="address"
							label="Address"
							placeholder="Enter your address"
						/>

						<CustomFormField
							fieldType={FormFieldType.INPUT}
							control={form.control}
							name="occupation"
							label="Occupation"
							placeholder="Enter your occupation"
						/>
					</div>

					{/* Emergency Contact Name & Emergency Contact Number */}
					<div className="flex flex-col gap-6 lg:flex-row">
						<CustomFormField
							fieldType={FormFieldType.INPUT}
							control={form.control}
							name="emergencyContactName"
							label="Emergency contact name"
							placeholder="Guardian's name"
						/>

						<CustomFormField
							fieldType={FormFieldType.PHONE_INPUT}
							control={form.control}
							name="emergencyContactNumber"
							label="Emergency contact number"
							placeholder="Enter your emergency contact number"
						/>
					</div>
				</section>

				<section className="space-y-6">
					<div className="mb-9 space-y-1">
						<h2 className="sub-header">Medical Information</h2>
					</div>

					{/* PRIMARY CARE PHYSICIAN */}
					<CustomFormField
						fieldType={FormFieldType.SELECT}
						control={form.control}
						name="primaryPhysician"
						label="Primary care physician"
						placeholder="Select a physician"
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

					{/* INSURANCE & POLICY NUMBER */}
					<div className="flex flex-col gap-6 lg:flex-row">
						<CustomFormField
							fieldType={FormFieldType.INPUT}
							control={form.control}
							name="insuranceProvider"
							label="Insurance provider"
							placeholder="Enter your insurance provider name"
						/>

						<CustomFormField
							fieldType={FormFieldType.INPUT}
							control={form.control}
							name="insurancePolicyNumber"
							label="Insurance policy number"
							placeholder="Enter your insurance policy number"
						/>
					</div>

					{/* ALLERGY & CURRENT MEDICATIONS */}
					<div className="flex flex-col gap-6 lg:flex-row">
						<CustomFormField
							fieldType={FormFieldType.TEXTAREA}
							control={form.control}
							name="allergies"
							label="Allergies (if any)"
							placeholder="Enter your allergies"
						/>

						<CustomFormField
							fieldType={FormFieldType.TEXTAREA}
							control={form.control}
							name="currentMedication"
							label="Current medications"
							placeholder="Enter your current medications"
						/>
					</div>

					{/* FAMILY MEDICATION & PAST MEDICATIONS */}
					<div className="flex flex-col gap-6 lg:flex-row">
						<CustomFormField
							fieldType={FormFieldType.TEXTAREA}
							control={form.control}
							name="familyMedicalHistory"
							label=" Family medical history (if relevant)"
							placeholder="Enter your family medical history"
						/>

						<CustomFormField
							fieldType={FormFieldType.TEXTAREA}
							control={form.control}
							name="pastMedicalHistory"
							label="Past medical history"
							placeholder="Enter your past medical history"
						/>
					</div>
				</section>

				<section className="space-y-6">
					<div className="mb-9 space-y-1">
						<h2 className="sub-header">Identification and Verfication</h2>
					</div>

					<CustomFormField
						fieldType={FormFieldType.SELECT}
						control={form.control}
						name="identificationType"
						label="Identification Type"
						placeholder="Select identification type"
					>
						{IdentificationTypes.map((type, i) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<SelectItem key={type + i} value={type}>
								{type}
							</SelectItem>
						))}
					</CustomFormField>

					<CustomFormField
						fieldType={FormFieldType.INPUT}
						control={form.control}
						name="identificationNumber"
						label="Identification Number"
						placeholder="Enter your identification number"
					/>

					<CustomFormField
						fieldType={FormFieldType.SKELETON}
						control={form.control}
						name="identificationDocument"
						label="Scanned Copy of Identification Document"
						renderSkeleton={(field) => (
							<FormControl>
								<FileUploader files={field.value} onChange={field.onChange} />
							</FormControl>
						)}
					/>
				</section>

				<section className="space-y-6">
					<div className="mb-9 space-y-1">
						<h2 className="sub-header">Consent and Privacy</h2>
					</div>

					<CustomFormField
						fieldType={FormFieldType.CHECKBOX}
						control={form.control}
						name="treatmentConsent"
						label="I consent to receive treatment for my health condition."
					/>

					<CustomFormField
						fieldType={FormFieldType.CHECKBOX}
						control={form.control}
						name="disclosureConsent"
						label="I consent to the use and disclosure of my health
            information for treatment purposes."
					/>

					<CustomFormField
						fieldType={FormFieldType.CHECKBOX}
						control={form.control}
						name="privacyConsent"
						label="I acknowledge that I have reviewed and agree to the
            privacy policy"
					/>
				</section>

				<SubmitButton isLoading={isLoading}>Submit and Continue</SubmitButton>
			</form>
		</Form>
	);
};

export default RegisterForm;