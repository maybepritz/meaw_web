import { AdminLogsStats } from "@/components/logs-stats";
import { AdminLogsTable } from "@/components/logs-table";
import { AdminLogsFilters } from "@/components/logs-filters";

export default async function AdminLogsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <AdminLogsStats />

          <div className="px-4 lg:px-6">
            <AdminLogsFilters />
          </div>

          <AdminLogsTable />
        </div>
      </div>
    </div>
  );
}
