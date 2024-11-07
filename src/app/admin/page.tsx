import { StatCard } from "@/components/StatCard";
import { Navbar } from "@/components/layout/navbar";
import { DataTable } from "@/components/table/DataTable";
import { columns } from "@/components/table/columns";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const AdminPage = async () => {
	const appointments = await getRecentAppointmentList();

	return (
		<div className="mx-auto flex max-w-7xl flex-col">
			<header>
				<Navbar isAdmin className="static px-0 pt-8 pb-20" />
			</header>
			<main className="flex flex-col items-center space-y-6 px-[5%] pb-12 xl:space-y-12 xl:px-12">
				<section className="w-full space-y-4">
					<h1 className="font-bold text-4xl md:text-5xl">Welcome 👋</h1>
					<p className="text-neutral-900 md:text-lg dark:text-muted">
						Start the day with managing new appointments
					</p>
				</section>

				<section className="flex w-full flex-col justify-between gap-5 sm:flex-row xl:gap-10">
					<StatCard
						type="appointments"
						count={appointments.scheduledCount}
						label="Scheduled appointments"
						icon={"/assets/icons/appointments.svg"}
					/>
					<StatCard
						type="pending"
						count={appointments.pendingCount}
						label="Pending appointments"
						icon={"/assets/icons/pending.svg"}
					/>
					<StatCard
						type="cancelled"
						count={appointments.cancelledCount}
						label="Cancelled appointments"
						icon={"/assets/icons/cancelled.svg"}
					/>
				</section>

				<DataTable columns={columns} data={appointments.documents} />
			</main>
		</div>
	);
};

export default AdminPage;
