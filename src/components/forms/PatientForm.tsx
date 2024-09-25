"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createUser } from "@/lib/actions/patient.actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Navbar } from "../layout/navbar";
import { PhoneInput } from "../ui/phone-input";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "Full name must be at least 2 characters.",
	}),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	phone: z
		.string()
		.refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
});

export default function PatientForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
		},
	});
	const [, setIsLoading] = useState(false);
	const router = useRouter();

	async function onSubmit({ name, email, phone }: z.infer<typeof formSchema>) {
		setIsLoading(true);
		try {
			const userData = {
				name,
				email,
				phone,
			};
			const user = await createUser(userData);
			if (user) router.push(`/patient/${user.$id}/register`);
		} catch (error) {
			setIsLoading(false);
			alert("Failed to create patient");
		}
	}

	return (
		<>
			<Navbar className="static px-0 pt-8 pb-20" />
			<h1 className="font-bold text-3xl">Hi there 👋</h1>
			<p className="text-muted">Get started with Appointments.</p>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-4 py-12"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Full Name</FormLabel>
								<FormControl>
									<Input placeholder="Enter your full name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="Enter your email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone Number</FormLabel>
								<FormControl>
									<PhoneInput
										defaultCountry="US"
										className=""
										placeholder="Enter your phone number"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="w-full">
						Submit
					</Button>
				</form>
			</Form>
		</>
	);
}
