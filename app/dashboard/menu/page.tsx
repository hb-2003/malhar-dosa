import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MenuCard } from "@/components/ui/MenuCard";
import { menuItems } from "@/lib/data";

export default function DashboardMenuPage() {
  return (
    <div>
      <DashboardHeader title="Menu Management" description="Static catalog view for frontend-only setup." />
      <section className="grid gap-4 md:grid-cols-2">
        {menuItems.map((item) => (
          <MenuCard key={item.name} item={item} />
        ))}
      </section>
    </div>
  );
}
