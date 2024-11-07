"use client";

import {
	type ColumnDef,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { decryptKey } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { redirect } from "next/navigation";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export function DataTable<TData, TValue>({
	columns,
	data,
}: DataTableProps<TData, TValue>) {
	const encryptedKey =
		typeof window !== "undefined"
			? window.localStorage.getItem("accessKey")
			: null;

	useEffect(() => {
		const accessKey = encryptedKey && decryptKey(encryptedKey);

		if (accessKey !== process.env.NEXT_PUBLIC_ADMIN_PASSKEY?.toString()) {
			redirect("/");
		}
	}, [encryptedKey]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	return (
		<div className="z-10 w-full overflow-hidden rounded-lg border border-muted dark:border-neutral-800">
			<Table className="overflow-hidden rounded-lg">
				<TableHeader className=" bg-muted dark:bg-neutral-900">
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow
							key={headerGroup.id}
							className="border-muted border-b hover:bg-transparent dark:border-neutral-800"
						>
							{headerGroup.headers.map((header) => {
								return (
									<TableHead key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && "selected"}
								className="border-muted border-b hover:bg-transparent dark:border-neutral-800"
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center">
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
			<div className="flex w-full items-center justify-between space-x-2 p-4">
				<Button
					className="cursor-pointer"
					variant="ghost"
					size="sm"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					<ChevronLeft className="cursor-pointer" />
				</Button>
				<Button
					className="cursor-pointer"
					variant="ghost"
					size="sm"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					<ChevronRight className="cursor-pointer" />
				</Button>
			</div>
		</div>
	);
}
