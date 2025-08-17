import { SettingsCards } from "@/components/settings-cards";
import { SettingsForm } from "@/components/settings-form";
import { auth } from "@/auth";

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">          
          <SettingsCards />
          <div className="px-4 lg:px-6">
            <SettingsForm user={session?.user} />
          </div>
        </div>
      </div>
    </div>
  );
}