"use client";

import Image from "next/image";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { convertFileToUrl } from "@/lib/utils";
import { Upload } from "lucide-react";

type FileUploaderProps = {
	files: File[] | undefined;
	onChange: (files: File[]) => void;
};

export const FileUploader = ({ files, onChange }: FileUploaderProps) => {
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const onDrop = useCallback((acceptedFiles: File[]) => {
		onChange(acceptedFiles);
	}, []);

	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
		<div
			{...getRootProps()}
			className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-md border border-primary border-dashed p-5 text-12-regular"
		>
			<input {...getInputProps()} />
			{files && files?.length > 0 ? (
				<Image
					src={convertFileToUrl(files[0])}
					width={1000}
					height={1000}
					alt="uploaded image"
					className="max-h-[400px] overflow-hidden object-cover"
				/>
			) : (
				<div className="flex cursor-pointer flex-col items-center gap-4">
					<Upload className="size-8" />
					<div className="file-upload_label">
						<p className="text-14-regular ">
							<span className="text-primary">Click to upload </span>
							or drag and drop
						</p>
						<p className="text-12-regular">
							SVG, PNG, JPG or GIF (max. 800px X 400px)
						</p>
					</div>
				</div>
			)}
		</div>
	);
};
