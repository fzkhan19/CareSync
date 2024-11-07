"use client";

import { useEffect, useState } from "react";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { decryptKey, encryptKey } from "@/lib/utils";
import { X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const PasskeyModal = () => {
	const router = useRouter();
	const path = usePathname();
	const [open, setOpen] = useState(false);
	const [passkey, setPasskey] = useState("");
	const [error, setError] = useState("");

	const encryptedKey =
		typeof window !== "undefined"
			? window.localStorage.getItem("accessKey")
			: null;

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const accessKey = encryptedKey && decryptKey(encryptedKey);

		if (path)
			if (accessKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY?.toString()) {
				setOpen(false);
				router.push("/admin");
			} else {
				setOpen(true);
			}
	}, [encryptedKey]);

	const closeModal = () => {
		setOpen(false);
		router.push("/");
	};

	const validatePasskey = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		e.preventDefault();

		if (passkey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
			const encryptedKey = encryptKey(passkey);

			localStorage.setItem("accessKey", encryptedKey);

			setOpen(false);
		} else {
			setError("Invalid passkey. Please try again.");
		}
	};

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogContent className="space-y-5 border-neutral-800 outline-none dark:bg-black">
				<AlertDialogHeader>
					<AlertDialogTitle className="flex items-start justify-between">
						Admin Access Verification
						<X
							size={20}
							onClick={() => closeModal()}
							className="cursor-pointer"
						/>
					</AlertDialogTitle>
					<AlertDialogDescription>
						To access the admin page, please enter the passkey.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<div>
					<InputOTP
						maxLength={6}
						value={passkey}
						onChange={(value) => setPasskey(value)}
					>
						<InputOTPGroup className="flex w-full justify-between">
							{[...Array(6)].map((_, index) => (
								<InputOTPSlot
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									className="flex size-16 justify-center rounded-md border border-neutral-900 font-bold text-4xl dark:border-muted"
									index={index}
								/>
							))}
						</InputOTPGroup>{" "}
					</InputOTP>

					{error && (
						<p className="shad-error mt-4 flex justify-center text-14-regular">
							{error}
						</p>
					)}
				</div>
				<AlertDialogFooter>
					<AlertDialogAction
						onClick={(e) => validatePasskey(e)}
						className="shad-primary-btn w-full"
					>
						Enter Admin Passkey
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default PasskeyModal;
