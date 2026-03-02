import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

const customers = [
  { name: "Ananya Rao", visits: 12, favorite: "Malhar Signature Dosa" },
  { name: "Lucas Morgan", visits: 7, favorite: "Paneer Pepper Melt" },
  { name: "Sana Ali", visits: 10, favorite: "Mysore Fire Fold" },
  { name: "Daniel Kim", visits: 5, favorite: "Ragi Garden Crepe" },
];

export default function CustomersPage() {
  return (
    <div>
      <DashboardHeader title="Customer Insights" description="Repeat visitor highlights from static sample data." />
      <section className="card-surface rounded-2xl p-5">
        <ul className="space-y-3">
          {customers.map((customer) => (
            <li key={customer.name} className="rounded-xl border border-[var(--color-chutney)]/15 bg-white/60 px-4 py-3">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-[var(--color-ink)]">{customer.name}</p>
                  <p className="text-sm text-[var(--color-chutney)]/80">Favorite: {customer.favorite}</p>
                </div>
                <span className="pill text-[var(--color-leaf)]">{customer.visits} visits</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
