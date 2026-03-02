import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatCard } from "@/components/ui/StatCard";
import { dashboardMetrics, orders } from "@/lib/data";

export default function DashboardPage() {
  return (
    <div>
      <DashboardHeader title="Today at a glance" description="Live operations snapshot with static demo data." />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <StatCard key={metric.label} metric={metric} />
        ))}
      </section>

      <section className="card-surface mt-6 rounded-2xl p-5">
        <h3 className="text-2xl text-[var(--color-ink)]">Recent Orders</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[42rem] border-separate border-spacing-y-2 text-left">
            <thead className="text-xs uppercase tracking-[0.1em] text-[var(--color-chutney)]/70">
              <tr>
                <th className="px-3">Order</th>
                <th className="px-3">Customer</th>
                <th className="px-3">Items</th>
                <th className="px-3">Status</th>
                <th className="px-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="rounded-xl bg-white/70 text-sm text-[var(--color-chutney)]">
                  <td className="rounded-l-xl px-3 py-3 font-bold">{order.id}</td>
                  <td className="px-3 py-3">{order.customer}</td>
                  <td className="px-3 py-3">{order.items}</td>
                  <td className="px-3 py-3">{order.status}</td>
                  <td className="rounded-r-xl px-3 py-3 font-bold text-[var(--color-saffron)]">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
