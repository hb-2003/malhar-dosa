import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

const hourlyTraffic = [
  { hour: "10 AM", value: 26 },
  { hour: "12 PM", value: 68 },
  { hour: "2 PM", value: 49 },
  { hour: "5 PM", value: 71 },
  { hour: "8 PM", value: 58 },
];

export default function AnalyticsPage() {
  return (
    <div>
      <DashboardHeader title="Analytics" description="Demo-only demand snapshots for service planning." />
      <section className="card-surface rounded-2xl p-5">
        <h3 className="text-2xl text-[var(--color-ink)]">Hourly Footfall</h3>
        <div className="mt-5 space-y-3">
          {hourlyTraffic.map((point) => (
            <div key={point.hour}>
              <div className="mb-1 flex items-center justify-between text-sm text-[var(--color-chutney)]/85">
                <span>{point.hour}</span>
                <span>{point.value}</span>
              </div>
              <div className="h-2 rounded-full bg-[var(--color-chutney)]/10">
                <div className="h-2 rounded-full bg-[var(--color-saffron)]" style={{ width: `${point.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
