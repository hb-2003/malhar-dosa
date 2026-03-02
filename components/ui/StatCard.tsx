import { DashboardMetric } from "@/lib/data";

type StatCardProps = {
  metric: DashboardMetric;
};

export function StatCard({ metric }: StatCardProps) {
  return (
    <article className="card-surface rounded-2xl p-4">
      <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-chutney)]/75">{metric.label}</p>
      <p className="mt-2 text-2xl font-bold text-[var(--color-ink)]">{metric.value}</p>
      <p className="mt-1 text-sm font-semibold text-[var(--color-leaf)]">{metric.delta}</p>
    </article>
  );
}
