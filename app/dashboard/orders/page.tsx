import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { orders } from "@/lib/data";

export default function OrdersPage() {
  return (
    <div>
      <DashboardHeader title="Orders Queue" description="Track preparation and service status for active tables." />
      <div className="grid gap-4 md:grid-cols-2">
        {orders.map((order) => (
          <article key={order.id} className="card-surface rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.1em] text-[var(--color-chutney)]/75">{order.id}</p>
            <h3 className="mt-2 text-2xl text-[var(--color-ink)]">{order.customer}</h3>
            <p className="mt-1 text-sm text-[var(--color-chutney)]/85">{order.items}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="pill text-[var(--color-leaf)]">{order.status}</span>
              <span className="text-lg font-black text-[var(--color-saffron)]">{order.amount}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
